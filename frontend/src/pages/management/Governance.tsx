import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Download, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function Governance() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-2">
             <span className="text-[10px] font-bold tracking-widest uppercase bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">Governance, Privacy & Policy</span>
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Governance & Compliance</h1>
          <p className="text-xs text-gray-500 font-medium">Monitor privacy, security, accessibility, policy adherence and responsible use of FreightIQ.</p>
        </div>
        <button className="bg-gray-900 text-white px-4 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-gray-800 transition-colors">
          <Download className="w-4 h-4"/> Download Governance Report
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Policy Adherence</div>
            <div className="text-2xl font-black text-gray-900">98.4%</div>
         </div>
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Privacy Controls</div>
            <div className="text-sm font-black text-green-600 mt-2 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> OPERATIONAL</div>
         </div>
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Audit Coverage</div>
            <div className="text-2xl font-black text-gray-900">100%</div>
         </div>
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-amber-500">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Open Reviews</div>
            <div className="text-2xl font-black text-amber-600">03</div>
         </div>
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Accessibility Status</div>
            <div className="text-sm font-black text-blue-600 mt-2">WCAG 2.1 AA</div>
         </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
         {/* DPDP Privacy Center */}
         <div className="xl:col-span-8 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
               <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">DPDP Privacy Controls</h2>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                     <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Data Minimization</div>
                     <div className="text-[11px] font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Active</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                     <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Purpose Limitation</div>
                     <div className="text-[11px] font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Active</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                     <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Consent Mgmt</div>
                     <div className="text-[11px] font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Operational</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                     <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Data Retention</div>
                     <div className="text-[11px] font-bold text-blue-600 flex items-center gap-1"><ShieldAlert className="w-3 h-3"/> Monitored</div>
                  </div>
               </div>
               <div className="grid grid-cols-4 gap-4 border-t border-gray-50 pt-4">
                  <div>
                     <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Access Requests</span>
                     <span className="text-xs font-bold text-gray-900">02 Pending</span>
                  </div>
                  <div>
                     <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Correction</span>
                     <span className="text-xs font-bold text-gray-900">01 Pending</span>
                  </div>
                  <div>
                     <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Erasure</span>
                     <span className="text-xs font-bold text-gray-900">01 Pending</span>
                  </div>
                  <div>
                     <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Grievances</span>
                     <span className="text-xs font-bold text-gray-400">00 Open</span>
                  </div>
               </div>
               <div className="mt-4 pt-4 border-t border-gray-50 text-right">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">Designed with DPDP privacy principles.</span>
               </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
               <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">Role-Based Access Control</h2>
               <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex justify-between items-center">
                     <div>
                        <div className="text-xs font-bold text-gray-900 mb-1">Operations</div>
                        <div className="text-[10px] font-medium text-gray-500">Access: Operational</div>
                     </div>
                     <div className="text-right">
                        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Approval Authority</div>
                        <div className="text-[11px] font-bold text-gray-900">None</div>
                     </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex justify-between items-center">
                     <div>
                        <div className="text-xs font-bold text-gray-900 mb-1">Analyst</div>
                        <div className="text-[10px] font-medium text-gray-500">Access: Forecasting & Simulation</div>
                     </div>
                     <div className="text-right">
                        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Approval Authority</div>
                        <div className="text-[11px] font-bold text-gray-900">None</div>
                     </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex justify-between items-center border-l-4 border-l-blue-500">
                     <div>
                        <div className="text-xs font-bold text-gray-900 mb-1">Decision Maker</div>
                        <div className="text-[10px] font-medium text-gray-500">Access: Chartering & Approval</div>
                     </div>
                     <div className="text-right">
                        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Approval Authority</div>
                        <div className="text-[11px] font-bold text-blue-700">Contract Execution</div>
                     </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex justify-between items-center border-l-4 border-l-gray-900">
                     <div>
                        <div className="text-xs font-bold text-gray-900 mb-1">Management</div>
                        <div className="text-[10px] font-medium text-gray-500">Access: Executive & Governance</div>
                     </div>
                     <div className="text-right">
                        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Approval Authority</div>
                        <div className="text-[11px] font-bold text-gray-900">Policy & Audit</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Sidebar Policies */}
         <div className="xl:col-span-4 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
               <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">GIGW 3.0 / Accessibility</h2>
               <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                     <span className="font-semibold text-gray-700">WCAG 2.1 AA</span>
                     <span className="font-bold text-blue-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Targeted</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                     <span className="font-semibold text-gray-700">Keyboard Navigation</span>
                     <span className="font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Active</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                     <span className="font-semibold text-gray-700">Screen Reader Support</span>
                     <span className="font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Active</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                     <span className="font-semibold text-gray-700">Color Contrast</span>
                     <span className="font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Verified</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                     <span className="font-semibold text-gray-700">Text Alternatives</span>
                     <span className="font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Active</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                     <span className="font-semibold text-gray-700">Accessible Charts</span>
                     <span className="font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="font-semibold text-gray-700">Reduced Motion</span>
                     <span className="font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Supported</span>
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
               <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">Security & Data Governance</h2>
               <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                     <span className="font-semibold text-gray-700">Authentication</span>
                     <span className="font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Operational</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                     <span className="font-semibold text-gray-700">Audit Trail</span>
                     <span className="font-bold text-blue-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Immutable</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                     <span className="font-semibold text-gray-700">Data Encryption</span>
                     <span className="font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Protected</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                     <span className="font-semibold text-gray-700">Export Controls</span>
                     <span className="font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Enabled</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="font-semibold text-gray-700">Session Security</span>
                     <span className="font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Active</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
