const fs = require('fs-extra');
const path = require('path');
const matter = require('gray-matter');

// --- CONFIGURATION ---
// const obsidianRoot = path.join(__dirname, 'public', 'Infinity Book', 'Characters Data');
const obsidianRoot = "E:\\A3 - Cloud Syncs\\Syncthing\\Obsidian\\Seavalanche Story\\Infinity Book\\Characters Data";
const charactersPublicDir = path.join(__dirname, 'public', 'characters');
const indexFilePath = path.join(charactersPublicDir, 'index.json');
const outputFile = path.join(__dirname, 'src', 'character-data.json');

async function buildObsidianMap(dir, map = new Map()) {
  if (!await fs.pathExists(dir)) return map; // Safety check
  const files = await fs.readdir(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = await fs.stat(fullPath);

    if (stat.isDirectory()) {
      await buildObsidianMap(fullPath, map);
    } else if (file.endsWith('.md')) {
      try {
        const content = await fs.readFile(fullPath, 'utf8');
        const { data } = matter(content);
        if (data && data.id) {
          map.set(String(data.id), fullPath);
        }
      } catch (e) {
        console.warn(`⚠️ Could not parse YAML in ${file}`);
      }
    }
  }
  return map;
}

// ... (keep your imports and buildObsidianMap as they are)

/**
 * Parses Markdown content by splitting it based on H2 headers (## HeaderName)
 * Returns an object where keys are the header names and values are the text below them.
 */
function parseMarkdownContent(content) {
  const sections = {};
  
  /** 
   * IMPROVED REGEX:
   * ^#{1,6}  -> Matches 1 to 6 '#' characters at the start of a line
   * \s+      -> Followed by one or more spaces
   * (.+)     -> Captures the title text
   */
  const regex = /^#{1,6}\s+(.+)$/gm;
  
  let match;
  const matches = [];

  // 1. Find all header positions (regardless of level #, ##, or ###)
  while ((match = regex.exec(content)) !== null) {
    matches.push({
      title: match[1].trim(),
      index: match.index,
      fullMatch: match[0]
    });
  }

  // 2. If no headers found, return the whole thing as 'bio'
  if (matches.length === 0) {
    return { bio: content.trim() };
  }

  // 3. Extract text between headers
  for (let i = 0; i < matches.length; i++) {
    const current = matches[i];
    const next = matches[i + 1];
    
    const start = current.index + current.fullMatch.length;
    const end = next ? next.index : content.length;
    
    let sectionText = content.substring(start, end).trim();

    // Clean up the key name (e.g., "Story Plot Details" -> "storyPlotDetails")
    const key = current.title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, "") 
      .split(' ')
      .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    sections[key] = sectionText;
  }

  return sections;
}

async function buildData() {
  try {
    console.log('🚀 Starting the Great Character Merge...');

    console.log('🔍 Indexing Obsidian notes...');
    const obsidianMap = await buildObsidianMap(obsidianRoot);
    console.log(`✅ Indexed ${obsidianMap.size} Obsidian notes.`);

    if (!(await fs.pathExists(indexFilePath))) {
      throw new Error(`Index file not found at ${indexFilePath}`);
    }
    const ids = await fs.readJson(indexFilePath);
    const allCharacters = [];

    for (const id of ids) {
      try {
        console.log(`Processing: ${id}...`);

        const baseDataPath = path.join(charactersPublicDir, id, 'data.json');
        if (!(await fs.pathExists(baseDataPath))) {
          console.warn(`⚠️ Skipping ${id}: data.json not found`);
          continue;
        }
        const baseData = await fs.readJson(baseDataPath);

        // 1. Get Obsidian Lore
        const obsidianFilePath = obsidianMap.get(String(id));
        let loreData = {};
        let parsedMarkdown = {}; // This will hold our split sections

        if (obsidianFilePath) {
          const fileContent = await fs.readFile(obsidianFilePath, 'utf8');
          const { data, content } = matter(fileContent);
          loreData = data;
          // NEW: Parse the markdown body into structured keys
          parsedMarkdown = parseMarkdownContent(content);
        }

        // 2. Helper function for Artworks
        const getArtPath = (artArray, folderName) => {
          if (!artArray || !Array.isArray(artArray)) return [];
          return artArray.map(art => ({
            ...art,
            src: art.src.startsWith('http') ? art.src : `characters/${id}/${folderName}/${art.src}`
          }));
        };

        // 3. Merge everything
        const mergedChar = {
          ...baseData,
          ...loreData,
          ...parsedMarkdown, // This spreads bio, personalities, details, etc., into the top level
          id: id,
          // Fallback for 'bio' if your frontend specifically looks for that key
          bio: parsedMarkdown.bio || parsedMarkdown.biography || "", 
          profilePicture: baseData.profilePicture ? `characters/${id}/${baseData.profilePicture}` : null,
          profilePicture2: baseData.profilePicture2 ? `characters/${id}/${baseData.profilePicture2}` : null,
          artworks: getArtPath(baseData.artworks, 'artworks'),
          tradearts: getArtPath(baseData.tradearts, 'tradearts'),
          collabarts: getArtPath(baseData.collabarts, 'collabarts'),
          giftarts: getArtPath(baseData.giftarts, 'giftarts'),
          commarts: getArtPath(baseData.commarts, 'commarts')
        };

        allCharacters.push(mergedChar);
      } catch (charErr) {
        console.error(`❌ Error processing character ${id}:`, charErr.message);
      }
    }

    await fs.outputJson(outputFile, allCharacters, { spaces: 2 });
    console.log(`\n✨ SUCCESS! Processed ${allCharacters.length} characters.`);
  } catch (err) {
    console.error('❌ CRITICAL ERROR:', err);
  }
}

buildData();
