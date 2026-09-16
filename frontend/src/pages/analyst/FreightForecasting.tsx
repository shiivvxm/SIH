import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart2 } from 'lucide-react';

export default function FreightForecasting() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Freight Forecasting</h1>
        <p className="text-xs text-gray-500 font-medium">Predict future freight rates across major bulk cargo routes to India's East Coast.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
         <div className="xl:col-span-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
               <select className="bg-gray-50 border border-gray-200 text-xs font-bold text-gray-900 px-3 py-2 rounded-lg outline-none">
                  <option>Australia → Paradip</option>
                  <option>Australia → Visakhapatnam</option>
                  <option>USA → Paradip</option>
               </select>
               <select className="bg-gray-50 border border-gray-200 text-xs font-bold text-gray-900 px-3 py-2 rounded-lg outline-none">
                  <option>30 Days Horizon</option>
                  <option>15 Days Horizon</option>
                  <option>7 Days Horizon</option>
               </select>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
               <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Current Spot</div>
                  <div className="text-2xl font-black text-gray-900">$32.40 / MT</div>
               </div>
               <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-100/50">
                  <div className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-1">30-Day Forecast</div>
                  <div className="text-2xl font-black text-gray-900">$37.80 / MT</div>
                  <div className="text-[10px] font-bold text-red-600 flex items-center gap-1 mt-1"><TrendingUp className="w-3 h-3"/> +16.6% Expected Change</div>
               </div>
               <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Forecast Range</div>
                  <div className="text-lg font-black text-gray-900">$35.20 – $40.10</div>
                  <div className="text-[10px] font-bold text-gray-500 mt-1">Confidence: 89%</div>
               </div>
            </div>

            <div className="h-[250px] bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs font-bold uppercase tracking-widest">
               [ Interactive Chart Container (Simulated) ]
            </div>
         </div>

         <div className="xl:col-span-4 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
               <h2 className="text-sm font-black text-gray-900 flex items-center gap-2 mb-4"><BarChart2 className="w-4 h-4"/> Cargo Demand Outlook</h2>
               <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                     <span className="text-xs font-bold text-gray-900">Coking Coal</span>
                     <div className="text-right">
                        <div className="text-[11px] font-mono font-bold text-gray-900">Idx: 128</div>
                        <div className="text-[9px] font-bold text-green-600 uppercase tracking-widest">+8.4% Forecast</div>
                     </div>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                     <span className="text-xs font-bold text-gray-900">Iron Ore</span>
                     <div className="text-right">
                        <div className="text-[11px] font-mono font-bold text-gray-900">Idx: 110</div>
                        <div className="text-[9px] font-bold text-green-600 uppercase tracking-widest">+4.2% Forecast</div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
               <h2 className="text-sm font-black text-gray-900 flex items-center gap-2 mb-4">Port Congestion Outlook</h2>
               <div className="space-y-4">
                  <div className="bg-amber-50 border border-amber-100 rounded-lg p-3">
                     <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-gray-900">Paradip</span>
                        <span className="text-[9px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">HIGH (30-Day Outlook)</span>
                     </div>
                     <div className="text-[10px] font-medium text-amber-700">Expected Waiting: <strong className="font-mono text-amber-800">+2.4 days</strong></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
