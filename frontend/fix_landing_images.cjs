const fs = require('fs');
let c = fs.readFileSync('src/pages/Landing.tsx', 'utf8');

c = c.replace(/style=\{\{backgroundImage:\s*'url\([^)]+\)'\}\}/g, 'style={{background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"}}');
c = c.replace(/style=\{\{backgroundImage:\s*"url\([^)]+\)"\}\}/g, 'style={{background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"}}');

c = c.replace(/<img[^>]*src=["']https:\/\/lh3\.googleusercontent\.com[^>]*>/gi, '');

fs.writeFileSync('src/pages/Landing.tsx', c);
