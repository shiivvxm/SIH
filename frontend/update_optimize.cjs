const fs = require('fs');
let c = fs.readFileSync('src/pages/Landing.tsx', 'utf8');
c = c.replace('<span className="text-gray-900">Optimize.</span>', '<span className="text-gray-400">Optimize.</span>');
fs.writeFileSync('src/pages/Landing.tsx', c);
