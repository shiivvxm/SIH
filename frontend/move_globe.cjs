const fs = require('fs');
let c = fs.readFileSync('src/pages/Landing.tsx', 'utf8');

c = c.replace('<div className="min-h-screen flex flex-col font-sans bg-white selection:bg-black selection:text-white">',
  '<div className="min-h-screen flex flex-col font-sans bg-white selection:bg-black selection:text-white relative overflow-hidden">\n      <div className="fixed right-[-20%] top-[10%] w-[800px] h-[800px] opacity-[0.25] pointer-events-none z-0">\n        <GlobeAnalytics speed={0.001} className="w-full h-full" />\n      </div>'
);

const regex = /<div \s*className="bg-white rounded-2xl shadow-\[0_20px_40px_-15px_rgba\(0,0,0,0\.1\)\] w-full max-w-\[500px\] aspect-\[4\/3\] flex flex-col border border-gray-100 overflow-hidden relative"[\s\S]*?<\/div>\n          <\/div>/;

const replacement = `<div 
              className="bg-white p-8 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] w-full max-w-[500px] aspect-[4/3] flex flex-col border border-gray-100"
              style={{ transform: 'perspective(1200px) rotateY(-8deg) rotateX(4deg)', transformStyle: 'preserve-3d' }}
            >
              <div className="flex justify-between items-start mb-12">
                <div>
                  <div className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-1 font-mono">ROUTE ANALYSIS</div>
                  <div className="text-lg font-semibold text-black flex items-center gap-2">
                    Aus <span className="text-gray-400 font-normal">&rarr;</span> Ind
                  </div>
                </div>
                <div className="flex gap-1 items-center h-6">
                  <div className="w-1 h-1 rounded-full bg-gray-200"></div>
                  <div className="w-1 h-1 rounded-full bg-gray-200"></div>
                  <div className="w-1 h-1 rounded-full bg-gray-200"></div>
                </div>
              </div>
              
              <div className="flex-1 relative w-full h-full mt-auto">
                <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible" style={{ transform: 'translateZ(20px)' }}>
                  <path d="M 10 170 C 150 100, 200 200, 390 60" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />
                  <path d="M 10 190 C 150 50, 250 180, 385 45" fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="385" cy="45" r="5" fill="#000000" />
                </svg>
              </div>
            </div>
          </div>`;

c = c.replace(regex, replacement);

fs.writeFileSync('src/pages/Landing.tsx', c);
