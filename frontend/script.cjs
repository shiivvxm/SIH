const fs = require('fs');
const path = require('path');

const opsDir = path.join(__dirname, 'src', 'pages', 'operations');
if (!fs.existsSync(opsDir)) {
  fs.mkdirSync(opsDir, { recursive: true });
}

// 1. Create OperationsOverview.tsx
const overviewCode = `import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Anchor, AlertTriangle, Clock, CheckCircle2, Globe, FileText, Activity } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.05 } } };

export default function OperationsOverview() {
  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6 pb-12 max-w-[1600px] mx-auto">
      <motion.div variants={fadeUp} className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Operations Command Center</h1>
          <p className="text-xs text-gray-500 font-medium">Real-time visibility into vessels, ports, berths and operational risks.</p>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-lg border border-green-200">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> SYSTEMS OPERATIONAL
          </div>
          <div className="text-gray-400">Last updated: <span className="text-gray-900">SIMULATED DATA</span></div>
        </div>
      </motion.div>

      {/* KPI Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {[
          { label: "Total Vessels", val: "128", sub: "Monitored", icon: <Globe className="w-4 h-4"/>, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Vessels at Sea", val: "86", sub: "In Transit", icon: <Ship className="w-4 h-4"/>, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Vessels in Port", val: "42", sub: "Berthed/Anchored", icon: <Anchor className="w-4 h-4"/>, color: "text-green-600", bg: "bg-green-50" },
          { label: "Vessels at Risk", val: "11", sub: "Weather/Delays", icon: <AlertTriangle className="w-4 h-4"/>, color: "text-red-600", bg: "bg-red-50" },
          { label: "Avg Port Waiting", val: "18.4h", sub: "Paradip / Vizag", icon: <Clock className="w-4 h-4"/>, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Berth Availability", val: "76%", sub: "East Coast Ports", icon: <CheckCircle2 className="w-4 h-4"/>, color: "text-green-600", bg: "bg-green-50" },
        ].map((kpi, i) => (
          <motion.div key={i} variants={fadeUp} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
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

      {/* Fleet Status & Summary */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <motion.div variants={fadeUp} className="xl:col-span-8 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Fleet Status Distribution</div>
          <div className="flex flex-wrap gap-2 text-[10px] font-bold tracking-widest uppercase mb-6">
            {['At Sea (86)', 'In Port (42)', 'Anchored (8)', 'Loading (12)', 'Discharging (22)', 'Delayed (6)', 'At Risk (5)'].map((s, i) => (
              <div key={i} className="bg-gray-50 text-gray-700 border border-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-2">
                {s}
              </div>
            ))}
          </div>
          
          <div className="h-[300px] bg-[#0F172A] rounded-lg relative flex items-center justify-center border border-gray-800 overflow-hidden">
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #3B82F6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             <div className="text-center relative z-10">
               <Globe className="w-12 h-12 text-blue-500 mx-auto mb-2 opacity-50"/>
               <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Live Maritime AIS Radar — Bay of Bengal</div>
               <div className="text-[9px] text-gray-500 mt-1">SIMULATED AIS DATA</div>
             </div>
          </div>
        </motion.div>

        <div className="xl:col-span-4 space-y-6">
          <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <div className="flex justify-between items-center mb-4">
               <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Operational Summary</div>
               <Activity className="w-4 h-4 text-gray-400"/>
            </div>
            <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 mb-4">
               <div className="text-[9px] font-bold text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-1"><Activity className="w-3 h-3"/> AI-Assisted Operational Summary</div>
               <p className="text-[11px] text-gray-700 font-medium leading-relaxed">Paradip congestion is currently the primary operational constraint. Two vessels show elevated delay risk due to berth availability.</p>
            </div>
            <div className="space-y-3 text-xs font-bold text-gray-900">
               <div className="flex justify-between border-b border-gray-50 pb-2"><span>Ports Requiring Attention</span><span className="text-amber-600">2</span></div>
               <div className="flex justify-between border-b border-gray-50 pb-2"><span>Critical Alerts</span><span className="text-red-600">1</span></div>
               <div className="flex justify-between pb-2"><span>Berth Utilization</span><span>82%</span></div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <div className="flex justify-between items-center mb-4">
               <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cargo Visibility</div>
               <FileText className="w-4 h-4 text-gray-400"/>
            </div>
            <div className="space-y-3">
               <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div className="flex justify-between text-xs font-bold text-gray-900 mb-1">
                     <span>Iron Ore (120k MT)</span>
                     <span className="text-[9px] uppercase tracking-widest text-blue-600">IN TRANSIT</span>
                  </div>
                  <div className="text-[10px] text-gray-500 font-medium">MV Ocean Star • ETA 22 May</div>
               </div>
               <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div className="flex justify-between text-xs font-bold text-gray-900 mb-1">
                     <span>Coking Coal (75k MT)</span>
                     <span className="text-[9px] uppercase tracking-widest text-amber-600">DELAYED</span>
                  </div>
                  <div className="text-[10px] text-gray-500 font-medium">MV Horizon • ETA 24 May</div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
`;

