import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Zap, TrendingUp, AlertTriangle, ShieldAlert, Activity } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.05 } } };

export default function AnalystOverview() {
  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <motion.div variants={fadeUp} className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-2">
             <span className="text-[10px] font-bold tracking-widest uppercase bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">Econometric Forecasting & Multi-Variate Simulation</span>
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Freight Market Analytics & Forecasting</h1>
          <p className="text-xs text-gray-500 font-medium">Machine-learned freight projections, cargo demand signals, port congestion outlook and market intelligence.</p>
        </div>
        <div className="flex flex-col items-end gap-2 text-[10px] font-bold uppercase tracking-widest">
          <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg shadow-sm">Analyst Workspace</div>
          <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-lg border border-green-200">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> SYSTEMS OPERATIONAL
          </div>
          <div className="text-gray-400">Last updated: <span className="text-gray-900">SIMULATED DATA</span></div>
        </div>
      </motion.div>

      {/* KPI Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {[
          { label: "30-Day Freight Forecast", val: "$37.80/MT", sub: "+14.2% Trend", icon: <TrendingUp className="w-4 h-4"/>, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Cargo Demand Index", val: "128.4", sub: "+4.8% Trend", icon: <BarChart2 className="w-4 h-4"/>, color: "text-green-600", bg: "bg-green-50" },
          { label: "Port Congestion Outlook", val: "HIGH", sub: "+2.4 days waiting", icon: <AlertTriangle className="w-4 h-4"/>, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Market Volatility", val: "HIGH", sub: "+12.6% Trend", icon: <Activity className="w-4 h-4"/>, color: "text-red-600", bg: "bg-red-50" },
          { label: "Forecast Confidence", val: "89.4%", sub: "AI Estimate", icon: <Zap className="w-4 h-4"/>, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Early Warnings", val: "4 Active", sub: "Require Action", icon: <ShieldAlert className="w-4 h-4"/>, color: "text-red-600", bg: "bg-red-50" },
        ].map((kpi, i) => (
          <motion.div key={i} variants={fadeUp} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between" title="Demo / Simulated KPI Metric">
            <div className="flex justify-between items-start mb-3">
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest w-24 leading-tight">{kpi.label}</div>
              <div className={`p-1.5 rounded-lg ${kpi.bg} ${kpi.color}`}>{kpi.icon}</div>
            </div>
            <div>
              <div className="text-2xl font-black text-gray-900 leading-none mb-1">{kpi.val}</div>
              <div className="text-[10px] font-semibold text-gray-500 truncate">{kpi.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
         {/* Main Forecast Chart */}
         <motion.div variants={fadeUp} className="xl:col-span-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-6">
               <div>
                  <h2 className="text-xl font-black text-gray-900 tracking-tight mb-1">Historical Spot vs AI Projected Outlook</h2>
                  <p className="text-[11px] font-medium text-gray-500">Past 90 Days + Next 30 Days Forecasting Horizon</p>
               </div>
               <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-gray-500">
                  <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-gray-900"></div> Historical Spot</div>
                  <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-blue-500 border border-dashed border-blue-500"></div> AI Projected</div>
               </div>
            </div>
            
            <div className="flex-1 min-h-[300px] relative">
               {/* Y Axis */}
               <div className="absolute left-0 top-0 bottom-6 w-10 flex flex-col justify-between text-[9px] font-mono text-gray-400 font-bold">
                 <span>$45.00</span>
                 <span>$35.00</span>
                 <span>$25.00</span>
               </div>

               {/* SVG Graph Placeholder */}
               <div className="absolute left-10 right-0 top-0 bottom-6 border-b border-l border-gray-200">
                 {/* Today Line */}
                 <div className="absolute left-[75%] top-0 bottom-0 border-l border-dashed border-gray-300">
                    <div className="absolute -top-3 -left-6 text-[9px] font-bold bg-gray-100 text-gray-500 px-1 py-0.5 rounded">TODAY</div>
                 </div>
                 <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M 0,70 L 25,75 L 50,60 L 75,55" fill="none" stroke="#111827" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M 75,55 Q 87,40 100,20" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="4,4" strokeLinejoin="round" />
                    {/* Confidence band */}
                    <path d="M 75,55 Q 87,30 100,10 L 100,30 Q 87,50 75,55 Z" fill="#3B82F6" stroke="none" opacity="0.1" />
                    <circle cx="75" cy="55" r="3" fill="#111827" />
                 </svg>
                 <div className="absolute right-0 top-[20%] transform translate-x-2">
                   <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-1 border border-blue-200 rounded">$37.80</span>
                 </div>
               </div>
            </div>
            <p className="text-[10px] text-gray-500 font-medium mt-6 text-center">
               "Freight rates have increased over the historical period and are projected to continue increasing over the next 30 days with an 89% model confidence."
               <br/><span className="font-bold text-gray-400">AI Forecast — Not a guaranteed future price.</span>
            </p>
         </motion.div>

         <motion.div variants={fadeUp} className="xl:col-span-4 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-sm font-black text-gray-900 flex items-center gap-2 mb-4"><Zap className="w-4 h-4 text-blue-600"/> AI Market Insights</h2>
            <div className="space-y-4">
               <div className="flex gap-2 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                  <p className="text-[11px] text-gray-600 font-medium leading-relaxed"><span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest block mb-0.5">AI-Assisted Insight</span> Freight rates on the Australia → East Coast India corridor show an upward 30-day trajectory.</p>
               </div>
               <div className="flex gap-2 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                  <p className="text-[11px] text-gray-600 font-medium leading-relaxed"><span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest block mb-0.5">AI-Assisted Insight</span> Port congestion is expected to increase waiting time at selected East Coast terminals.</p>
               </div>
               <div className="flex gap-2 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                  <p className="text-[11px] text-gray-600 font-medium leading-relaxed"><span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest block mb-0.5">AI-Assisted Insight</span> Limited vessel availability may increase short-term chartering pressure.</p>
               </div>
            </div>
         </motion.div>
      </div>
    </motion.div>
  );
}
