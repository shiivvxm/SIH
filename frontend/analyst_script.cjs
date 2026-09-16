const fs = require('fs');
const path = require('path');

const analystDir = path.join(__dirname, 'src', 'pages', 'analyst');
if (!fs.existsSync(analystDir)) {
  fs.mkdirSync(analystDir, { recursive: true });
}

// 1. AnalystOverview.tsx
const overviewCode = `import React from 'react';
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
              <div className={\`p-1.5 rounded-lg \${kpi.bg} \${kpi.color}\`}>{kpi.icon}</div>
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
`;
fs.writeFileSync(path.join(analystDir, 'AnalystOverview.tsx'), overviewCode);

// 2. FreightForecasting.tsx
const forecastCode = `import React from 'react';
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
`;
fs.writeFileSync(path.join(analystDir, 'FreightForecasting.tsx'), forecastCode);

// 3. WhatIfSimulation.tsx
const simulationCode = `import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Play } from 'lucide-react';

export default function WhatIfSimulation() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">What-If Simulation</h1>
        <p className="text-xs text-gray-500 font-medium">Evaluate how fuel prices, weather, route conditions and market changes affect freight economics.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
         <div className="xl:col-span-4 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-sm font-black text-gray-900 mb-6 uppercase tracking-widest">Scenario Builder</h2>
            <div className="space-y-5">
               <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 flex justify-between">
                     <span>Freight Rate Impact</span> <span>+15%</span>
                  </div>
                  <input type="range" className="w-full accent-blue-600" />
               </div>
               <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 flex justify-between">
                     <span>Fuel / Bunker Price</span> <span>$650 / MT</span>
                  </div>
                  <input type="range" className="w-full accent-blue-600" />
               </div>
               <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Port Congestion Risk</div>
                  <select className="w-full bg-gray-50 border border-gray-200 text-xs font-bold text-gray-900 px-3 py-2 rounded-lg outline-none">
                     <option>Critical (+3 days)</option>
                     <option>High (+2 days)</option>
                     <option>Normal</option>
                  </select>
               </div>
               <button className="w-full bg-gray-900 text-white py-3 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors mt-6">
                  <Play className="w-4 h-4"/> Run Scenario
               </button>
            </div>
         </div>

         <div className="xl:col-span-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-sm font-black text-gray-900 mb-6 uppercase tracking-widest">Simulation Output</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
               <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">BASELINE</div>
                  <div className="space-y-2 text-sm">
                     <div className="flex justify-between"><span className="text-gray-500 font-medium">Total Cost</span> <strong className="font-mono text-gray-900">$6.8M</strong></div>
                     <div className="flex justify-between"><span className="text-gray-500 font-medium">Waiting</span> <strong className="font-mono text-gray-900">2.1 Days</strong></div>
                     <div className="flex justify-between"><span className="text-gray-500 font-medium">Risk</span> <strong className="text-amber-600 bg-amber-50 px-1 rounded text-xs">Medium</strong></div>
                  </div>
               </div>
               
               <div className="bg-blue-50/30 rounded-xl p-5 border border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1 h-full bg-blue-500"></div>
                  <div className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-3">SCENARIO RESULT</div>
                  <div className="space-y-2 text-sm">
                     <div className="flex justify-between"><span className="text-gray-500 font-medium">Total Cost</span> <strong className="font-mono text-gray-900">$7.4M <span className="text-xs text-red-500">(+$600K)</span></strong></div>
                     <div className="flex justify-between"><span className="text-gray-500 font-medium">Waiting</span> <strong className="font-mono text-gray-900">4.3 Days <span className="text-xs text-red-500">(+2.2d)</span></strong></div>
                     <div className="flex justify-between"><span className="text-gray-500 font-medium">Risk</span> <strong className="text-red-700 bg-red-50 border border-red-200 px-1 rounded text-xs">High</strong></div>
                  </div>
               </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
               <div className="text-[9px] font-bold text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-1"><BrainCircuit className="w-3 h-3"/> AI-Assisted Scenario Interpretation</div>
               <p className="text-xs text-gray-700 font-medium leading-relaxed">Higher bunker prices and increased port congestion materially increase expected voyage cost. Consider an earlier charter window or alternate port to mitigate total downside exposure.</p>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
`;
fs.writeFileSync(path.join(analystDir, 'WhatIfSimulation.tsx'), simulationCode);