fs.writeFileSync(path.join(opsDir, 'OperationsOverview.tsx'), overviewCode);

// 2. Create LiveFleetTracking.tsx
const fleetCode = `import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Search, Filter, Ship } from 'lucide-react';

export default function LiveFleetTracking() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Live Fleet Tracking</h1>
          <p className="text-xs text-gray-500 font-medium">Monitor vessel movement, ETA and operational status across active routes.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-lg shadow-sm">
            <Search className="w-4 h-4 text-gray-400"/>
            <input type="text" placeholder="Search vessel, IMO..." className="text-xs font-medium outline-none w-48"/>
          </div>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
            <Filter className="w-3.5 h-3.5"/> Filters
          </button>
        </div>
      </div>

      <div className="h-[400px] bg-[#0F172A] rounded-xl border border-gray-800 flex items-center justify-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #3B82F6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
         <div className="text-center relative z-10 text-blue-500/50">
            <Globe className="w-16 h-16 mx-auto mb-3"/>
            <div className="text-[10px] font-bold uppercase tracking-widest">Interactive Maritime Map (Simulated)</div>
         </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-gray-50/80 border-b border-gray-100">
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Vessel</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">IMO</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Route</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">ETA</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Status</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-50">
                  <tr className="hover:bg-gray-50 cursor-pointer">
                     <td className="py-4 px-4 text-xs font-bold text-gray-900 flex items-center gap-2"><Ship className="w-4 h-4 text-gray-400"/> MV Ocean Star</td>
                     <td className="py-4 px-4 text-[11px] font-mono text-gray-500">9834211</td>
                     <td className="py-4 px-4 text-[11px] font-semibold text-gray-600">Newcastle → Paradip</td>
                     <td className="py-4 px-4 text-[11px] font-mono text-gray-900">22 May 14:00</td>
                     <td className="py-4 px-4"><span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">AT SEA</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50 cursor-pointer">
                     <td className="py-4 px-4 text-xs font-bold text-gray-900 flex items-center gap-2"><Ship className="w-4 h-4 text-gray-400"/> MV Horizon</td>
                     <td className="py-4 px-4 text-[11px] font-mono text-gray-500">9722340</td>
                     <td className="py-4 px-4 text-[11px] font-semibold text-gray-600">Richards Bay → Vizag</td>
                     <td className="py-4 px-4 text-[11px] font-mono text-gray-900">24 May 08:30</td>
                     <td className="py-4 px-4"><span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">DELAYED</span></td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
    </motion.div>
  );
}
`;
fs.writeFileSync(path.join(opsDir, 'LiveFleetTracking.tsx'), fleetCode);

