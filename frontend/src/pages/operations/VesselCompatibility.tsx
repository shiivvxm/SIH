import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Ship, ShieldAlert, ArrowRight } from 'lucide-react';

export default function VesselCompatibility() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Vessel-Port Compatibility</h1>
        <p className="text-xs text-gray-500 font-medium">Verify whether a vessel can safely and efficiently operate at the selected port.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Vessel Selection</div>
            <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-bold text-gray-900 outline-none focus:border-blue-500 mb-6">
               <option>MV Ocean Star (Panamax)</option>
               <option>MV Horizon (Capesize)</option>
            </select>
            
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Port Selection</div>
            <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-bold text-gray-900 outline-none focus:border-blue-500 mb-6">
               <option>Paradip (Berth 2)</option>
               <option>Visakhapatnam (Outer)</option>
            </select>

            <button className="w-full bg-gray-900 text-white rounded-lg px-4 py-3 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
               Calculate Compatibility <ArrowRight className="w-4 h-4"/>
            </button>
         </div>

         <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-6">
               <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Compatibility Score</div>
                  <h2 className="text-3xl font-black text-gray-900">94%</h2>
               </div>
               <div className="bg-green-50 border border-green-200 text-green-700 px-3 py-1.5 rounded-lg flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4"/> COMPATIBLE
               </div>
            </div>

            <div className="space-y-4 flex-1">
               <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-3">
                  <span className="font-bold text-gray-900">Draft (12.4m / 13.0m max)</span>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/> Within Limit</span>
               </div>
               <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-3">
                  <span className="font-bold text-gray-900">LOA (225m / 230m max)</span>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/> Within Limit</span>
               </div>
               <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-3">
                  <span className="font-bold text-gray-900">Beam (32m / 35m max)</span>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/> Within Limit</span>
               </div>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
