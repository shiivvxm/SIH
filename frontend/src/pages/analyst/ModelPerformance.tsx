import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Activity } from 'lucide-react';

export default function ModelPerformance() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Model Performance</h1>
        <p className="text-xs text-gray-500 font-medium">Monitor forecasting accuracy, confidence and model health.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Forecast Accuracy</div>
            <div className="text-2xl font-black text-gray-900">91.4%</div>
         </div>
         <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">MAE</div>
            <div className="text-2xl font-black text-gray-900">$1.24 <span className="text-xs font-normal text-gray-500">/ MT</span></div>
         </div>
         <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">MAPE</div>
            <div className="text-2xl font-black text-gray-900">5.8%</div>
         </div>
         <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Model Version</div>
            <div className="text-lg font-black text-gray-900 mt-2">v4.2 (Transformer)</div>
         </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
         <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-black text-gray-900 flex items-center gap-2"><Activity className="w-4 h-4 text-gray-500"/> Model Health</h2>
            <span className="bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> OPERATIONAL</span>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
               <span className="font-semibold text-gray-600">Data Freshness</span>
               <span className="font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Healthy</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
               <span className="font-semibold text-gray-600">Prediction Stability</span>
               <span className="font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Stable</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
               <span className="font-semibold text-gray-600">Drift Detection</span>
               <span className="font-bold text-amber-600 flex items-center gap-1">⚠ Monitoring</span>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
