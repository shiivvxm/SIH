import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContractStrategies() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div>
        <div className="flex items-center gap-2 mb-2">
           <span className="text-[10px] font-bold tracking-widest uppercase bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">Procurement Strategy Optimizer</span>
        </div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Contract Strategy Comparison</h1>
        <p className="text-xs text-gray-500 font-medium">Compare procurement instruments based on expected cost, risk, flexibility and market outlook.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Spot */}
         <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">OPTION 1</div>
            <h2 className="text-xl font-black text-gray-900 mb-2">SPOT MARKET</h2>
            <div className="text-xs text-gray-500 font-medium mb-6">Duration: 0–15 Days</div>
            
            <div className="space-y-3 text-sm flex-1 mb-6">
               <div className="flex justify-between"><span className="text-gray-600 font-medium">Expected Cost</span><strong className="font-mono text-gray-900">$2.82M</strong></div>
               <div className="flex justify-between"><span className="text-gray-600 font-medium">Risk Level</span><strong className="text-red-600">High</strong></div>
               <div className="flex justify-between"><span className="text-gray-600 font-medium">Flexibility</span><strong className="text-green-600">Maximum</strong></div>
            </div>
            <button className="w-full bg-white text-gray-900 border border-gray-200 py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors">Select Spot</button>
         </div>

         {/* Short-Term (Recommended) */}
         <div className="bg-blue-50 rounded-xl border-2 border-blue-500 p-6 shadow-sm flex flex-col relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest flex items-center gap-1"><Zap className="w-3 h-3"/> AI RECOMMENDED</div>
            <div className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-1">OPTION 2</div>
            <h2 className="text-xl font-black text-blue-900 mb-2">SHORT-TERM</h2>
            <div className="text-xs text-blue-700 font-medium mb-6">Duration: 1–3 Months</div>
            
            <div className="space-y-3 text-sm flex-1 mb-6">
               <div className="flex justify-between"><span className="text-blue-800 font-medium">Expected Cost</span><strong className="font-mono text-blue-900">$2.26M</strong></div>
               <div className="flex justify-between"><span className="text-blue-800 font-medium">Risk Level</span><strong className="text-amber-600">Medium</strong></div>
               <div className="flex justify-between"><span className="text-blue-800 font-medium">Flexibility</span><strong className="text-amber-600">Moderate</strong></div>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4"/> Select Short-Term</button>
         </div>

         {/* Medium-Term */}
         <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">OPTION 3</div>
            <h2 className="text-xl font-black text-gray-900 mb-2">MEDIUM-TERM</h2>
            <div className="text-xs text-gray-500 font-medium mb-6">Duration: 3–6 Months</div>
            
            <div className="space-y-3 text-sm flex-1 mb-6">
               <div className="flex justify-between"><span className="text-gray-600 font-medium">Expected Cost</span><strong className="font-mono text-gray-900">$2.40M</strong></div>
               <div className="flex justify-between"><span className="text-gray-600 font-medium">Risk Level</span><strong className="text-green-600">Low</strong></div>
               <div className="flex justify-between"><span className="text-gray-600 font-medium">Flexibility</span><strong className="text-red-600">Low</strong></div>
            </div>
            <button className="w-full bg-white text-gray-900 border border-gray-200 py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors">Select Medium-Term</button>
         </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
         <div className="xl:col-span-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-sm font-black text-gray-900 mb-6 uppercase tracking-widest">Why Short-Term?</h2>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
               <p className="text-xs font-medium text-gray-700 leading-relaxed">"Current freight forecasts indicate upward market pressure. A short-term commitment provides a balance between price protection and contractual flexibility."</p>
            </div>
            <div className="flex justify-end">
               <Link to="/decision-maker/approvals" className="bg-gray-900 text-white px-5 py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-gray-800 transition-colors">
                  Continue to Approval <ArrowRight className="w-3 h-3"/>
               </Link>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