// 4. RouteMarketAnalysis.tsx
const routesCode = `import React from 'react';
import { motion } from 'framer-motion';

export default function RouteMarketAnalysis() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Route & Market Analysis</h1>
        <p className="text-xs text-gray-500 font-medium">Analyze freight economics, supply-demand conditions and operational risk across major trade routes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
         <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-xs font-black text-gray-900 mb-1">Australia → Paradip</div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Panamax / Coking Coal</div>
            <div className="space-y-2 text-xs border-b border-gray-100 pb-4 mb-4">
               <div className="flex justify-between"><span className="text-gray-500">Freight Rate</span><strong className="font-mono text-gray-900">$32.40 / MT</strong></div>
               <div className="flex justify-between"><span className="text-gray-500">30-Day Trend</span><strong className="text-red-600">+14.2%</strong></div>
               <div className="flex justify-between"><span className="text-gray-500">Est. Transit</span><strong className="font-mono text-gray-900">18 Days</strong></div>
            </div>
            <div className="text-[9px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded text-center uppercase tracking-widest">High Route Risk (Congestion)</div>
         </div>
         <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-xs font-black text-gray-900 mb-1">USA → Paradip</div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Capesize / Coal</div>
            <div className="space-y-2 text-xs border-b border-gray-100 pb-4 mb-4">
               <div className="flex justify-between"><span className="text-gray-500">Freight Rate</span><strong className="font-mono text-gray-900">$48.10 / MT</strong></div>
               <div className="flex justify-between"><span className="text-gray-500">30-Day Trend</span><strong className="text-green-600">-2.1%</strong></div>
               <div className="flex justify-between"><span className="text-gray-500">Est. Transit</span><strong className="font-mono text-gray-900">32 Days</strong></div>
            </div>
            <div className="text-[9px] font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-1 rounded text-center uppercase tracking-widest">Normal Route Risk</div>
         </div>
      </div>
    </motion.div>
  );
}
`;
fs.writeFileSync(path.join(analystDir, 'RouteMarketAnalysis.tsx'), routesCode);

// 5. ModelPerformance.tsx
const modelCode = `import React from 'react';
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
`;
fs.writeFileSync(path.join(analystDir, 'ModelPerformance.tsx'), modelCode);

// 6. EarlyWarnings.tsx
const warningsCode = `import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Send } from 'lucide-react';

export default function EarlyWarnings() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Early Warnings</h1>
        <p className="text-xs text-gray-500 font-medium">Detect potential freight, demand, congestion and market disruptions before they impact procurement planning.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-white rounded-xl border border-red-200 shadow-sm overflow-hidden flex flex-col relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
            <div className="p-5 flex-1">
               <div className="flex justify-between items-start mb-3">
                  <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 border border-red-100">
                     <AlertTriangle className="w-3 h-3"/> HIGH SEVERITY
                  </span>
               </div>
               <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Newcastle → Paradip</div>
               <h3 className="text-sm font-bold text-gray-900 mb-2">Freight Rate Spike Expected</h3>
               
               <div className="grid grid-cols-2 gap-4 my-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div>
                     <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Probability</div>
                     <div className="text-sm font-mono font-bold text-gray-900">89%</div>
                  </div>
                  <div>
                     <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Expected Change</div>
                     <div className="text-sm font-mono font-bold text-red-600">+14.2%</div>
                  </div>
               </div>

               <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Recommended Analyst Action</div>
               <div className="text-xs font-semibold text-blue-700">Review chartering window and share insight.</div>
            </div>
            <div className="bg-gray-50 border-t border-gray-100 p-4 flex justify-end">
               <button className="bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
                  <Send className="w-3 h-3"/> Send Insight to Decision Maker
               </button>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
`;
fs.writeFileSync(path.join(analystDir, 'EarlyWarnings.tsx'), warningsCode);

// Add routing in App.tsx
const appFile = path.join(__dirname, 'src', 'App.tsx');
let appContent = fs.readFileSync(appFile, 'utf8');

