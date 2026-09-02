const fs = require('fs');
let c = fs.readFileSync('src/pages/Login.tsx', 'utf8');

c = c.replace(
  '<div className="bg-surface rounded-2xl shadow-xl border border-outline-variant/30 p-8 flex flex-col items-center">',
  `<div className="bg-surface rounded-2xl shadow-xl border border-outline-variant/30 p-8 flex flex-col items-center relative">
          <Link 
            to="/" 
            className="absolute top-8 left-8 flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-gray-900 group transition-colors"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back
          </Link>`
);

fs.writeFileSync('src/pages/Login.tsx', c);
