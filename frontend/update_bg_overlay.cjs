const fs = require('fs');
let c = fs.readFileSync('src/pages/Landing.tsx', 'utf8');

c = c.replace(
  '<div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]"></div>',
  '<div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-transparent"></div>'
);

fs.writeFileSync('src/pages/Landing.tsx', c);
