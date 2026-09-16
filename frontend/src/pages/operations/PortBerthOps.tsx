import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Clock } from 'lucide-react';

export default function PortBerthOps() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Port & Berth Operations</h1>
        <p className="text-xs text-gray-500 font-medium">Monitor congestion, berth availability and vessel waiting time.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
         <div className="p-4 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2"><Anchor className="w-4 h-4"/> Port Congestion (Simulated)</h2>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-white border-b border-gray-100">
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Port</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Congestion</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Vessels Waiting</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Avg Wait</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-50">
                  <tr>
                     <td className="py-4 px-4 text-xs font-bold text-gray-900">Paradip</td>
                     <td className="py-4 px-4"><span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">HIGH</span></td>
                     <td className="py-4 px-4 text-xs font-mono font-bold text-gray-900">12</td>
                     <td className="py-4 px-4 text-xs font-mono font-bold text-amber-600">4.2 Days</td>
                  </tr>
                  <tr>
                     <td className="py-4 px-4 text-xs font-bold text-gray-900">Visakhapatnam</td>
                     <td className="py-4 px-4"><span className="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">LOW</span></td>
                     <td className="py-4 px-4 text-xs font-mono font-bold text-gray-900">2</td>
                     <td className="py-4 px-4 text-xs font-mono font-bold text-gray-900">0.8 Days</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
         <div className="p-4 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2"><Clock className="w-4 h-4"/> Berth Schedule</h2>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-white border-b border-gray-100">
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Vessel</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Port / Berth</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Arrival Time</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Berth Time</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Wait Duration</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-50">
                  <tr>
                     <td className="py-4 px-4 text-xs font-bold text-gray-900">MV Ocean Star</td>
                     <td className="py-4 px-4 text-xs font-medium text-gray-600">Paradip Berth #2</td>
                     <td className="py-4 px-4 text-[11px] font-mono text-gray-500">08:00</td>
                     <td className="py-4 px-4 text-[11px] font-mono text-gray-900">14:00</td>
                     <td className="py-4 px-4 text-xs font-mono font-bold text-gray-900">6h 00m</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
    </motion.div>
  );
}
