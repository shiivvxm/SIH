const fs = require('fs');
let c = fs.readFileSync('src/pages/Landing.tsx', 'utf8');

c = c.replace(/import React from 'react';/, 'import React from "react";\nimport GlobeAnalytics from "../components/GlobeAnalytics";');

// Find the right content card and replace its inside
const oldCard = `<div 
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
            </div>`;

const newCard = `<div 
              className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] w-full max-w-[500px] aspect-[4/3] flex flex-col border border-gray-100 overflow-hidden relative"
              style={{ transform: 'perspective(1200px) rotateY(-8deg) rotateX(4deg)', transformStyle: 'preserve-3d' }}
            >
              <GlobeAnalytics />
              
              <div className="p-8 flex flex-col h-full relative z-10 pointer-events-none">
                <div className="flex justify-between items-start">
                  <div className="bg-white/80 backdrop-blur-md p-3 rounded-xl border border-gray-100 shadow-sm pointer-events-auto">
                    <div className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-1 font-mono">ROUTE ANALYSIS</div>
                    <div className="text-lg font-semibold text-black flex items-center gap-2">
                      Aus <span className="text-gray-400 font-normal">&rarr;</span> Ind
                    </div>
                  </div>
                  <div className="flex gap-1 items-center h-6 bg-white/50 backdrop-blur-sm p-2 rounded-full pointer-events-auto">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  </div>
                </div>

                {/* Optional floating labels as requested to make it feel premium */}
                <div className="mt-auto flex justify-between items-end">
                  <div className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm text-[10px] font-bold text-gray-500 uppercase tracking-widest pointer-events-auto">
                    VESSEL FLOW
                  </div>
                  <div className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm text-[10px] font-bold text-green-600 uppercase tracking-widest pointer-events-auto">
                    LIVE
                  </div>
                </div>
              </div>
            </div>`;

// Wait, standard string replace might fail if formatting is slightly off. Let's use regex that targets the specific div.
const regex = /<div\s+className="bg-white p-8 rounded-2xl shadow-\[0_20px_40px_-15px_rgba\(0,0,0,0\.1\)\] w-full max-w-\[500px\] aspect-\[4\/3\] flex flex-col border border-gray-100"[\s\S]*?<\/div>\s*<\/div>/;

if (c.match(regex)) {
   c = c.replace(regex, newCard + '\\n          </div>');
} else {
   console.log("Could not match the card block exactly. Doing a broader match.");
   // Just replace the <div className="flex-1 relative w-full h-full mt-auto"> block
   c = c.replace(/<div className="flex justify-between items-start mb-12">[\s\S]*?<\/svg>\s*<\/div>/, `<GlobeAnalytics />
              <div className="flex justify-between items-start mb-12 relative z-10 pointer-events-none">
                <div>
                  <div className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-1 font-mono">ROUTE ANALYSIS</div>
                  <div className="text-lg font-semibold text-black flex items-center gap-2">
                    Aus <span className="text-gray-400 font-normal">&rarr;</span> Ind
                  </div>
                </div>
                <div className="flex gap-1 items-center h-6">
                  <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                  <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                  <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                </div>
              </div>
              <div className="mt-auto flex justify-between items-end relative z-10 pointer-events-none">
                 <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Global Network Active</div>
              </div>`);
   
   // Add overflow-hidden to the card container
   c = c.replace(/className="bg-white p-8 rounded-2xl shadow-\[0_20px_40px_-15px_rgba\(0,0,0,0\.1\)\] w-full max-w-\[500px\] aspect-\[4\/3\] flex flex-col border border-gray-100"/, 'className="bg-white p-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] w-full max-w-[500px] aspect-[4/3] flex flex-col border border-gray-100 relative overflow-hidden"');
}

fs.writeFileSync('src/pages/Landing.tsx', c);
