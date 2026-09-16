import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, ArrowRight, Activity, TrendingUp, Anchor, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };

export default function AIRecommendations() {
  return (
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.05 } } }} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <motion.div variants={fadeUp} className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-2">
             <span className="text-[10px] font-bold tracking-widest uppercase bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">AI Chartering & Strategic Procurement Advisory</span>
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">AI Recommendations</h1>
          <p className="text-xs text-gray-500 font-medium">AI-assisted chartering and procurement recommendations based on freight forecasts, vessel availability, port conditions and expected total cost.</p>
        </div>
      </motion.div>

      {/* KPI Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Active Recommendations", val: "06", icon: <Target className="w-4 h-4"/>, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "High Confidence", val: "89.4%", icon: <Zap className="w-4 h-4"/>, color: "text-green-600", bg: "bg-green-50" },
          { label: "Potential Cost Avoidance", val: "$560K", sub: "Demo Data", icon: <TrendingUp className="w-4 h-4"/>, color: "text-green-600", bg: "bg-green-50" },
          { label: "Decisions Due", val: "03", icon: <Activity className="w-4 h-4"/>, color: "text-amber-600", bg: "bg-amber-50" },
        ].map((kpi, i) => (
          <motion.div key={i} variants={fadeUp} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-tight">{kpi.label}</div>
              <div className={`p-1.5 rounded-lg ${kpi.bg} ${kpi.color}`}>{kpi.icon}</div>
            </div>
            <div className="text-2xl font-black text-gray-900 leading-none mb-1">{kpi.val}</div>
            {kpi.sub && <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{kpi.sub}</div>}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
         {/* Main Recommendation */}
         <motion.div variants={fadeUp} className="xl:col-span-8 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-100 flex-1">
               <div className="flex justify-between items-start mb-6">
                  <div>
                     <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">AI Recommendation</div>
                     <h2 className="text-4xl font-black text-gray-900">BOOK NOW</h2>
                  </div>
                  <div className="bg-green-50 text-green-700 px-3 py-1.5 rounded-lg border border-green-200 text-xs font-bold uppercase tracking-widest">
                     Execute Short-Term Contract
                  </div>
               </div>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                     <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Route</div>
                     <div className="text-xs font-bold text-gray-900">Newcastle → Paradip</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                     <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Cargo</div>
                     <div className="text-xs font-bold text-gray-900">70k MT Coking Coal</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                     <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Vessel</div>
                     <div className="text-xs font-bold text-gray-900">Panamax</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                     <div className="text-[9px] font-bold text-blue-700 uppercase tracking-widest mb-1">Confidence</div>
                     <div className="text-xs font-black text-blue-900">89.4%</div>
                  </div>
               </div>

               <div className="grid grid-cols-3 gap-4 p-4 border border-gray-100 rounded-lg">
                  <div>
                     <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Current Spot</div>
                     <div className="text-lg font-mono font-black text-gray-900">$32.40 / MT</div>
                  </div>
                  <div>
                     <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Projected 30-Day</div>
                     <div className="text-lg font-mono font-black text-red-600">$37.80 / MT</div>
                  </div>
                  <div>
                     <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Cost Avoidance</div>
                     <div className="text-lg font-mono font-black text-green-600">$560,000</div>
                  </div>
               </div>
            </div>
            <div className="bg-gray-50 p-4 border-t border-gray-100 flex gap-3">
               <Link to="/decision-maker/chartering" className="flex-1 bg-gray-900 text-white py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                  Send to Chartering <ArrowRight className="w-3 h-3"/>
               </Link>
               <button className="flex-1 bg-white text-gray-900 border border-gray-200 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors">
                  Compare Alternatives
               </button>
            </div>
         </motion.div>

         {/* Why This Recommendation */}
         <motion.div variants={fadeUp} className="xl:col-span-4 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2"><Zap className="w-4 h-4 text-amber-500"/> Why This Recommendation?</h2>
            <div className="space-y-4">
               <div className="flex gap-3 items-start border-b border-gray-50 pb-3">
                  <div className="bg-red-50 p-1.5 rounded text-red-600 mt-0.5"><TrendingUp className="w-3.5 h-3.5"/></div>
                  <div>
                     <div className="text-xs font-bold text-gray-900">Upward Freight Momentum</div>
                     <div className="text-[10px] font-medium text-gray-500 mt-0.5">Rates projected to rise 16% in 30 days.</div>
                  </div>
               </div>
               <div className="flex gap-3 items-start border-b border-gray-50 pb-3">
                  <div className="bg-amber-50 p-1.5 rounded text-amber-600 mt-0.5"><Anchor className="w-3.5 h-3.5"/></div>
                  <div>
                     <div className="text-xs font-bold text-gray-900">Vessel Availability</div>
                     <div className="text-[10px] font-medium text-gray-500 mt-0.5">Tightening Panamax supply in Pacific.</div>
                  </div>
               </div>
               <div className="flex gap-3 items-start border-b border-gray-50 pb-3">
                  <div className="bg-green-50 p-1.5 rounded text-green-600 mt-0.5"><CheckCircle2 className="w-3.5 h-3.5"/></div>
                  <div>
                     <div className="text-xs font-bold text-gray-900">Expected Cost Difference</div>
                     <div className="text-[10px] font-medium text-gray-500 mt-0.5">Locking short-term avoids $560K spot exposure.</div>
                  </div>
               </div>
            </div>
         </motion.div>
      </div>
    </motion.div>
  );
}
