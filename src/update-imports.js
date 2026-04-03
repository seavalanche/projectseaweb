/* ──────────────────────────────────────────────
   update-imports.js (Fixed Version)
   ────────────────────────────────────────────── */
const fs = require('fs');
const path = require('path');

// ---------- 1. Read the log & build a clean map ----------
const logPath = path.join(__dirname, 'rename-log.txt'); // adjust if the log lives elsewhere
const logText = fs.readFileSync(logPath, 'utf8');

const renameMap = {};           // oldName → newName

logText.split(/\r?\n/).forEach(line => {
    // FIX 1: Use regex to cleanly capture EVERYTHING before and after "renamed to"
    const m = line.match(/^(.*?)\s+renamed to\s+(.+)$/);
    if (!m) return;

    const oldFullPath = m[1].trim();
    const newFullPath = m[2].trim();

    const oldName = path.basename(oldFullPath); // "D31_-_Design_Arna.jpg"
    const newName = path.basename(newFullPath); // "D31_-_Design_Arna.jpg"

    renameMap[oldName] = newName;
});

console.log('✨ Map built:', renameMap);

// ---------- 2. Walk the repo & replace import strings ----------
function walk(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(ent => {
        // FIX 3: Skip massive, irrelevant directories
        if (ent.name === 'node_modules' || ent.name === '.git' || ent.name === 'dist' || ent.name === 'build') {
            return;
        }

        const fullPath = path.join(dir, ent.name);

        if (ent.isDirectory()) return walk(fullPath); // recurse

        // FIX 2: Added 'json' to the list of allowed extensions
        if (!/\.(js|jsx|ts|tsx|css|scss|json)$/.test(ent.name)) return;

        const original = fs.readFileSync(fullPath, 'utf8');
        let updated = original;

        Object.entries(renameMap).forEach(([oldName, newName]) => {
            // Escape regex meta‑characters in the old file name
            const escOld = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

            /**
             * This pattern matches:
             *
             * " or '  → $1 (the opening quote)
             * optional path ending with / or \, may be empty  → $2
             * the old file name  → matched by escOld
             * closing quote " or '  → $3
             */
            const re = new RegExp(`(["'])([^"']*[\\\\/]?)${escOld}(["'])`, 'g');

            updated = updated.replace(re, (_, q1, prePath, q3) => {
                return `${q1}${prePath}${newName}${q3}`;
            });
        });

        if (updated !== original) {
            fs.writeFileSync(fullPath, updated);
            console.log('✅  Updated:', fullPath);
        }
    });
}

walk(process.cwd());   // start at the current folder
console.log('\n🎉 Done! All imports that could be found were updated.\n');