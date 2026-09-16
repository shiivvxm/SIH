import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, AlertTriangle, Info } from 'lucide-react';

export default function AlertsRisks() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Alerts & Operational Risks</h1>
        <p className="text-xs text-gray-500 font-medium">Identify vessel, port, berth, weather and route risks requiring operational attention.</p>
      </div>

      <div className="flex items-center gap-2 mb-4">
         <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mr-2">Filters:</span>
         {['All', 'Critical', 'High', 'Medium', 'Low', 'Acknowledged'].map((f, i) => (
            <button key={i} className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest ${i===0 ? 'bg-gray-900 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}>
               {f}
            </button>
         ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
         <div className="bg-white rounded-xl border border-red-200 p-5 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
            <div className="flex justify-between items-start mb-3">
               <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 border border-red-100">
                  <AlertTriangle className="w-3 h-3"/> HIGH SEVERITY
               </span>
               <span className="text-[10px] font-bold text-gray-400">12 Mins Ago</span>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Paradip Port</h3>
            <p className="text-xs text-gray-700 font-medium mb-3">Expected waiting time increased by 7.2 hours.</p>
            
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 mb-4">
               <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Impact</div>
               <div className="text-xs font-semibold text-gray-900 mb-3">Potential demurrage exposure.</div>
               <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Recommended Action</div>
               <div className="text-xs font-semibold text-blue-700">Review berth allocation and arrival window.</div>
            </div>

            <div className="flex items-center gap-3">
               <button className="flex-1 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest py-2.5 rounded-lg hover:bg-gray-800 transition-colors">Acknowledge</button>
               <button className="flex-1 bg-white text-gray-900 border border-gray-200 text-[10px] font-bold uppercase tracking-widest py-2.5 rounded-lg hover:bg-gray-50 transition-colors">View Details</button>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
