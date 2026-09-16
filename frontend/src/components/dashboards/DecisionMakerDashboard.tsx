import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, AlertTriangle, Ship, Calendar, FileText, ArrowRight,
  Shield, FileSearch, TrendingUp, Anchor, Activity, BarChart2,
  Share2, ArrowUpRight, Zap, Info
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.05 } }
};

export default function DecisionMakerDashboard() {
  const [selectedStrategy, setSelectedStrategy] = useState<number>(2);

  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6 pb-12 max-w-[1600px] mx-auto">
      
      {/* Top Header Module */}
      <motion.div variants={fadeUp} className="flex flex-col xl:flex-row xl:items-start justify-between gap-4 mb-2">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold tracking-widest uppercase bg-blue-50 border border-blue-100 text-blue-700 px-2 py-0.5 rounded-sm">
              AI CHARTERING & STRATEGIC PROCUREMENT ADVISORY
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
              • Decision Engine v4.2
            </span>
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Chartering Decision Center</h1>
          <p className="text-xs text-gray-500 font-medium max-w-2xl">
            AI-powered procurement recommendations for vessel chartering, contract strategy and optimal execution timing.
          </p>
        </div>
        
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-xl shadow-sm">
          <Shield className="w-5 h-5 text-gray-400" aria-hidden="true" />
          <div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Access Clearance</div>
            <div className="text-xs font-bold text-gray-900">Chartering Mgr / Head of Procurement</div>
          </div>
        </div>
      </motion.div>

      {/* Procurement Request Card */}
      <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center text-white shrink-0">
            <FileText className="w-5 h-5" aria-hidden="true"/>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-gray-900">Requisition REQ-MO-2026-88</span>
              <span className="text-[9px] font-bold uppercase tracking-widest bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">Priority Tier-1</span>
            </div>
            <div className="text-sm font-medium text-gray-600 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="font-bold text-gray-900">70,000 MT Coking Coal</span> 
              <span className="text-gray-300">•</span>
              <span>Newcastle (AUS) → Paradip (IND)</span>
              <span className="text-gray-300">•</span>
              <span>Discharge Window: Nov 10–15, 2026</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-6">
          <div className="text-right">
            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Decision Horizon</div>
            <div className="text-sm font-black text-red-600 flex items-center gap-1.5 justify-end">
              <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
              48h 12m Remaining
            </div>
          </div>
          <button className="bg-gray-50 border border-gray-200 text-gray-700 text-[11px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-lg shadow-sm hover:bg-gray-100 transition-colors flex items-center gap-2">
            <FileSearch className="w-3.5 h-3.5"/> View Specs
          </button>
        </div>
      </motion.div>

      {/* Main Split: Recommendation & Reasoning */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* AI Recommendation Main Card */}
        <motion.div variants={fadeUp} className="xl:col-span-8 bg-gray-900 rounded-xl shadow-xl overflow-hidden flex flex-col relative border border-gray-800">
          {/* Subtle Background Graphic */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <Activity className="w-64 h-64 text-white transform translate-x-1/4 translate-y-1/4" />
          </div>

          <div className="p-6 md:p-8 flex-1 relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/10 text-white px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest">
                <Zap className="w-3 h-3 text-yellow-400" /> AI Recommendation: BOOK NOW
              </div>
              <div className="flex items-center gap-1.5 text-white/70 text-[10px] font-bold uppercase tracking-widest">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Confidence: 89.4%
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">Execute Short-Term Contract (3-Voyage Commitment)</h2>
            <p className="text-sm text-gray-400 font-medium max-w-3xl leading-relaxed mb-8">
              Secure a short-term commitment based on projected freight movement, vessel availability, port congestion and expected procurement cost. Settle binding contract within next 7–14 days to hedge projected Q4 Pacific dry bulk rally.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Current Spot</div>
                <div className="text-2xl font-black text-white">$32.40</div>
                <div className="text-[10px] font-medium text-gray-500 mt-1">per MT</div>
              </div>
              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-1">Locked Target</div>
                <div className="text-2xl font-black text-white">$29.80</div>
                <div className="text-[10px] font-bold text-blue-400 mt-1">-$2.60 / MT diff</div>
              </div>
              <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-1">Spot in 30D (Forecast)</div>
                <div className="text-2xl font-black text-white">$37.80</div>
                <div className="text-[10px] font-bold text-red-400 mt-1">+16.6% risk exposure</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/10 rounded-lg p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Projected Cost Avoidance</div>
                <div className="text-xl font-black text-white flex items-baseline gap-2">
                  $560,000 Saved <span className="text-xs font-medium text-gray-400">across 3-voyage commitment (210,000 MT total)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:px-8 bg-black/30 border-t border-white/10 flex flex-wrap gap-4 relative z-10">
            <button className="bg-white text-gray-900 text-xs font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4"/> Approve & Initiate Tender
            </button>
            <button className="bg-white/10 text-white border border-white/20 text-xs font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2">
              <FileText className="w-4 h-4"/> Review Negotiation Terms
            </button>
            <button className="bg-white/5 text-white border border-white/10 w-11 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center ml-auto" aria-label="Share">
              <Share2 className="w-4 h-4"/>
            </button>
          </div>
        </motion.div>

        {/* Why This Decision? */}
        <motion.div variants={fadeUp} className="xl:col-span-4 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <div>
              <h2 className="text-base font-black text-gray-900 flex items-center gap-2"><Zap className="w-4 h-4 text-blue-600"/> Why This Decision?</h2>
              <div className="text-[10px] font-medium text-gray-500 mt-0.5">Explainable AI recommendation factors</div>
            </div>
            <span className="bg-gray-100 border border-gray-200 text-gray-500 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">Model VX-209</span>
          </div>
          
          <div className="p-5 flex-1 overflow-y-auto space-y-5">
            <div className="flex gap-3">
              <TrendingUp className="w-4 h-4 text-gray-400 shrink-0 mt-0.5"/>
              <div>
                <h4 className="text-xs font-bold text-gray-900 mb-1">Upward Freight Momentum (94% Probability)</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed">Pacific bulk freight index shows 94% probability rates climb to $37+ before seasonal Q4 Indian steel plant restocking.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Ship className="w-4 h-4 text-gray-400 shrink-0 mt-0.5"/>
              <div>
                <h4 className="text-xs font-bold text-gray-900 mb-1">Favorable Tonnage Availability</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed">3 modern Japanese-built Panamax vessels currently ballast in Sunda Strait offering aggressive positioning discounts.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Anchor className="w-4 h-4 text-gray-400 shrink-0 mt-0.5"/>
              <div>
                <h4 className="text-xs font-bold text-gray-900 mb-1">Port Demurrage Mitigation</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed">Secures scheduled laycan priority at Paradip Berth 2, cutting anticipated port wait times from 8.2 days to 2.4 days.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <BarChart2 className="w-4 h-4 text-gray-400 shrink-0 mt-0.5"/>
              <div>
                <h4 className="text-xs font-bold text-gray-900 mb-1">Asymmetric Risk-Reward (4.5 : 1)</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed">Downside freight softening risk capped at $1.20/MT vs unprotected open spot rally risk of +$5.40/MT.</p>
              </div>
            </div>
          </div>

          <div className="p-5 border-t border-gray-100 bg-gray-50/50">
            <div className="flex justify-between text-[10px] font-bold mb-2">
              <span className="text-gray-500">Downside Market Risk (11%)</span>
              <span className="text-gray-900">Upside Bull Risk (89%)</span>
            </div>
            <div className="w-full h-1.5 bg-gray-900 rounded-full flex overflow-hidden">
              <div className="h-full bg-gray-300 w-[11%]"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Middle Split: Freight Curve & Vessel Archetype */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Freight Curve */}
        <motion.div variants={fadeUp} className="xl:col-span-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-lg font-black text-gray-900">Pacific Panamax Forward Freight Curve</h2>
              <div className="text-[11px] font-medium text-gray-500 mt-1">Newcastle to Paradip ($/MT) • Historical, Active Spot & Modeled Projections</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-gray-900"></div><span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Baseline</span></div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-red-500 border border-dashed"></div><span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">90th Pctile</span></div>
            </div>
          </div>

          {/* SVG Chart Area */}
          <div className="relative w-full h-[240px] mb-6">
             {/* Y Axis */}
             <div className="absolute left-0 top-0 bottom-6 w-10 flex flex-col justify-between text-[9px] font-mono text-gray-400 font-bold">
               <span>$40.00</span>
               <span>$35.00</span>
               <span>$30.00</span>
               <span>$25.00</span>
             </div>
             
             {/* Main Graph Area */}
             <div className="absolute left-10 right-0 top-0 bottom-6 border-b border-gray-200">
               {/* Today Line */}
               <div className="absolute left-[40%] top-0 bottom-0 border-l border-dashed border-gray-300">
                  <div className="absolute top-0 -left-6 text-[9px] font-bold bg-gray-100 text-gray-500 px-1 py-0.5 rounded">TODAY</div>
               </div>
               
               {/* Optimal Execution Window Highlight */}
               <div className="absolute left-[40%] right-[30%] top-0 bottom-0 bg-blue-50/50 border-l border-r border-blue-200/50">
                 <div className="text-center pt-2 text-[9px] font-bold uppercase tracking-widest text-blue-600">Optimal Execution Window (7-14d)</div>
               </div>

               {/* Target Locked Baseline Line */}
               <div className="absolute left-0 right-0 top-[60%] border-t border-dotted border-gray-400">
                 <div className="absolute -top-3.5 left-2 text-[9px] font-bold text-gray-500 bg-white px-1">Locked Baseline: $29.80/MT</div>
               </div>

               <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                  {/* Historical Baseline */}
                  <path d="M 0,80 L 10,82 L 20,78 L 30,70 L 40,65" fill="none" stroke="#111827" strokeWidth="2" strokeLinejoin="round" />
                  {/* Forecast Baseline */}
                  <path d="M 40,65 Q 60,50 100,45" fill="none" stroke="#111827" strokeWidth="2" strokeDasharray="3,3" strokeLinejoin="round" />
                  {/* 90th Percentile Risk */}
                  <path d="M 40,65 Q 60,40 100,20" fill="none" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="2,2" strokeLinejoin="round" />
                  
                  {/* Points */}
                  <circle cx="40" cy="65" r="3" fill="#111827" />
                  <circle cx="50" cy="57" r="3" fill="#2563EB" /> {/* Target selection point */}
               </svg>

               <div className="absolute left-[50%] top-[57%] transform -translate-x-1/2 -translate-y-1/2 mt-4">
                 <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">Target Exec: $29.80</span>
               </div>
               <div className="absolute right-0 top-[45%] transform translate-x-2">
                 <span className="text-[10px] font-bold text-gray-900 bg-white px-1">Base Exp: $31.80</span>
               </div>
               <div className="absolute right-0 top-[20%] transform translate-x-2">
                 <span className="text-[10px] font-bold text-red-600 bg-white px-1">Bull Risk: $39.20</span>
               </div>
             </div>

             {/* X Axis */}
             <div className="absolute left-10 right-0 bottom-0 h-6 flex justify-between items-end text-[9px] font-mono text-gray-400 font-bold pt-2">
               <span>-30 Days</span>
               <span>-15 Days</span>
               <span className="text-gray-900 ml-4">0</span>
               <span className="text-blue-600">+15 Days</span>
               <span className="text-blue-600">+30 Days</span>
               <span className="text-blue-600">+45 Days</span>
             </div>
          </div>

          <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-100 bg-gray-50/50 -mx-6 -mb-6 p-6 rounded-b-xl">
            <div>
              <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Avg Newcastle Wait</div>
              <div className="text-sm font-black text-gray-900">6.4 Days</div>
            </div>
            <div>
              <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Bunker VLSFO (SGP)</div>
              <div className="text-sm font-black text-gray-900">$612.50 / MT</div>
            </div>
            <div>
              <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Baltic Panamax Index</div>
              <div className="text-sm font-black text-gray-900">1,842 <span className="text-xs text-red-500">(+46 pts)</span></div>
            </div>
            <div>
              <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Sunda Ballast Vessels</div>
              <div className="text-sm font-black text-gray-900">3 Vessels <span className="text-xs text-green-600">Qualified</span></div>
            </div>
          </div>
        </motion.div>

        {/* Vessel Archetype Matching */}
        <motion.div variants={fadeUp} className="xl:col-span-4 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Vessel Archetype Matching</div>
              <h2 className="text-lg font-black text-gray-900 leading-tight">Panamax Class<br/>(75,000 DWT)</h2>
            </div>
            <span className="bg-blue-50 border border-blue-100 text-blue-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-center leading-tight">
              94%<br/>Compatibility
            </span>
          </div>
          
          <p className="text-[11px] text-gray-500 font-medium mb-6">Optimized for Paradip Berth 2 draft restrictions and cargo parcel size.</p>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between text-xs font-bold text-gray-900">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-400"/> Draft Clearance</div>
              <div className="font-mono font-semibold">13.8m / 15.0m max</div>
            </div>
            <div className="flex items-center justify-between text-xs font-bold text-gray-900">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-400"/> LOA & Beam</div>
              <div className="font-mono font-semibold">225m Compliant</div>
            </div>
            <div className="flex items-center justify-between text-xs font-bold text-gray-900">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-400"/> Crane Outreach</div>
              <div className="font-mono font-semibold">Hatch 1-7 Accessible</div>
            </div>
            <div className="flex items-center justify-between text-xs font-bold text-gray-900">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-400"/> Emissions Rating</div>
              <div className="font-mono font-semibold">CII Grade B</div>
            </div>
          </div>

          <div className="mt-auto bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-start gap-4">
            <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center shrink-0">
              <Ship className="w-5 h-5 text-gray-500"/>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900 mb-0.5">MV Kousan Maru <span className="text-[9px] font-normal text-gray-500 ml-1">(Demo)</span></div>
              <div className="text-[10px] text-gray-500 font-medium mb-1">Built 2019 • IMO 98231..</div>
              <div className="text-[10px] font-bold text-blue-700">Sunda Strait (ETA Newcastle Oct 28)</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contract Strategy Horizon Comparison */}
      <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h2 className="text-xl font-black text-gray-900 mb-1">Contract Strategy Horizon Comparison</h2>
            <p className="text-[11px] font-medium text-gray-500">Empirical evaluation of procurement instruments: Single Spot fixture vs Multi-Voyage short-term vs Long-Term COA.</p>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 hidden md:block">
            Simulation Baseline: 210,000 MT over 90 days
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Option 1: Spot */}
          <div 
            onClick={() => setSelectedStrategy(1)}
            className={`rounded-xl border-2 p-5 cursor-pointer transition-all ${selectedStrategy === 1 ? 'border-gray-900 bg-gray-50 shadow-md' : 'border-gray-100 hover:border-gray-300'}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Option 1: Spot Market</div>
              <div className="text-[10px] font-bold text-gray-900">0-15 Days</div>
            </div>
            <div className="flex items-end gap-1 mb-4">
              <div className="text-3xl font-black text-gray-900 leading-none">$32.40</div>
              <div className="text-[10px] font-bold text-gray-500 mb-1">/ MT</div>
            </div>
            <p className="text-[11px] text-gray-600 font-medium mb-6 h-10">Single-voyage open tender. Zero forward obligation with instantaneous dispatch.</p>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-2">
                <span className="text-gray-500">Waiting / Demurrage Est.</span>
                <span className="font-mono font-bold text-red-600">$4.20 / MT</span>
              </div>
              <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-2">
                <span className="text-gray-500">Risk Level</span>
                <span className="font-bold text-red-700 bg-red-50 px-1.5 rounded">High (Full Float)</span>
              </div>
              <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-2">
                <span className="text-gray-500">Supply Flexibility</span>
                <span className="font-bold text-gray-900">10 / 10 (Maximum)</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-2">
                <span className="text-gray-500">Berth Priority</span>
                <span className="font-bold text-red-600">None (Standard Queue)</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Decision Score</div>
                <div className="text-xl font-black text-gray-900">68 <span className="text-[10px] font-bold text-gray-400">/ 100</span></div>
              </div>
              <button className={`text-xs font-bold px-4 py-2 rounded-lg transition-colors ${selectedStrategy === 1 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}>
                Select Spot
              </button>
            </div>
          </div>

          {/* Option 2: Short-Term */}
          <div 
            onClick={() => setSelectedStrategy(2)}
            className={`rounded-xl border-2 p-5 cursor-pointer transition-all relative ${selectedStrategy === 2 ? 'border-gray-900 bg-white shadow-xl' : 'border-gray-200 hover:border-gray-300'}`}
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
              <Zap className="w-3 h-3 text-yellow-400"/> AI RECOMMENDED
            </div>
            <div className="flex justify-between items-start mb-4 mt-2">
              <div className="text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">Option 2: Short-Term</div>
              <div className="text-[10px] font-bold text-gray-900">1-3 Months (3 Voy.)</div>
            </div>
            <div className="flex items-end gap-1 mb-4">
              <div className="text-4xl font-black text-gray-900 leading-none">$29.80</div>
              <div className="text-[10px] font-bold text-gray-500 mb-1.5">/ MT</div>
            </div>
            <p className="text-[11px] text-gray-600 font-medium mb-6 h-10">Guaranteed 3-lift parcel sequence. Locks lowest overall freight while capping congestion exposure.</p>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-2">
                <span className="text-gray-500">Waiting / Demurrage Est.</span>
                <span className="font-mono font-bold text-gray-900">$2.10 / MT</span>
              </div>
              <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-2">
                <span className="text-gray-500">Risk Level</span>
                <span className="font-bold text-blue-700 bg-blue-50 px-1.5 rounded">Medium-Low</span>
              </div>
              <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-2">
                <span className="text-gray-500">Supply Flexibility</span>
                <span className="font-bold text-gray-900">8 / 10 (High)</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-2">
                <span className="text-gray-500">Berth Priority</span>
                <span className="font-bold text-gray-900">Slot-Locked (Berth 2)</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Decision Score</div>
                <div className="text-2xl font-black text-gray-900">92 <span className="text-[10px] font-bold text-gray-400">/ 100</span></div>
              </div>
              <button className={`text-xs font-bold px-4 py-2.5 rounded-lg transition-colors shadow-sm ${selectedStrategy === 2 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}>
                Execute 3-Voyage
              </button>
            </div>
          </div>

          {/* Option 3: Medium-Term */}
          <div 
            onClick={() => setSelectedStrategy(3)}
            className={`rounded-xl border-2 p-5 cursor-pointer transition-all ${selectedStrategy === 3 ? 'border-gray-900 bg-gray-50 shadow-md' : 'border-gray-100 hover:border-gray-300'}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Option 3: Medium-Term</div>
              <div className="text-[10px] font-bold text-gray-900">3-6 Months</div>
            </div>
            <div className="flex items-end gap-1 mb-4">
              <div className="text-3xl font-black text-gray-900 leading-none">$31.10</div>
              <div className="text-[10px] font-bold text-gray-500 mb-1">/ MT</div>
            </div>
            <p className="text-[11px] text-gray-600 font-medium mb-6 h-10">Quarterly index-linked or fixed contract with penal clauses for laycan deviations.</p>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-2">
                <span className="text-gray-500">Waiting / Demurrage Est.</span>
                <span className="font-mono font-bold text-gray-900">$1.80 / MT</span>
              </div>
              <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-2">
                <span className="text-gray-500">Risk Level</span>
                <span className="font-bold text-gray-900 bg-gray-200 px-1.5 rounded">Low (Rigid Terms)</span>
              </div>
              <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-2">
                <span className="text-gray-500">Supply Flexibility</span>
                <span className="font-bold text-red-600">4 / 10 (Restricted)</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-2">
                <span className="text-gray-500">Berth Priority</span>
                <span className="font-bold text-gray-900">Guaranteed Slot</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Decision Score</div>
                <div className="text-xl font-black text-gray-900">79 <span className="text-[10px] font-bold text-gray-400">/ 100</span></div>
              </div>
              <button className={`text-xs font-bold px-4 py-2 rounded-lg transition-colors ${selectedStrategy === 3 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}>
                Select Medium COA
              </button>
            </div>
          </div>

        </div>
        
        <div className="mt-4 flex justify-end">
          <button className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors flex items-center gap-1">
            <Info className="w-3 h-3"/> How is the score calculated?
          </button>
        </div>
      </motion.div>

      {/* Port Discharge Readiness & Timeline */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Readiness Card */}
        <motion.div variants={fadeUp} className="xl:col-span-8 bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col md:flex-row items-center gap-6 justify-between">
           <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 border border-gray-200 overflow-hidden relative">
                 {/* Abstract Port Visual */}
                 <div className="absolute bottom-0 w-full h-1/3 bg-blue-100"></div>
                 <div className="absolute bottom-1/3 left-2 w-2 h-8 bg-gray-400 rounded-t-sm"></div>
                 <div className="absolute bottom-1/3 right-4 w-3 h-10 bg-gray-500 rounded-t-sm"></div>
                 <div className="absolute bottom-1/3 left-6 w-1 h-12 bg-gray-300 rounded-t-sm"></div>
                 <Anchor className="w-5 h-5 text-gray-600 relative z-10 opacity-20"/>
              </div>
              <div>
                 <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-sm font-bold text-gray-900">Paradip Port Discharge Readiness</h2>
                    <span className="bg-blue-50 border border-blue-100 text-blue-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">Berth #2 Clear</span>
                 </div>
                 <p className="text-[11px] text-gray-500 font-medium max-w-lg leading-relaxed">
                    Mechanized conveyor system 4B cleared for 3,500 MT/hr discharge rate. Target laycan of Nov 10–15 fully synchronizes with steel plant blast furnace inventory replenishment threshold.
                 </p>
              </div>
           </div>
           
           <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 shrink-0 w-full md:w-auto">
              <div className="text-right">
                 <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Laycan Match</div>
                 <div className="text-xs font-bold text-gray-900">Nov 10 – Nov 14</div>
              </div>
              <button className="bg-gray-900 text-white text-[11px] font-bold px-4 py-2.5 rounded-lg shadow-sm hover:bg-gray-800 transition-colors">
                 View Berth Schedule
              </button>
           </div>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={fadeUp} className="xl:col-span-4 bg-gray-50 rounded-xl border border-gray-200 shadow-inner p-5 flex items-center">
           <div className="w-full relative flex justify-between items-center px-4">
              {/* Line */}
              <div className="absolute left-6 right-6 top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-200"></div>
              
              {/* Nodes */}
              <div className="relative z-10 flex flex-col items-center gap-2 group cursor-help">
                 <div className="w-3 h-3 rounded-full bg-gray-900 ring-4 ring-gray-50"></div>
                 <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest hidden md:block">Req</span>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-2 group cursor-help">
                 <div className="w-3 h-3 rounded-full bg-gray-900 ring-4 ring-gray-50"></div>
                 <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest hidden md:block">Match</span>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-2 group cursor-help">
                 <div className="w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-100 shadow-sm animate-pulse"></div>
                 <span className="text-[10px] font-bold text-gray-900 uppercase tracking-widest absolute -bottom-6 whitespace-nowrap bg-white px-2 py-0.5 rounded shadow-sm border border-gray-200">AI Rec</span>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-2 group cursor-help">
                 <div className="w-3 h-3 rounded-full bg-white border-2 border-gray-300 ring-4 ring-gray-50"></div>
                 <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest hidden md:block">Tender</span>
              </div>
           </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