if (!appContent.includes('AnalystOverview')) {
  appContent = appContent.replace("import Dashboard from './pages/Dashboard';",
`import Dashboard from './pages/Dashboard';
import AnalystOverview from './pages/analyst/AnalystOverview';
import FreightForecasting from './pages/analyst/FreightForecasting';
import WhatIfSimulation from './pages/analyst/WhatIfSimulation';
import RouteMarketAnalysis from './pages/analyst/RouteMarketAnalysis';
import ModelPerformance from './pages/analyst/ModelPerformance';
import EarlyWarnings from './pages/analyst/EarlyWarnings';`);
  
  appContent = appContent.replace("<Route path='/dashboard'",
`<Route path='/analyst/dashboard' element={<ProtectedRoute><motion.div {...pageTransition}><AnalystOverview /></motion.div></ProtectedRoute>} />
        <Route path='/analyst/forecasts' element={<ProtectedRoute><motion.div {...pageTransition}><FreightForecasting /></motion.div></ProtectedRoute>} />
        <Route path='/analyst/simulation' element={<ProtectedRoute><motion.div {...pageTransition}><WhatIfSimulation /></motion.div></ProtectedRoute>} />
        <Route path='/analyst/routes' element={<ProtectedRoute><motion.div {...pageTransition}><RouteMarketAnalysis /></motion.div></ProtectedRoute>} />
        <Route path='/analyst/model-performance' element={<ProtectedRoute><motion.div {...pageTransition}><ModelPerformance /></motion.div></ProtectedRoute>} />
        <Route path='/analyst/early-warnings' element={<ProtectedRoute><motion.div {...pageTransition}><EarlyWarnings /></motion.div></ProtectedRoute>} />
        <Route path='/dashboard'`);
  
  fs.writeFileSync(appFile, appContent);
}

// Modify AppLayout.tsx Nav Items
const appLayoutFile = path.join(__dirname, 'src', 'components', 'AppLayout.tsx');
let layoutContent = fs.readFileSync(appLayoutFile, 'utf8');
if (layoutContent.includes("case 'Analyst':\n        return [\n          { path: '/dashboard'")) {
  layoutContent = layoutContent.replace("case 'Analyst':\n        return [\n          { path: '/dashboard', icon: <LayoutDashboard className=\"w-5 h-5\" />, label: 'Overview' },\n          { path: '/forecasts', icon: <BarChart2 className=\"w-5 h-5\" />, label: 'Forecasts' },\n          { path: '/simulation', icon: <BrainCircuit className=\"w-5 h-5\" />, label: 'Simulation' },\n          { path: '/route-analysis', icon: <Navigation className=\"w-5 h-5\" />, label: 'Route Analysis' },\n          { path: '/model-performance', icon: <Activity className=\"w-5 h-5\" />, label: 'Model Performance' },\n        ];", 
  "case 'Analyst':\n        return [\n          { path: '/analyst/dashboard', icon: <LayoutDashboard className=\"w-5 h-5\" />, label: 'Overview' },\n          { path: '/analyst/forecasts', icon: <BarChart2 className=\"w-5 h-5\" />, label: 'Freight Forecasting' },\n          { path: '/analyst/simulation', icon: <BrainCircuit className=\"w-5 h-5\" />, label: 'What-If Simulation' },\n          { path: '/analyst/routes', icon: <Navigation className=\"w-5 h-5\" />, label: 'Route & Market Analysis' },\n          { path: '/analyst/model-performance', icon: <Activity className=\"w-5 h-5\" />, label: 'Model Performance' },\n          { path: '/analyst/early-warnings', icon: <ShieldAlert className=\"w-5 h-5\" />, label: 'Early Warnings' },\n        ];");
  
  layoutContent = layoutContent.replace("if(r === 'Operations Team') navigate('/operations/dashboard'); else navigate('/dashboard');", 
  "if(r === 'Operations Team') navigate('/operations/dashboard'); else if(r === 'Analyst') navigate('/analyst/dashboard'); else navigate('/dashboard');");
  
  fs.writeFileSync(appLayoutFile, layoutContent);
}

// Modify Dashboard.tsx to route Analyst to /analyst/dashboard
const dashboardFile = path.join(__dirname, 'src', 'pages', 'Dashboard.tsx');
let dashboardContent = fs.readFileSync(dashboardFile, 'utf8');
if (!dashboardContent.includes("Navigate to='/analyst/dashboard'")) {
  dashboardContent = dashboardContent.replace("case 'Analyst':", 
  "case 'Analyst':\n      return <Navigate to='/analyst/dashboard' replace />;\n    // case 'Analyst' fallthrough removed");
  dashboardContent = dashboardContent.replace("return <AnalystDashboard />;", "");
  fs.writeFileSync(dashboardFile, dashboardContent);
}

console.log('Analyst module successfully scaffolded and hooked up!');
