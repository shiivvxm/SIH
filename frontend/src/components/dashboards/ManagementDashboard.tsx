import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, FileText, TrendingDown, PiggyBank, Briefcase, 
  CheckCircle2, Shield, AlertTriangle, ArrowRight, Activity, 
  Calendar, Zap, BarChart2, Anchor, Ship, Wind, Leaf, Target,
  FileSearch, ArrowUpRight
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.05 } }
};

export default function ManagementDashboard() {
  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6 pb-12 max-w-[1600px] mx-auto">
      
      {/* Top Header Module */}
      <motion.div variants={fadeUp} className="flex flex-col xl:flex-row xl:items-start justify-between gap-4 mb-2">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold tracking-widest uppercase bg-blue-50 border border-blue-100 text-blue-700 px-2 py-0.5 rounded-sm">
              EXECUTIVE PERFORMANCE, ROI & AUDIT GOVERNANCE
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
              • Ministry Oversight
            </span>
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">Executive Governance & Logistics ROI</h1>
          <p className="text-xs text-gray-500 font-medium max-w-2xl">
            Fiscal overview, cumulative chartering savings, demurrage mitigation, operational efficiency and enterprise decision governance.
          </p>
        </div>
        
        <div className="flex flex-col items-end gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm text-xs font-bold text-gray-700 uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5 text-gray-400" aria-hidden="true" />
              FY 2026-27 (YTD)
            </div>
            <button className="bg-white border border-gray-200 text-gray-700 text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Download className="w-3.5 h-3.5" aria-hidden="true"/> Download Board Report
            </button>
          </div>
          <button className="bg-gray-900 text-white border border-gray-900 text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg shadow-sm hover:bg-gray-800 transition-colors flex items-center gap-2">
            <FileText className="w-3.5 h-3.5" aria-hidden="true"/> Export Audit Trail (CSV)
          </button>
        </div>
      </motion.div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        
        <motion.div variants={fadeUp} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest w-24 leading-tight">Total Logistics Spend</div>
            <div className="p-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-400"><Briefcase className="w-4 h-4"/></div>
          </div>
          <div className="mb-4">
            <div className="text-3xl font-black text-gray-900 leading-none mb-1">₹48.2 Cr</div>
            <div className="text-[10px] font-semibold text-gray-500">1.84M MT Cargo Shipped</div>
          </div>
          <div className="pt-3 border-t border-gray-100 flex items-center">
             <span className="bg-blue-50 text-blue-700 text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded border border-blue-100 mr-2">↓ 8.4% vs Budget</span>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest w-24 leading-tight">AI-Driven Cost Savings</div>
            <div className="p-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-400"><Zap className="w-4 h-4"/></div>
          </div>
          <div className="mb-4">
            <div className="text-3xl font-black text-gray-900 leading-none mb-1">₹4.12 Cr</div>
            <div className="text-[10px] font-semibold text-gray-500">Validated procurement savings</div>
          </div>
          <div className="pt-3 border-t border-gray-100 flex items-center">
             <span className="bg-green-50 text-green-700 text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded border border-green-100 mr-2">+18.6% ROI</span>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest w-24 leading-tight">Demurrage Saved</div>
            <div className="p-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-400"><TrendingDown className="w-4 h-4"/></div>
          </div>
          <div className="mb-4">
            <div className="text-3xl font-black text-gray-900 leading-none mb-1">₹8.9 Cr</div>
            <div className="text-[10px] font-semibold text-gray-500">34.2 vessel-days avoided</div>
          </div>
          <div className="pt-3 border-t border-gray-100 flex items-center">
             <span className="bg-green-50 text-green-700 text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded border border-green-100 mr-2">↓ 41.2% YoY</span>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest w-24 leading-tight">Governance & Policy Adherence</div>
            <div className="p-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-400"><Shield className="w-4 h-4"/></div>
          </div>
          <div className="mb-4 relative z-10">
            <div className="text-3xl font-black text-gray-900 leading-none mb-1">98.4%</div>
            <div className="text-[10px] font-semibold text-gray-500">48 / 49 chartering actions clear</div>
          </div>
          <div className="pt-3 border-t border-gray-100 flex items-center relative z-10">
             <span className="bg-amber-50 text-amber-700 text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded border border-amber-100 mr-2">1 Under Review</span>
          </div>
        </motion.div>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN */}
        <div className="xl:col-span-8 space-y-6">
          
          {/* Cumulative Spend vs Benchmark */}
          <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Fiscal Procurement Dynamics</div>
                <h2 className="text-xl font-black text-gray-900 tracking-tight">Cumulative Spend vs. Unoptimized Benchmark</h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-gray-900"></div><span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Actual Spend (₹48.2 Cr)</span></div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-gray-400 border border-dashed"></div><span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Spot Baseline (₹52.3 Cr)</span></div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="relative w-full h-[280px] mb-6">
               {/* Y Axis */}
               <div className="absolute left-0 top-0 bottom-8 w-10 flex flex-col justify-between text-[9px] font-mono text-gray-400 font-bold">
                 <span>₹60 Cr</span>
                 <span>₹40 Cr</span>
                 <span>₹20 Cr</span>
                 <span>₹0 Cr</span>
               </div>
               
               {/* Grid */}
               <div className="absolute left-10 right-0 top-2 bottom-8 border-l border-b border-gray-200 flex flex-col justify-between">
                 <div className="border-t border-gray-100 w-full h-0"></div>
                 <div className="border-t border-gray-100 w-full h-0"></div>
                 <div className="border-t border-gray-100 w-full h-0"></div>
                 <div className="w-full h-0"></div>
               </div>

               {/* SVG Graph */}
               <svg className="absolute left-10 right-0 top-2 bottom-8 w-[calc(100%-40px)] h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                  {/* Fill Polygon for savings difference */}
                  <path d="M 0,90 L 33,65 L 66,45 L 100,20 L 100,35 L 66,55 L 33,70 L 0,90 Z" fill="#EFF6FF" stroke="none" opacity="0.6"/>
                  
                  {/* Unoptimized Baseline Line */}
                  <path d="M 0,90 L 33,65 L 66,45 L 100,20" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="3,3" strokeLinejoin="round" />
                  
                  {/* Actual Spend Line */}
                  <path d="M 0,90 L 33,70 L 66,55 L 100,35" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinejoin="round" />
                  
                  {/* Points */}
                  <circle cx="33" cy="70" r="3" fill="#111827" />
                  <circle cx="66" cy="55" r="3" fill="#111827" />
                  <circle cx="100" cy="35" r="3" fill="#111827" />
               </svg>

               {/* Annotations */}
               <div className="absolute right-0 top-[22%] transform -translate-y-1/2">
                 <div className="bg-gray-900 text-white text-[9px] font-bold px-2 py-1 rounded shadow-md flex items-center gap-1">
                   <Zap className="w-2.5 h-2.5 text-yellow-400"/> ₹4.12 Cr SAVINGS
                 </div>
               </div>

               {/* X Axis */}
               <div className="absolute left-10 right-0 bottom-0 h-6 flex justify-between items-end text-[9px] font-mono text-gray-500 font-bold pt-2 px-2">
                 <span className="text-center">Q1 Fiscal<br/><span className="font-normal text-gray-400">(₹11.2 Cr act)</span></span>
                 <span className="text-center transform -translate-x-4">Q2 Fiscal<br/><span className="font-normal text-gray-400">(₹23.4 Cr act)</span></span>
                 <span className="text-center transform -translate-x-6">Q3 Fiscal<br/><span className="font-normal text-gray-400">(₹35.8 Cr act)</span></span>
                 <span className="text-center text-gray-900">Q4 Projected<br/><span className="font-normal text-gray-500">(₹48.2 Cr act)</span></span>
               </div>
            </div>
            
            <p className="sr-only">Line chart showing actual cumulative spend consistently tracking below the unoptimized baseline, resulting in 4.12 Crores in total savings by Q4.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-100">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Charter Spot Avoidance</div>
                <div className="text-lg font-black text-gray-900 mb-0.5">₹2.84 Cr</div>
                <div className="text-[10px] font-medium text-gray-500">Brought through better contract timing</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Bunker / Fuel Optimization</div>
                <div className="text-lg font-black text-gray-900 mb-0.5">₹1.28 Cr</div>
                <div className="text-[10px] font-medium text-gray-500">Through route and fuel optimization</div>
              </div>
              <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-100/50">
                <div className="text-[9px] font-bold text-blue-700 uppercase tracking-widest mb-1">Direct Net ROI</div>
                <div className="text-lg font-black text-blue-900 mb-0.5">14.8x</div>
                <div className="text-[10px] font-medium text-blue-600/70">Software + operational impact</div>
              </div>
            </div>
          </motion.div>

          {/* Voyage Efficiency & Cargo Throughput */}
          <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Discharge & Berth Performance</div>
                <h2 className="text-xl font-black text-gray-900 tracking-tight">Voyage Efficiency & Cargo Throughput</h2>
              </div>
              <div className="bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-blue-100">
                Target: 92% SLA
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest w-20 leading-tight">Vessel Utilization</div>
                  <div className="p-1.5 rounded-lg bg-gray-50 text-gray-400"><Ship className="w-4 h-4"/></div>
                </div>
                <div className="text-3xl font-black text-gray-900 mb-3">94.6%</div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3"><div className="h-full bg-gray-900 w-[94.6%]"></div></div>
                <div className="text-[10px] font-semibold text-gray-500">+3.2% vs baseline average</div>
              </div>

              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest w-20 leading-tight">Berth Dwell Time</div>
                  <div className="p-1.5 rounded-lg bg-gray-50 text-gray-400"><Anchor className="w-4 h-4"/></div>
                </div>
                <div className="text-3xl font-black text-gray-900 mb-3">38.4 hrs</div>
                <div className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-1 rounded border border-green-100 w-fit mt-5">
                  ↓ 22% average reduction
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest w-24 leading-tight">Raw Material Delivery SLA</div>
                  <div className="p-1.5 rounded-lg bg-gray-50 text-gray-400"><CheckCircle2 className="w-4 h-4"/></div>
                </div>
                <div className="text-3xl font-black text-gray-900 mb-3">99.1%</div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3"><div className="h-full bg-gray-900 w-[99.1%]"></div></div>
                <div className="text-[10px] font-semibold text-gray-500">Zero plant stockout events</div>
              </div>
            </div>

            {/* Priority Steel Hubs */}
            <div className="pt-5 border-t border-gray-100">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Priority Steel Hubs Turnaround Index</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs font-bold text-gray-900 mb-1">Paradip Hub</div>
                  <div className="text-[10px] font-medium text-gray-500 mb-1.5">1.4 days avg berth</div>
                  <div className="text-[10px] font-bold text-green-600">98.2% on-schedule</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs font-bold text-gray-900 mb-1">Visakhapatnam</div>
                  <div className="text-[10px] font-medium text-gray-500 mb-1.5">1.8 days avg berth</div>
                  <div className="text-[10px] font-bold text-green-600">95.4% on-schedule</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs font-bold text-gray-900 mb-1">Haldia Port</div>
                  <div className="text-[10px] font-medium text-gray-500 mb-1.5">2.1 days avg berth</div>
                  <div className="text-[10px] font-bold text-amber-600">91.8% on-schedule</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs font-bold text-gray-900 mb-1">Mormugao Bulk</div>
                  <div className="text-[10px] font-medium text-gray-500 mb-1.5">1.2 days avg berth</div>
                  <div className="text-[10px] font-bold text-green-600">99.0% on-schedule</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Executive Insights */}
            <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-base font-black text-gray-900 flex items-center gap-2"><Zap className="w-4 h-4 text-blue-600"/> Executive Insights</h2>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                   <p className="text-[11px] text-gray-600 leading-relaxed font-medium"><span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-0.5">AI-Generated Insight</span> Short-term contracting generated the highest projected procurement savings during the current freight cycle.</p>
                </div>
                <div className="flex gap-3 items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                   <p className="text-[11px] text-gray-600 leading-relaxed font-medium"><span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-0.5">AI-Generated Insight</span> Paradip congestion remains the primary source of avoidable demurrage.</p>
                </div>
                <div className="flex gap-3 items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                   <p className="text-[11px] text-gray-600 leading-relaxed font-medium"><span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-0.5">AI-Generated Insight</span> FreightIQ's decision-support workflow improved chartering efficiency against the unoptimized benchmark.</p>
                </div>
              </div>
            </motion.div>

            {/* Governance Score */}
            <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
               <div className="flex justify-between items-center mb-5">
                 <h2 className="text-base font-black text-gray-900 flex items-center gap-2"><Shield className="w-4 h-4 text-gray-600"/> Governance Score</h2>
                 <span className="bg-green-50 text-green-700 border border-green-100 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3"/> HEALTHY
                 </span>
               </div>
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                     <span className="font-semibold text-gray-600">Policy Adherence</span>
                     <span className="font-mono font-bold text-gray-900">98.4%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                     <span className="font-semibold text-gray-600">Auditable Decisions</span>
                     <span className="font-mono font-bold text-gray-900">100%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                     <span className="font-semibold text-gray-600">Approval Coverage</span>
                     <span className="font-mono font-bold text-gray-900">96.8%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pt-4 border-t border-gray-100">
                     <span className="font-semibold text-gray-600">Exceptions Under Review</span>
                     <span className="font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">1</span>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="xl:col-span-4 space-y-6">
          
          {/* Decision Audit Trail */}
          <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center">
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Traceability & Oversight</div>
                <h2 className="text-base font-black text-gray-900 tracking-tight">Decision Audit Trail</h2>
              </div>
              <div className="text-[9px] font-bold text-blue-600 uppercase tracking-widest flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div> Live Feed</div>
            </div>
            
            <div className="p-0 flex-1 overflow-y-auto">
              <div className="divide-y divide-gray-100">
                {/* Audit 1 */}
                <div className="p-5 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xs font-bold text-gray-900">Contract Approved (3-Voyage COA)</h4>
                    <span className="text-[9px] font-bold text-gray-400">Oct 12, 11:28 IST</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] mb-3">
                    <span className="text-gray-600">User: <strong className="text-gray-900">D. Chen (Chartering Mgr)</strong></span>
                    <span className="font-mono text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">Req: MO-2026-88</span>
                  </div>
                  <div className="bg-green-50/50 border border-green-100 rounded-md px-3 py-2 text-[10px] flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-green-600 shrink-0"/>
                    <span className="text-gray-600">Policy Check: <strong className="text-green-700">Passed (Automated Pre-clearance)</strong></span>
                  </div>
                </div>

                {/* Audit 2 */}
                <div className="p-5 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xs font-bold text-gray-900">Model Recalibration</h4>
                    <span className="text-[9px] font-bold text-gray-400">Oct 11, 16:45 IST</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] mb-3">
                    <span className="text-gray-600">User: <strong className="text-gray-900">System (Transformer-v3.4)</strong></span>
                    <span className="font-mono text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">Target: Paradip Draft</span>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-[10px] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gray-500 shrink-0"/>
                    <span className="text-gray-600">Status: <strong className="text-gray-800">Verified by Lead Hydrographer</strong></span>
                  </div>
                </div>

                {/* Audit 3 */}
                <div className="p-5 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xs font-bold text-gray-900">Spot Override Flag</h4>
                    <span className="text-[9px] font-bold text-gray-400">Oct 10, 09:15 IST</span>
                  </div>
                  <div className="flex justify-between items-start text-[11px] mb-3">
                    <span className="text-gray-600">User: <strong className="text-gray-900">A. Sharma (Ops Lead)</strong></span>
                    <span className="text-gray-500 text-right">Reason: <br/><strong className="text-gray-900">Emergency Procurement</strong></span>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-md px-3 py-2 text-[10px] flex items-center gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0"/>
                    <span className="text-gray-600">Status: <strong className="text-amber-700">Executive Sign-off Required</strong></span>
                  </div>
                </div>

                {/* Audit 4 */}
                <div className="p-5 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xs font-bold text-gray-900">Berth Pre-Allocation Finalized</h4>
                    <span className="text-[9px] font-bold text-gray-400">Oct 09, 14:02 IST</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] mb-3">
                    <span className="text-gray-600">Vessel: <strong className="text-gray-900">Demo Panamax Vessel</strong></span>
                    <span className="font-mono text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">Port: Visakhapatnam</span>
                  </div>
                  <div className="bg-blue-50/50 border border-blue-100 rounded-md px-3 py-2 text-[10px] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0"/>
                    <span className="text-gray-600">Demurrage Prevention: <strong className="text-blue-700">Estimated ₹44,000 saved</strong></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50/50 rounded-b-xl flex justify-between items-center">
              <span className="text-[10px] font-medium text-gray-500">Showing latest 4 of 328 recorded events</span>
              <button className="text-[10px] font-bold text-gray-900 uppercase tracking-widest hover:text-blue-600 transition-colors flex items-center gap-1">
                View Complete Ledger <ArrowRight className="w-3 h-3"/>
              </button>
            </div>
          </motion.div>

          {/* Fleet Carbon Intensity */}
          <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
             <div className="flex justify-between items-start mb-4">
               <div>
                 <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">IMO 2024 / CII Compliance</div>
                 <h2 className="text-base font-black text-gray-900 tracking-tight">Fleet Carbon Intensity Rating</h2>
               </div>
               <span className="bg-gray-100 border border-gray-200 text-gray-600 px-2 py-1 rounded text-[9px] font-bold uppercase tracking-widest flex flex-col items-center">
                 Class B
                 <span className="text-[8px] text-gray-500">(Exceeding Goal)</span>
               </span>
             </div>
             
             <p className="text-[11px] text-gray-500 font-medium mb-6">Automated speed profiling & weather routing has mitigated charter carbon tax penalties across all dedicated routes.</p>
             
             <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl font-black text-gray-900">-12.4%</div>
                  <div className="text-[10px] text-gray-500 font-medium max-w-[140px] mt-1">CO₂ emissions per cargo MT-NM</div>
                </div>
                <div className="flex gap-1.5">
                   <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-[10px] font-bold">A</div>
                   <div className="w-6 h-6 rounded-full bg-gray-900 text-white shadow-md flex items-center justify-center text-[10px] font-bold">B</div>
                   <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-[10px] font-bold">C</div>
                   <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-[10px] font-bold">D</div>
                </div>
             </div>

             <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 pt-4 border-t border-gray-100">
                <span>Next Ministry Environmental Audit: Nov 15</span>
                <span>Status: <strong className="text-gray-900">Pre-Certified</strong></span>
             </div>
          </motion.div>

          {/* Operational Asset Readiness */}
          <motion.div variants={fadeUp} className="bg-gray-900 rounded-xl shadow-lg p-5 flex items-center gap-4 relative overflow-hidden border border-gray-800">
             <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <Ship className="w-32 h-32 text-white transform translate-x-4 translate-y-4" />
             </div>
             <div className="relative z-10 w-full">
                <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">Operational Asset Readiness</div>
                <h3 className="text-sm font-bold text-white mb-1.5">14 Capesize & Panamax Under Active Charter</h3>
                <p className="text-[11px] text-gray-400 font-medium">Average fleet turn around index 18% faster than benchmark.</p>
             </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Business Impact Bottom Card */}
      <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
         <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">FreightIQ Business Impact</div>
         <h2 className="text-xl font-black text-gray-900 tracking-tight mb-8">FreightIQ converts maritime market intelligence into measurable procurement and operational value.</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
               <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3"><TrendingDown className="w-5 h-5"/></div>
               <h4 className="text-xs font-bold text-gray-900 mb-1">COST</h4>
               <p className="text-[10px] text-gray-500 leading-relaxed">Reduced procurement and demurrage costs</p>
            </div>
            <div>
               <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-3"><Activity className="w-5 h-5"/></div>
               <h4 className="text-xs font-bold text-gray-900 mb-1">TIME</h4>
               <p className="text-[10px] text-gray-500 leading-relaxed">Reduced vessel waiting and berth delays</p>
            </div>
            <div>
               <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-3"><Shield className="w-5 h-5"/></div>
               <h4 className="text-xs font-bold text-gray-900 mb-1">RISK</h4>
               <p className="text-[10px] text-gray-500 leading-relaxed">Improved forecasting and operational risk visibility</p>
            </div>
            <div>
               <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-3"><Anchor className="w-5 h-5"/></div>
               <h4 className="text-xs font-bold text-gray-900 mb-1">RELIABILITY</h4>
               <p className="text-[10px] text-gray-500 leading-relaxed">Improved cargo delivery and procurement planning</p>
            </div>
         </div>
         <div className="mt-8 pt-4 border-t border-gray-100 text-[9px] font-bold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <Shield className="w-3 h-3"/> Designed with DPDP privacy principles and GIGW 3.0 accessibility guidelines.
         </div>
      </motion.div>

    </motion.div>
  );
}
