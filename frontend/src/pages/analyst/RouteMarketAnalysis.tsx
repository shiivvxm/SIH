import React from 'react';
import { motion } from 'framer-motion';

export default function RouteMarketAnalysis() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Route & Market Analysis</h1>
        <p className="text-xs text-gray-500 font-medium">Analyze freight economics, supply-demand conditions and operational risk across major trade routes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
         <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-xs font-black text-gray-900 mb-1">Australia → Paradip</div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Panamax / Coking Coal</div>
            <div className="space-y-2 text-xs border-b border-gray-100 pb-4 mb-4">
               <div className="flex justify-between"><span className="text-gray-500">Freight Rate</span><strong className="font-mono text-gray-900">$32.40 / MT</strong></div>
               <div className="flex justify-between"><span className="text-gray-500">30-Day Trend</span><strong className="text-red-600">+14.2%</strong></div>
               <div className="flex justify-between"><span className="text-gray-500">Est. Transit</span><strong className="font-mono text-gray-900">18 Days</strong></div>
            </div>
            <div className="text-[9px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded text-center uppercase tracking-widest">High Route Risk (Congestion)</div>
         </div>
         <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-xs font-black text-gray-900 mb-1">USA → Paradip</div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Capesize / Coal</div>
            <div className="space-y-2 text-xs border-b border-gray-100 pb-4 mb-4">
               <div className="flex justify-between"><span className="text-gray-500">Freight Rate</span><strong className="font-mono text-gray-900">$48.10 / MT</strong></div>
               <div className="flex justify-between"><span className="text-gray-500">30-Day Trend</span><strong className="text-green-600">-2.1%</strong></div>
               <div className="flex justify-between"><span className="text-gray-500">Est. Transit</span><strong className="font-mono text-gray-900">32 Days</strong></div>
            </div>
            <div className="text-[9px] font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-1 rounded text-center uppercase tracking-widest">Normal Route Risk</div>
         </div>
      </div>
    </motion.div>
  );
}