// 3. Create PortBerthOps.tsx
const portsCode = `import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Clock } from 'lucide-react';

export default function PortBerthOps() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Port & Berth Operations</h1>
        <p className="text-xs text-gray-500 font-medium">Monitor congestion, berth availability and vessel waiting time.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
         <div className="p-4 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2"><Anchor className="w-4 h-4"/> Port Congestion (Simulated)</h2>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-white border-b border-gray-100">
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Port</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Congestion</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Vessels Waiting</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Avg Wait</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-50">
                  <tr>
                     <td className="py-4 px-4 text-xs font-bold text-gray-900">Paradip</td>
                     <td className="py-4 px-4"><span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">HIGH</span></td>
                     <td className="py-4 px-4 text-xs font-mono font-bold text-gray-900">12</td>
                     <td className="py-4 px-4 text-xs font-mono font-bold text-amber-600">4.2 Days</td>
                  </tr>
                  <tr>
                     <td className="py-4 px-4 text-xs font-bold text-gray-900">Visakhapatnam</td>
                     <td className="py-4 px-4"><span className="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">LOW</span></td>
                     <td className="py-4 px-4 text-xs font-mono font-bold text-gray-900">2</td>
                     <td className="py-4 px-4 text-xs font-mono font-bold text-gray-900">0.8 Days</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
         <div className="p-4 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2"><Clock className="w-4 h-4"/> Berth Schedule</h2>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-white border-b border-gray-100">
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Vessel</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Port / Berth</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Arrival Time</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Berth Time</th>
                     <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Wait Duration</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-50">
                  <tr>
                     <td className="py-4 px-4 text-xs font-bold text-gray-900">MV Ocean Star</td>
                     <td className="py-4 px-4 text-xs font-medium text-gray-600">Paradip Berth #2</td>
                     <td className="py-4 px-4 text-[11px] font-mono text-gray-500">08:00</td>
                     <td className="py-4 px-4 text-[11px] font-mono text-gray-900">14:00</td>
                     <td className="py-4 px-4 text-xs font-mono font-bold text-gray-900">6h 00m</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
    </motion.div>
  );
}
`;
fs.writeFileSync(path.join(opsDir, 'PortBerthOps.tsx'), portsCode);

// 4. Create VesselCompatibility.tsx
const vesselsCode = `import React, { useState } from 'react';
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
`;
fs.writeFileSync(path.join(opsDir, 'VesselCompatibility.tsx'), vesselsCode);

// 5. Create AlertsRisks.tsx
const alertsCode = `import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, AlertTriangle, Info } from 'lucide-react';

export default function AlertsRisks() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-6 max-w-[1600px] mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Alerts & Operational Risks</h1>
        <p className="text-xs text-gray-500 font-medium">Identify vessel, port, berth, weather and route risks requiring operational attention.</p>
      </div>

      <div className="flex items-center gap-2 mb-4">
         <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mr-2">Filters:</span>
         {['All', 'Critical', 'High', 'Medium', 'Low', 'Acknowledged'].map((f, i) => (
            <button key={i} className={\`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest \${i===0 ? 'bg-gray-900 text-white' : 'bg-white border border-gray-200 text-gray-600'}\`}>
               {f}
            </button>
         ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
         <div className="bg-white rounded-xl border border-red-200 p-5 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
            <div className="flex justify-between items-start mb-3">
               <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 border border-red-100">
                  <AlertTriangle className="w-3 h-3"/> HIGH SEVERITY
               </span>
               <span className="text-[10px] font-bold text-gray-400">12 Mins Ago</span>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Paradip Port</h3>
            <p className="text-xs text-gray-700 font-medium mb-3">Expected waiting time increased by 7.2 hours.</p>
            
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 mb-4">
               <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Impact</div>
               <div className="text-xs font-semibold text-gray-900 mb-3">Potential demurrage exposure.</div>
               <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Recommended Action</div>
               <div className="text-xs font-semibold text-blue-700">Review berth allocation and arrival window.</div>
            </div>

            <div className="flex items-center gap-3">
               <button className="flex-1 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest py-2.5 rounded-lg hover:bg-gray-800 transition-colors">Acknowledge</button>
               <button className="flex-1 bg-white text-gray-900 border border-gray-200 text-[10px] font-bold uppercase tracking-widest py-2.5 rounded-lg hover:bg-gray-50 transition-colors">View Details</button>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
`;
fs.writeFileSync(path.join(opsDir, 'AlertsRisks.tsx'), alertsCode);

// Modify App.tsx to include the routes
const appFile = path.join(__dirname, 'src', 'App.tsx');
let appContent = fs.readFileSync(appFile, 'utf8');

