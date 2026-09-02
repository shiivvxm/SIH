const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');
c = c.replace('<html lang="en">', '<html lang="en" class="scroll-smooth">');
fs.writeFileSync('index.html', c);
