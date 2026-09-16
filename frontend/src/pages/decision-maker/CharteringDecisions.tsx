import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Ship, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CharteringDecisions() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div>
        <div className="flex items-center gap-2 mb-2">
           <span className="text-[10px] font-bold tracking-widest uppercase bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">Chartering Decision Engine</span>
        </div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Chartering Decision Center</h1>
        <p className="text-xs text-gray-500 font-medium">Evaluate vessel, route, freight and market conditions before committing charter capacity.</p>
      </div>

      {/* Requisition Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-wrap items-center justify-between gap-4">
         <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Requisition</div>
            <div className="text-sm font-mono font-bold text-gray-900">REQ-MO-2026-88</div>
         </div>
         <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Cargo</div>
            <div className="text-xs font-bold text-gray-900">70,000 MT Coking Coal</div>
         </div>
         <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Route</div>
            <div className="text-xs font-bold text-gray-900">Newcastle → Paradip</div>
         </div>
         <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Discharge Window</div>
            <div className="text-xs font-mono font-bold text-gray-900">Nov 10–15, 2026</div>
         </div>
         <div className="text-right">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Decision Horizon</div>
            <div className="text-xs font-mono font-black text-red-600">48h 12m Remaining</div>
         </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
         {/* Book vs Wait */}
         <div className="xl:col-span-8 space-y-6">
            <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Decision Analysis</h2>
            
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest">AI Preferred Option</div>
                  <h3 className="text-2xl font-black text-green-900 mb-4 text-center">BOOK NOW</h3>
                  <div className="space-y-3 text-sm">
                     <div className="flex justify-between"><span className="text-green-800 font-medium">Expected Cost</span><strong className="font-mono">$2.26M</strong></div>
                     <div className="flex justify-between"><span className="text-green-800 font-medium">Risk</span><strong className="bg-green-200 text-green-900 px-1.5 py-0.5 rounded text-xs">Medium-Low</strong></div>
                     <div className="flex justify-between"><span className="text-green-800 font-medium">Confidence</span><strong>89%</strong></div>
                  </div>
               </div>
               
               <div className="bg-white border border-gray-200 rounded-xl p-6 opacity-75 hover:opacity-100 transition-opacity">
                  <h3 className="text-2xl font-black text-gray-400 mb-4 text-center">WAIT</h3>
                  <div className="space-y-3 text-sm">
                     <div className="flex justify-between"><span className="text-gray-500 font-medium">Expected Cost</span><strong className="font-mono text-gray-900">$2.82M</strong></div>
                     <div className="flex justify-between"><span className="text-gray-500 font-medium">Risk</span><strong className="bg-red-50 border border-red-200 text-red-700 px-1.5 py-0.5 rounded text-xs">High</strong></div>
                     <div className="flex justify-between"><span className="text-gray-500 font-medium">Confidence</span><strong className="text-gray-900">74%</strong></div>
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 flex justify-between items-center shadow-sm">
               <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Recommended Action</div>
                  <div className="text-xs font-bold text-gray-900">Execute Short-Term Contract (3-Voyage Commitment)</div>
               </div>
               <div className="flex gap-3">
                  <button className="bg-white text-gray-900 border border-gray-200 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors">Compare Vessels</button>
                  <Link to="/decision-maker/contracts" className="bg-gray-900 text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-gray-800 transition-colors">
                     Proceed to Contract Strategy <ArrowRight className="w-3 h-3"/>
                  </Link>
               </div>
            </div>
         </div>

         {/* Vessel Match */}
         <div className="xl:col-span-4 space-y-6">
            <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Recommended Vessel</h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
               <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Ship className="w-5 h-5"/></div>
                  <div>
                     <div className="text-sm font-black text-gray-900">Panamax Class</div>
                     <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">75,000 DWT</div>
                  </div>
                  <div className="ml-auto text-center">
                     <div className="text-xl font-black text-green-600">94%</div>
                     <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Match</div>
                  </div>
               </div>
               
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs border-b border-gray-50 pb-2">
                     <span className="font-bold text-gray-900">Draft (13.8m / 15.0m)</span>
                     <span className="text-[9px] font-bold text-green-600 uppercase tracking-widest flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Compliant</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-gray-50 pb-2">
                     <span className="font-bold text-gray-900">LOA (225m)</span>
                     <span className="text-[9px] font-bold text-green-600 uppercase tracking-widest flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Compliant</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-gray-50 pb-2">
                     <span className="font-bold text-gray-900">Cargo (75k DWT)</span>
                     <span className="text-[9px] font-bold text-green-600 uppercase tracking-widest flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Compliant</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
