import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Search, Filter, Ship } from 'lucide-react';

export default function LiveFleetTracking() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Live Fleet Tracking</h1>
          <p className="text-xs text-gray-500 font-medium">Monitor vessel movement, ETA and operational status across active routes.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-lg shadow-sm">
            <Search className="w-4 h-4 text-gray-400"/>
            <input type="text" placeholder="Search vessel, IMO..." className="text-xs font-medium outline-none w-48"/>
          </div>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
            <Filter className="w-3.5 h-3.5"/> Filters
          </button>
        </div>
      </div>

      <div className="h-[400px] bg-[#0F172A] rounded-xl border border-gray-800 flex items-center justify-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #3B82F6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
         <div className="text-center relative z-10 text-blue-500/50">
            <Globe className="w-16 h-16 mx-auto mb-3"/>
            <div className="text-[10px] font-bold uppercase tracking-widest">Interactive Maritime Map (Simulated)</div>
         </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-gray-50/80 border-b border-gray-100">
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Vessel</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">IMO</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Route</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">ETA</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Status</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-50">
                  <tr className="hover:bg-gray-50 cursor-pointer">
                     <td className="py-4 px-4 text-xs font-bold text-gray-900 flex items-center gap-2"><Ship className="w-4 h-4 text-gray-400"/> MV Ocean Star</td>
                     <td className="py-4 px-4 text-[11px] font-mono text-gray-500">9834211</td>
                     <td className="py-4 px-4 text-[11px] font-semibold text-gray-600">Newcastle → Paradip</td>
                     <td className="py-4 px-4 text-[11px] font-mono text-gray-900">22 May 14:00</td>
                     <td className="py-4 px-4"><span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">AT SEA</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50 cursor-pointer">
                     <td className="py-4 px-4 text-xs font-bold text-gray-900 flex items-center gap-2"><Ship className="w-4 h-4 text-gray-400"/> MV Horizon</td>
                     <td className="py-4 px-4 text-[11px] font-mono text-gray-500">9722340</td>
                     <td className="py-4 px-4 text-[11px] font-semibold text-gray-600">Richards Bay → Vizag</td>
                     <td className="py-4 px-4 text-[11px] font-mono text-gray-900">24 May 08:30</td>
                     <td className="py-4 px-4"><span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">DELAYED</span></td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
    </motion.div>
  );
}
