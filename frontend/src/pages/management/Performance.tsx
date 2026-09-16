import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Anchor, Ship, Clock, TrendingUp } from 'lucide-react';

export default function Performance() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div>
        <div className="flex items-center gap-2 mb-2">
           <span className="text-[10px] font-bold tracking-widest uppercase bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">Operational Performance Intelligence</span>
        </div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Logistics Performance</h1>
        <p className="text-xs text-gray-500 font-medium">Executive monitoring of fleet utilization, voyage efficiency, port turnaround and cargo delivery performance.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {[
          { label: "Vessel Utilization", val: "94.6%", icon: <Ship className="w-4 h-4"/>, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Berth Dwell Time", val: "38.4 hrs", icon: <Anchor className="w-4 h-4"/>, color: "text-green-600", bg: "bg-green-50" },
          { label: "Cargo Delivery SLA", val: "99.1%", icon: <Activity className="w-4 h-4"/>, color: "text-green-600", bg: "bg-green-50" },
          { label: "Avg Port Turnaround", val: "1.8 days", icon: <Clock className="w-4 h-4"/>, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Charter Efficiency", val: "92.4%", icon: <Activity className="w-4 h-4"/>, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Demurrage Reduction", val: "-22%", icon: <TrendingUp className="w-4 h-4"/>, color: "text-green-600", bg: "bg-green-50" },
        ].map((kpi, i) => (
          <motion.div key={i} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-tight">{kpi.label}</div>
              <div className={`p-1.5 rounded-lg ${kpi.bg} ${kpi.color}`}>{kpi.icon}</div>
            </div>
            <div className="text-2xl font-black text-gray-900 leading-none mb-1">{kpi.val}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
         <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">East Coast Port Performance</h2>
            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="py-2 px-3 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Port</th>
                        <th className="py-2 px-3 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Turnaround</th>
                        <th className="py-2 px-3 text-[9px] font-bold text-gray-500 uppercase tracking-widest">On-Time %</th>
                        <th className="py-2 px-3 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Congestion</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                     <tr>
                        <td className="py-3 px-3 text-xs font-bold text-gray-900">Paradip</td>
                        <td className="py-3 px-3 text-xs font-mono font-bold text-gray-900">1.9d</td>
                        <td className="py-3 px-3 text-xs font-mono font-bold text-gray-900">92%</td>
                        <td className="py-3 px-3"><span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">MODERATE</span></td>
                     </tr>
                     <tr>
                        <td className="py-3 px-3 text-xs font-bold text-gray-900">Visakhapatnam</td>
                        <td className="py-3 px-3 text-xs font-mono font-bold text-gray-900">1.6d</td>
                        <td className="py-3 px-3 text-xs font-mono font-bold text-gray-900">98%</td>
                        <td className="py-3 px-3"><span className="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">LOW</span></td>
                     </tr>
                     <tr>
                        <td className="py-3 px-3 text-xs font-bold text-gray-900">Haldia</td>
                        <td className="py-3 px-3 text-xs font-mono font-bold text-gray-900">2.4d</td>
                        <td className="py-3 px-3 text-xs font-mono font-bold text-gray-900">86%</td>
                        <td className="py-3 px-3"><span className="bg-red-50 text-red-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">HIGH</span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>

         <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">Performance Trend</h2>
            <div className="space-y-4">
               <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="text-xs font-bold text-gray-900">Cost Efficiency</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-green-600 flex items-center gap-1">↑ Improved (Demo)</span>
               </div>
               <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="text-xs font-bold text-gray-900">Vessel Utilization</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-green-600 flex items-center gap-1">↑ Improved (Demo)</span>
               </div>
               <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="text-xs font-bold text-gray-900">Delivery SLA</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center gap-1">→ Stable (Demo)</span>
               </div>
               <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="text-xs font-bold text-gray-900">Port Turnaround</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 flex items-center gap-1">↓ Declined (Demo)</span>
               </div>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
