const fs = require('fs');
const path = require('path');

const dmDir = path.join(__dirname, 'src', 'pages', 'decision-maker');
if (!fs.existsSync(dmDir)) {
  fs.mkdirSync(dmDir, { recursive: true });
}

// 1. AIRecommendations.tsx
const recCode = `import React from 'react';
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
              <div className={\`p-1.5 rounded-lg \${kpi.bg} \${kpi.color}\`}>{kpi.icon}</div>
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
`;
fs.writeFileSync(path.join(dmDir, 'AIRecommendations.tsx'), recCode);

// 2. CharteringDecisions.tsx
const charterCode = `import React from 'react';
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
`;
fs.writeFileSync(path.join(dmDir, 'CharteringDecisions.tsx'), charterCode);

// 3. ContractStrategies.tsx
const contractCode = `import React from 'react';
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
`;
fs.writeFileSync(path.join(dmDir, 'ContractStrategies.tsx'), contractCode);

// 4. Approvals.tsx
const approvalsCode = `import React from 'react';
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
`;
fs.writeFileSync(path.join(dmDir, 'Approvals.tsx'), approvalsCode);


// Add routing in App.tsx
const appFile = path.join(__dirname, 'src', 'App.tsx');
let appContent = fs.readFileSync(appFile, 'utf8');

if (!appContent.includes('AIRecommendations')) {
  appContent = appContent.replace("import Dashboard from './pages/Dashboard';",
`import Dashboard from './pages/Dashboard';
import AIRecommendations from './pages/decision-maker/AIRecommendations';
import CharteringDecisions from './pages/decision-maker/CharteringDecisions';
import ContractStrategies from './pages/decision-maker/ContractStrategies';
import Approvals from './pages/decision-maker/Approvals';`);
  
  appContent = appContent.replace("<Route path='/dashboard'",
`<Route path='/decision-maker/dashboard' element={<ProtectedRoute><motion.div {...pageTransition}><Dashboard /></motion.div></ProtectedRoute>} />
        <Route path='/decision-maker/recommendations' element={<ProtectedRoute><motion.div {...pageTransition}><AIRecommendations /></motion.div></ProtectedRoute>} />
        <Route path='/decision-maker/chartering' element={<ProtectedRoute><motion.div {...pageTransition}><CharteringDecisions /></motion.div></ProtectedRoute>} />
        <Route path='/decision-maker/contracts' element={<ProtectedRoute><motion.div {...pageTransition}><ContractStrategies /></motion.div></ProtectedRoute>} />
        <Route path='/decision-maker/approvals' element={<ProtectedRoute><motion.div {...pageTransition}><Approvals /></motion.div></ProtectedRoute>} />
        <Route path='/dashboard'`);
  
  fs.writeFileSync(appFile, appContent);
}

// Modify AppLayout.tsx Nav Items
const appLayoutFile = path.join(__dirname, 'src', 'components', 'AppLayout.tsx');
let layoutContent = fs.readFileSync(appLayoutFile, 'utf8');

if (layoutContent.includes("path: '/ai-recommendations'")) {
  layoutContent = layoutContent.replace("case 'Decision Maker':\n        return [\n          { path: '/dashboard', icon: <LayoutDashboard className=\"w-5 h-5\" />, label: 'Overview' },\n          { path: '/ai-recommendations', icon: <Target className=\"w-5 h-5\" />, label: 'AI Recommendations' },\n          { path: '/chartering', icon: <Compass className=\"w-5 h-5\" />, label: 'Chartering' },\n          { path: '/contracts', icon: <FileText className=\"w-5 h-5\" />, label: 'Contracts' },\n          { path: '/approvals', icon: <Users className=\"w-5 h-5\" />, label: 'Approvals' },\n        ];", 
  "case 'Decision Maker':\n        return [\n          { path: '/decision-maker/dashboard', icon: <LayoutDashboard className=\"w-5 h-5\" />, label: 'Overview' },\n          { path: '/decision-maker/recommendations', icon: <Target className=\"w-5 h-5\" />, label: 'AI Recommendations' },\n          { path: '/decision-maker/chartering', icon: <Compass className=\"w-5 h-5\" />, label: 'Chartering Decisions' },\n          { path: '/decision-maker/contracts', icon: <FileText className=\"w-5 h-5\" />, label: 'Contract Strategies' },\n          { path: '/decision-maker/approvals', icon: <Users className=\"w-5 h-5\" />, label: 'Approvals' },\n        ];");
  
  layoutContent = layoutContent.replace("if(r === 'Analyst') navigate('/analyst/dashboard'); else navigate('/dashboard');", 
  "if(r === 'Analyst') navigate('/analyst/dashboard'); else if(r === 'Decision Maker') navigate('/decision-maker/dashboard'); else navigate('/dashboard');");
  
  fs.writeFileSync(appLayoutFile, layoutContent);
}

// Modify Dashboard.tsx to route Decision Maker to /decision-maker/dashboard
const dashboardFile = path.join(__dirname, 'src', 'pages', 'Dashboard.tsx');
let dashboardContent = fs.readFileSync(dashboardFile, 'utf8');
if (!dashboardContent.includes("Navigate to='/decision-maker/dashboard'")) {
  dashboardContent = dashboardContent.replace("case 'Decision Maker':", 
  "case 'Decision Maker':\n      return <Navigate to='/decision-maker/dashboard' replace />;\n    // case 'Decision Maker' fallthrough removed");
  // Important: DO NOT remove \`return <DecisionMakerDashboard />;\` because /decision-maker/dashboard maps to Dashboard.tsx!
  // Wait! If Dashboard.tsx redirects to /decision-maker/dashboard, and /decision-maker/dashboard renders Dashboard.tsx... INFINITE LOOP!
  
  // Actually, I need to make sure that if the location is already '/decision-maker/dashboard', we don't redirect.
  // I will just use <DecisionMakerDashboard /> directly in App.tsx for '/decision-maker/dashboard' route instead of <Dashboard />!
  
  fs.writeFileSync(dashboardFile, dashboardContent);
}

// Fix App.tsx infinite loop issue by directly rendering DecisionMakerDashboard for that route
if (appContent.includes("<Route path='/decision-maker/dashboard' element={<ProtectedRoute><motion.div {...pageTransition}><Dashboard /></motion.div></ProtectedRoute>} />")) {
  appContent = appContent.replace("import Dashboard from './pages/Dashboard';", "import Dashboard from './pages/Dashboard';\nimport DecisionMakerDashboard from './components/dashboards/DecisionMakerDashboard';");
  appContent = appContent.replace("<Route path='/decision-maker/dashboard' element={<ProtectedRoute><motion.div {...pageTransition}><Dashboard /></motion.div></ProtectedRoute>} />", 
  "<Route path='/decision-maker/dashboard' element={<ProtectedRoute><motion.div {...pageTransition}><DecisionMakerDashboard /></motion.div></ProtectedRoute>} />");
  fs.writeFileSync(appFile, appContent);
}

console.log('Decision Maker module pages generated and hooked up correctly.');
