import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function AuditLogs() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-2">
             <span className="text-[10px] font-bold tracking-widest uppercase bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">Decision Traceability & Audit</span>
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Audit Logs</h1>
          <p className="text-xs text-gray-500 font-medium">Traceable record of decisions, approvals, system actions and governance events.</p>
        </div>
        <button className="bg-gray-900 text-white px-4 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-gray-800 transition-colors">
          <Download className="w-4 h-4"/> Export Audit Logs
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Total Events (30d)</div>
            <div className="text-3xl font-black text-gray-900">328</div>
         </div>
         <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Today</div>
            <div className="text-3xl font-black text-gray-900">18</div>
         </div>
         <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Policy Checks Passed</div>
            <div className="text-3xl font-black text-green-600 flex items-center gap-2">97.8% <CheckCircle2 className="w-5 h-5"/></div>
         </div>
         <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between border-l-4 border-l-amber-500">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Events Requiring Review</div>
            <div className="text-3xl font-black text-amber-600 flex items-center gap-2">04 <ShieldAlert className="w-5 h-5"/></div>
         </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
         <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-wrap gap-3 items-center">
            <input type="text" placeholder="Search Request ID, Actor..." className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-blue-500"/>
            <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs outline-none text-gray-600 font-bold uppercase tracking-widest">
               <option>All Modules</option>
               <option>Decision Maker</option>
               <option>Operations</option>
               <option>Analyst</option>
            </select>
            <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs outline-none text-gray-600 font-bold uppercase tracking-widest">
               <option>All Status</option>
               <option>Passed</option>
               <option>Review</option>
            </select>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
               <thead>
                  <tr className="bg-white border-b border-gray-100">
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Timestamp</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Actor</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Role</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Action</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Module</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Req ID</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest text-right">Status</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-50">
                  <tr className="hover:bg-gray-50 cursor-pointer">
                     <td className="py-4 px-4 text-[10px] font-mono text-gray-500">12 Oct 2026 14:22</td>
                     <td className="py-4 px-4 text-xs font-bold text-gray-900">D. Chen</td>
                     <td className="py-4 px-4 text-[10px] font-medium text-gray-600">Chartering Manager</td>
                     <td className="py-4 px-4 text-xs font-bold text-gray-900">Contract Approved</td>
                     <td className="py-4 px-4 text-[10px] font-medium text-gray-600">Decision Maker</td>
                     <td className="py-4 px-4 text-xs font-mono font-bold text-gray-900">REQ-MO-2026-88</td>
                     <td className="py-4 px-4 text-right"><span className="bg-green-50 border border-green-200 text-green-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">✓ PASSED</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50 cursor-pointer">
                     <td className="py-4 px-4 text-[10px] font-mono text-gray-500">11 Oct 2026 09:00</td>
                     <td className="py-4 px-4 text-xs font-bold text-gray-900">System</td>
                     <td className="py-4 px-4 text-[10px] font-medium text-gray-600">AI Model</td>
                     <td className="py-4 px-4 text-xs font-bold text-gray-900">Model Recalibration</td>
                     <td className="py-4 px-4 text-[10px] font-medium text-gray-600">Analyst</td>
                     <td className="py-4 px-4 text-xs font-mono font-bold text-gray-900">MODEL-v4.2</td>
                     <td className="py-4 px-4 text-right"><span className="bg-blue-50 border border-blue-200 text-blue-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">VERIFIED</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50 cursor-pointer">
                     <td className="py-4 px-4 text-[10px] font-mono text-gray-500">10 Oct 2026 18:45</td>
                     <td className="py-4 px-4 text-xs font-bold text-gray-900">A. Sharma</td>
                     <td className="py-4 px-4 text-[10px] font-medium text-gray-600">Operations Lead</td>
                     <td className="py-4 px-4 text-xs font-bold text-gray-900">Spot Override</td>
                     <td className="py-4 px-4 text-[10px] font-medium text-gray-600">Operations</td>
                     <td className="py-4 px-4 text-xs font-mono font-bold text-gray-900">REQ-MO-2026-82</td>
                     <td className="py-4 px-4 text-right"><span className="bg-amber-50 border border-amber-200 text-amber-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">⚠ REVIEW</span></td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
    </motion.div>
  );
}
