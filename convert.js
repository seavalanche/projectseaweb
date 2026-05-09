const fs = require('fs');

const inputFile = 'filenames.txt';
const outputFile = 'result.json';

// This is the magic helper function!
function formatTitle(name) {
  // 1. Remove the file extension (like .webp)
  let title = name.replace(/\.[^/.]+$/, "");

  // 2. Replace dashes with spaces
  // We use a regex to turn "-" into " - " so it looks like your original format
  title = title.split('-').map(part => part.trim()).join(' - ');

  // 3. Make it look pretty (Capitalize the first letter of each word)
  // This helps turn "glaceon" back into "Glaceon"
  title = title.replace(/\b\w/g, char => char.toUpperCase());

  return title;
}

try {
  const data = fs.readFileSync(inputFile, 'utf8');
  const filenames = data.split(/\r?\n/).map(line => line.trim()).filter(line => line !== "");

  const result = filenames.map(name => {
    return {
      filename: name,
      title: formatTitle(name), // Uses our helper here!
      caption: { "en": "", "jp": "" }
    };
  });

  fs.writeFileSync(outputFile, JSON.stringify(result, null, 2));

  console.log(`Success! ✨ I've created ${outputFile} with pretty titles just for you, little sis.`);
} catch (err) {
  if (err.code === 'ENOENT') {
    console.error(`Error: Could not find "${inputFile}".`);
  } else {
    console.error("Oops, something went wrong:", err.message);
  }
}
