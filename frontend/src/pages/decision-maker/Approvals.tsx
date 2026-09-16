import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, CheckCircle2, XCircle } from 'lucide-react';

export default function Approvals() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div>
        <div className="flex items-center gap-2 mb-2">
           <span className="text-[10px] font-bold tracking-widest uppercase bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">Decision Authorization & Control</span>
        </div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Approval Center</h1>
        <p className="text-xs text-gray-500 font-medium">Review, authorize and track chartering and procurement decisions.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Pending Approvals</div>
            <div className="text-3xl font-black text-amber-600">04</div>
         </div>
         <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Approved</div>
            <div className="text-3xl font-black text-green-600">18</div>
         </div>
         <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Rejected</div>
            <div className="text-3xl font-black text-red-600">02</div>
         </div>
         <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Expiring Decisions</div>
            <div className="text-3xl font-black text-gray-900">03</div>
         </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
         <div className="p-4 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Pending Approvals</h2>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
               <thead>
                  <tr className="bg-white border-b border-gray-100">
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Request ID</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Route / Cargo</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Strategy</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Est. Value</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Status</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-50">
                  <tr className="hover:bg-gray-50">
                     <td className="py-4 px-4 text-xs font-mono font-bold text-gray-900">REQ-MO-2026-88</td>
                     <td className="py-4 px-4 text-xs font-bold text-gray-900">Newcastle → Paradip<br/><span className="text-[10px] text-gray-500 font-medium">70k MT Coking Coal</span></td>
                     <td className="py-4 px-4 text-xs font-bold text-gray-900">Short-Term</td>
                     <td className="py-4 px-4 text-xs font-mono font-bold text-gray-900">$2.26M</td>
                     <td className="py-4 px-4"><span className="bg-amber-50 border border-amber-200 text-amber-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">⚠ PENDING</span></td>
                     <td className="py-4 px-4 text-right flex gap-2 justify-end">
                        <button className="bg-white text-gray-900 border border-gray-200 px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors">Review</button>
                        <button className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest hover:bg-green-700 transition-colors flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Approve</button>
                        <button className="bg-white text-red-600 border border-red-200 px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest hover:bg-red-50 transition-colors"><XCircle className="w-3 h-3"/></button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
         <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Decision History & Audit Trail</h2>
         <div className="space-y-4">
            <div className="flex gap-4 items-start border-l-2 border-gray-200 pl-4 py-1">
               <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest w-24 shrink-0 mt-1">Oct 12, 10:15</div>
               <div>
                  <div className="text-xs font-bold text-gray-900 flex items-center gap-2"><span className="bg-green-50 text-green-700 px-1.5 py-0.5 rounded border border-green-200 text-[9px] uppercase tracking-widest">✓ APPROVED</span> REQ-MO-2026-87</div>
                  <div className="text-[10px] text-gray-500 mt-1">Decision Maker authorized Spot Contract execution. Designed with DPDP privacy principles.</div>
               </div>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
