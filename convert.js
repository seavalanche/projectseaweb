const fs = require('fs');

const inputFile = 'filenames.txt';
const outputFile = 'result.json';

// This is the magic helper function!
function formatTitle(name) {
  // 1. Remove the file extension
  let title = name.replace(/\.[^/.]+$/, "");

  // 2. Split by dash to separate the parts
  const parts = title.split('-');

  // If we have enough parts, let's treat the first few as IDs 
  // and the rest as the actual name.
  // For "2021-221-city-night", parts[0]=2021, parts[1]=221, parts[2]=city, parts[3]=night

  if (parts.length > 2) {
    const idPart = parts.slice(0, 2).join(' - '); // Joins "2021" and "221" with " - "
    const namePart = parts.slice(2).join(' ');    // Joins "city" and "night" with a space
    title = `${idPart} - ${namePart}`;
  } else {
    // Fallback if the filename doesn't follow the pattern
    title = parts.join(' - ');
  }

  // 3. Capitalize everything nicely
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