// Add imports
if (!appContent.includes('OperationsOverview')) {
  appContent = appContent.replace("import Dashboard from './pages/Dashboard';",
`import Dashboard from './pages/Dashboard';
import OperationsOverview from './pages/operations/OperationsOverview';
import LiveFleetTracking from './pages/operations/LiveFleetTracking';
import PortBerthOps from './pages/operations/PortBerthOps';
import VesselCompatibility from './pages/operations/VesselCompatibility';
import AlertsRisks from './pages/operations/AlertsRisks';`);
  
  appContent = appContent.replace("<Route path='/dashboard'",
`<Route path='/operations/dashboard' element={<ProtectedRoute><motion.div {...pageTransition}><OperationsOverview /></motion.div></ProtectedRoute>} />
        <Route path='/operations/fleet' element={<ProtectedRoute><motion.div {...pageTransition}><LiveFleetTracking /></motion.div></ProtectedRoute>} />
        <Route path='/operations/ports' element={<ProtectedRoute><motion.div {...pageTransition}><PortBerthOps /></motion.div></ProtectedRoute>} />
        <Route path='/operations/vessels' element={<ProtectedRoute><motion.div {...pageTransition}><VesselCompatibility /></motion.div></ProtectedRoute>} />
        <Route path='/operations/alerts' element={<ProtectedRoute><motion.div {...pageTransition}><AlertsRisks /></motion.div></ProtectedRoute>} />
        <Route path='/dashboard'`);
  
  fs.writeFileSync(appFile, appContent);
}

// Modify AppLayout.tsx Nav Items
const appLayoutFile = path.join(__dirname, 'src', 'components', 'AppLayout.tsx');
let layoutContent = fs.readFileSync(appLayoutFile, 'utf8');
if (layoutContent.includes("path: '/live-tracking'")) {
  layoutContent = layoutContent.replace("path: '/dashboard', icon: <LayoutDashboard className=\"w-5 h-5\" />, label: 'Overview'", "path: '/operations/dashboard', icon: <LayoutDashboard className=\"w-5 h-5\" />, label: 'Overview'");
  layoutContent = layoutContent.replace("path: '/live-tracking', icon: <Globe className=\"w-5 h-5\" />, label: 'Live Tracking'", "path: '/operations/fleet', icon: <Globe className=\"w-5 h-5\" />, label: 'Live Fleet Tracking'");
  layoutContent = layoutContent.replace("path: '/ports', icon: <Anchor className=\"w-5 h-5\" />, label: 'Ports'", "path: '/operations/ports', icon: <Anchor className=\"w-5 h-5\" />, label: 'Port & Berth Ops'");
  layoutContent = layoutContent.replace("path: '/vessels', icon: <Ship className=\"w-5 h-5\" />, label: 'Vessels'", "path: '/operations/vessels', icon: <Ship className=\"w-5 h-5\" />, label: 'Vessel Compatibility'");
  layoutContent = layoutContent.replace("path: '/alerts', icon: <ShieldAlert className=\"w-5 h-5\" />, label: 'Alerts'", "path: '/operations/alerts', icon: <ShieldAlert className=\"w-5 h-5\" />, label: 'Alerts & Risks'");
  
  // also redirect role switch for Operations Team to /operations/dashboard
  layoutContent = layoutContent.replace("navigate('/dashboard'); // Always go back to root dashboard when switching roles", 
  "if(r === 'Operations Team') navigate('/operations/dashboard'); else navigate('/dashboard');");
  
  fs.writeFileSync(appLayoutFile, layoutContent);
}

// Finally, update Dashboard.tsx to route 'Operations Team' to '/operations/dashboard' if they somehow hit /dashboard directly
const dashboardFile = path.join(__dirname, 'src', 'pages', 'Dashboard.tsx');
let dashboardContent = fs.readFileSync(dashboardFile, 'utf8');
if (!dashboardContent.includes("Navigate to='/operations/dashboard'")) {
  dashboardContent = dashboardContent.replace("case 'Operations Team':", 
  "case 'Operations Team':\n      return <Navigate to='/operations/dashboard' replace />;\n    // case 'Operations Team' fallthrough removed");
  dashboardContent = dashboardContent.replace("return <OperationsDashboard />;", "");
  // add Navigate import to Dashboard.tsx
  dashboardContent = dashboardContent.replace("import React from 'react';", "import React from 'react';\nimport { Navigate } from 'react-router-dom';");
  fs.writeFileSync(dashboardFile, dashboardContent);
}

console.log('Operations module successfully scaffolded and hooked up!');
