import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Send } from 'lucide-react';

export default function EarlyWarnings() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Early Warnings</h1>
        <p className="text-xs text-gray-500 font-medium">Detect potential freight, demand, congestion and market disruptions before they impact procurement planning.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-white rounded-xl border border-red-200 shadow-sm overflow-hidden flex flex-col relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
            <div className="p-5 flex-1">
               <div className="flex justify-between items-start mb-3">
                  <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 border border-red-100">
                     <AlertTriangle className="w-3 h-3"/> HIGH SEVERITY
                  </span>
               </div>
               <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Newcastle → Paradip</div>
               <h3 className="text-sm font-bold text-gray-900 mb-2">Freight Rate Spike Expected</h3>
               
               <div className="grid grid-cols-2 gap-4 my-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div>
                     <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Probability</div>
                     <div className="text-sm font-mono font-bold text-gray-900">89%</div>
                  </div>
                  <div>
                     <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Expected Change</div>
                     <div className="text-sm font-mono font-bold text-red-600">+14.2%</div>
                  </div>
               </div>

               <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Recommended Analyst Action</div>
               <div className="text-xs font-semibold text-blue-700">Review chartering window and share insight.</div>
            </div>
            <div className="bg-gray-50 border-t border-gray-100 p-4 flex justify-end">
               <button className="bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
                  <Send className="w-3 h-3"/> Send Insight to Decision Maker
               </button>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
