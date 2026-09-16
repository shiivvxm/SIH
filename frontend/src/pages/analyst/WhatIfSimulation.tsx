import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Play } from 'lucide-react';

export default function WhatIfSimulation() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">What-If Simulation</h1>
        <p className="text-xs text-gray-500 font-medium">Evaluate how fuel prices, weather, route conditions and market changes affect freight economics.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
         <div className="xl:col-span-4 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-sm font-black text-gray-900 mb-6 uppercase tracking-widest">Scenario Builder</h2>
            <div className="space-y-5">
               <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 flex justify-between">
                     <span>Freight Rate Impact</span> <span>+15%</span>
                  </div>
                  <input type="range" className="w-full accent-blue-600" />
               </div>
               <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 flex justify-between">
                     <span>Fuel / Bunker Price</span> <span>$650 / MT</span>
                  </div>
                  <input type="range" className="w-full accent-blue-600" />
               </div>
               <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Port Congestion Risk</div>
                  <select className="w-full bg-gray-50 border border-gray-200 text-xs font-bold text-gray-900 px-3 py-2 rounded-lg outline-none">
                     <option>Critical (+3 days)</option>
                     <option>High (+2 days)</option>
                     <option>Normal</option>
                  </select>
               </div>
               <button className="w-full bg-gray-900 text-white py-3 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors mt-6">
                  <Play className="w-4 h-4"/> Run Scenario
               </button>
            </div>
         </div>

         <div className="xl:col-span-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-sm font-black text-gray-900 mb-6 uppercase tracking-widest">Simulation Output</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
               <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">BASELINE</div>
                  <div className="space-y-2 text-sm">
                     <div className="flex justify-between"><span className="text-gray-500 font-medium">Total Cost</span> <strong className="font-mono text-gray-900">$6.8M</strong></div>
                     <div className="flex justify-between"><span className="text-gray-500 font-medium">Waiting</span> <strong className="font-mono text-gray-900">2.1 Days</strong></div>
                     <div className="flex justify-between"><span className="text-gray-500 font-medium">Risk</span> <strong className="text-amber-600 bg-amber-50 px-1 rounded text-xs">Medium</strong></div>
                  </div>
               </div>
               
               <div className="bg-blue-50/30 rounded-xl p-5 border border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1 h-full bg-blue-500"></div>
                  <div className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-3">SCENARIO RESULT</div>
                  <div className="space-y-2 text-sm">
                     <div className="flex justify-between"><span className="text-gray-500 font-medium">Total Cost</span> <strong className="font-mono text-gray-900">$7.4M <span className="text-xs text-red-500">(+$600K)</span></strong></div>
                     <div className="flex justify-between"><span className="text-gray-500 font-medium">Waiting</span> <strong className="font-mono text-gray-900">4.3 Days <span className="text-xs text-red-500">(+2.2d)</span></strong></div>
                     <div className="flex justify-between"><span className="text-gray-500 font-medium">Risk</span> <strong className="text-red-700 bg-red-50 border border-red-200 px-1 rounded text-xs">High</strong></div>
                  </div>
               </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
               <div className="text-[9px] font-bold text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-1"><BrainCircuit className="w-3 h-3"/> AI-Assisted Scenario Interpretation</div>
               <p className="text-xs text-gray-700 font-medium leading-relaxed">Higher bunker prices and increased port congestion materially increase expected voyage cost. Consider an earlier charter window or alternate port to mitigate total downside exposure.</p>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
