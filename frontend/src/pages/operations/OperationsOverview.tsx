import React from 'react';
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
              <div className={`p-1.5 rounded-lg ${kpi.bg} ${kpi.color}`}>{kpi.icon}</div>
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
