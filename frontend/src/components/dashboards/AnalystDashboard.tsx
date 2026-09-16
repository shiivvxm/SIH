import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, Sliders, Zap, Activity, Info, BarChart2, CheckCircle2, AlertTriangle, TrendingUp, Anchor, Wind } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function AnalystDashboard() {
  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6 pb-10 max-w-[1600px] mx-auto">
      
      {/* Top Header Module */}
      <motion.div variants={fadeUp} className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
        <div>
          <div className="text-[10px] font-bold tracking-widest uppercase bg-gray-900 text-white px-2 py-1 inline-block mb-3 rounded-sm">
            Econometric Forecasting & Multi-Variate Simulation
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-2">Freight Market Analytics<br/>& Forecasting</h1>
          <p className="text-sm text-gray-500 font-medium max-w-2xl leading-relaxed">
            Machine-learned freight rate projections, macro supply-chain indicators, and voyage sensitivity models powered by neural transformer ensembles.
          </p>
        </div>
        <div className="flex flex-col lg:items-end gap-3">
          <div className="flex items-center gap-3 text-xs font-mono font-semibold text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm">
            <Activity className="w-3 h-3" /> FreightIQ-Transformer v3.4 <span className="text-gray-300">|</span> R² 0.94
          </div>
          <div className="flex gap-2">
            <button className="bg-white border border-gray-200 text-gray-700 text-[11px] font-bold px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm hover:bg-gray-50 transition-colors uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5"/> 30-Day Outlook
            </button>
            <button className="bg-gray-900 text-white text-[11px] font-bold px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm hover:bg-gray-800 transition-colors uppercase tracking-widest">
              <Download className="w-3.5 h-3.5"/> EXPORT DATASET
            </button>
          </div>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <motion.div variants={fadeUp} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest w-24">30-Day Rate Forecast</div>
            <div className="bg-blue-50 text-blue-700 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">+14.2% Trend</div>
          </div>
          <div className="flex items-end gap-1.5 mb-5">
            <div className="text-[32px] font-black text-gray-900 leading-none">$37.80</div>
            <div className="text-xs font-bold text-gray-400 mb-1">/ MT</div>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest w-20 leading-tight">95% Confidence Band</div>
            <div className="text-xs font-mono font-bold text-gray-900">$35.20 - $40.10</div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={fadeUp} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest w-24">Cargo Demand Index</div>
            <div className="bg-blue-50 text-blue-700 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">BULLISH</div>
          </div>
          <div className="flex items-end gap-1.5 mb-5">
            <div className="text-[32px] font-black text-gray-900 leading-none">128.4</div>
            <div className="text-xs font-bold text-gray-400 mb-1">pts</div>
          </div>
          <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
            <TrendingUp className="w-3 h-3 text-gray-400" />
            <div className="text-[10px] font-semibold text-gray-600">+4.8% MoM (High Steel Mill Appetite)</div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={fadeUp} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest w-24">Market Volatility (BDI)</div>
            <div className="bg-red-50 text-red-700 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">ELEVATED</div>
          </div>
          <div className="flex items-end gap-1.5 mb-5">
            <div className="text-[32px] font-black text-gray-900 leading-none">64</div>
            <div className="text-xs font-bold text-gray-400 mb-1">/ 100</div>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <div className="text-[10px] font-semibold text-gray-600">Hist. 12-Mo Mean: <span className="font-mono font-bold text-gray-900">48</span></div>
            <div className="text-[10px] font-bold text-red-600">+16 pts Spike</div>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div variants={fadeUp} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest w-24">Predictive Accuracy</div>
            <div className="bg-gray-100 text-gray-600 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">BACKTESTED</div>
          </div>
          <div className="flex items-end gap-1.5 mb-5">
            <div className="text-[32px] font-black text-gray-900 leading-none">94.2%</div>
            <div className="text-xs font-bold text-gray-400 mb-1">fit</div>
          </div>
          <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
            <CheckCircle2 className="w-3 h-3 text-gray-400" />
            <div className="text-[10px] font-semibold text-gray-600">MAE: $0.82/MT across 140 voyages</div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: Main Chart & Scenario Matrix */}
        <div className="xl:col-span-8 space-y-6">
          
          {/* Main Chart Card */}
          <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Time-Series Econometric Projection</div>
                <h2 className="text-xl font-black text-gray-900 tracking-tight">Historical Spot vs AI Projected Outlook</h2>
              </div>
              <div className="flex bg-gray-100 rounded-lg p-1 border border-gray-200/60 shadow-inner">
                <button className="px-3 py-1.5 text-[10px] font-bold rounded-md text-gray-500 hover:text-gray-900 transition-colors">7D</button>
                <button className="px-3 py-1.5 text-[10px] font-bold rounded-md bg-gray-900 text-white shadow-sm">30D</button>
                <button className="px-3 py-1.5 text-[10px] font-bold rounded-md text-gray-500 hover:text-gray-900 transition-colors">60D</button>
                <button className="px-3 py-1.5 text-[10px] font-bold rounded-md text-gray-500 hover:text-gray-900 transition-colors">90D</button>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-8 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-gray-900"></div>
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Historical Spot (Past 90D)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-0 border-t-2 border-dashed border-blue-600"></div>
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Transformer Outlook (Median)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-50 border border-blue-100 rounded-sm"></div>
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">95% Confidence Band</span>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                <span className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">Current Spot: $32.40/MT</span>
              </div>
            </div>

            {/* SVG Graph Area */}
            <div className="relative w-full h-[320px] bg-white">
              {/* Y Axis */}
              <div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between text-[10px] font-mono text-gray-400 font-bold">
                <span>$44</span>
                <span>$38</span>
                <span>$32</span>
                <span>$26</span>
              </div>
              
              {/* X Axis */}
              <div className="absolute left-10 right-0 bottom-0 h-6 flex justify-between items-end text-[10px] font-mono text-gray-400 font-bold border-t border-gray-100 pt-2">
                <span>-90 Days</span>
                <span>-60 Days</span>
                <span>-30 Days</span>
                <span className="text-gray-900">NOW</span>
                <span className="text-blue-600">+30D Proj.</span>
                <span className="text-blue-600">+60D Proj.</span>
              </div>

              {/* Grid Lines */}
              <div className="absolute left-10 right-0 top-2 bottom-6 border-l border-gray-100 flex flex-col justify-between">
                <div className="border-t border-gray-100 w-full h-0"></div>
                <div className="border-t border-gray-100 w-full h-0"></div>
                <div className="border-t border-gray-100 w-full h-0"></div>
                <div className="w-full h-0"></div>
              </div>

              {/* Today Vertical Line */}
              <div className="absolute left-[50%] top-2 bottom-6 border-l border-gray-300 w-0">
                <div className="absolute -top-3 -left-[18px] bg-gray-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">TODAY</div>
              </div>

              {/* Data Lines (SVG) */}
              <svg className="absolute left-10 right-0 top-2 bottom-6 w-[calc(100%-40px)] h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                
                {/* Confidence Band (Polygon) */}
                <path d="M 50,70 L 75,55 L 100,45 L 100,20 L 75,30 L 50,70 Z" fill="#EFF6FF" stroke="#DBEAFE" strokeWidth="0.5" />
                
                {/* Historical Line */}
                <path d="M 0,90 L 12,85 L 25,88 L 37,78 L 50,70" fill="none" stroke="#111827" strokeWidth="2" strokeLinejoin="round" />
                
                {/* Projected Line */}
                <path d="M 50,70 L 75,42 L 100,32" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="2,2" strokeLinejoin="round" />
                
                {/* Markers */}
                <circle cx="50" cy="70" r="2" fill="#111827" />
                <circle cx="75" cy="42" r="2" fill="#2563EB" />
                <circle cx="100" cy="32" r="2" fill="#2563EB" />
              </svg>

              {/* Tooltip Overlays */}
              <div className="absolute left-[68%] top-[20%] bg-gray-900 text-white text-[10px] font-bold font-mono px-2 py-1 rounded shadow-lg pointer-events-none transform -translate-x-1/2">
                +30D: $37.80
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
              <div className="absolute left-[92%] top-[10%] bg-blue-100 text-blue-700 text-[10px] font-bold font-mono px-2 py-1 rounded border border-blue-200 pointer-events-none transform -translate-x-1/2">
                +60D: $41.20
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-center text-[10px] font-medium text-gray-400 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-1.5"><Activity className="w-3 h-3"/> Neural model trained on 2.4M AIS position pings, Baltic Exchange historicals, & commodity port throughputs.</div>
              <div>Updated 14 mins ago</div>
            </div>
          </motion.div>

          {/* Scenario Comparison Matrix */}
          <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Stress-Testing Analysis</div>
                <h2 className="text-xl font-black text-gray-900 tracking-tight">Scenario Comparison Matrix</h2>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-500 px-3 py-1.5 rounded-lg border border-gray-200">Route: Dampier → Paradip Port</div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-900">
                    <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Scenario Model</th>
                    <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Freight Rate / MT</th>
                    <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Net Voyage Cost</th>
                    <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Delay Factor</th>
                    <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Delta vs Baseline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {/* Baseline */}
                  <tr className="hover:bg-gray-50 transition-colors group">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-4 bg-gray-900 rounded-sm"></div>
                        <span className="text-xs font-bold text-gray-900">Baseline (Mean Forecast)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-xs font-mono font-semibold text-gray-900">$37.80</td>
                    <td className="py-4 px-4 text-xs font-mono font-semibold text-gray-900">$2,835,000</td>
                    <td className="py-4 px-4">
                      <span className="text-xs font-semibold text-gray-600 block">0.0 Days (On-time)</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded uppercase">0.0% (Ref)</span>
                    </td>
                  </tr>
                  
                  {/* High Bunker */}
                  <tr className="hover:bg-gray-50 transition-colors group">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-4 bg-blue-600 rounded-sm"></div>
                        <span className="text-xs font-bold text-gray-900">High Bunker Shock (+20% VLSFO)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-xs font-mono font-semibold text-gray-900">$41.65</td>
                    <td className="py-4 px-4 text-xs font-mono font-semibold text-gray-900">$3,123,750</td>
                    <td className="py-4 px-4">
                      <span className="text-xs font-semibold text-blue-700 block">+0.5 Days (Slow Steaming)</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded uppercase">+10.2% Cost</span>
                    </td>
                  </tr>

                  {/* Severe Port Congestion */}
                  <tr className="hover:bg-gray-50 transition-colors group">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-4 bg-red-600 rounded-sm"></div>
                        <span className="text-xs font-bold text-gray-900">Severe Port Congestion (+4.5d wait)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-xs font-mono font-semibold text-red-600">$44.90</td>
                    <td className="py-4 px-4 text-xs font-mono font-semibold text-gray-900">$3,367,500</td>
                    <td className="py-4 px-4">
                      <span className="text-xs font-semibold text-red-600 block">+4.5 Days (Demurrage)</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[10px] font-bold text-red-700 bg-red-50 border border-red-100 px-2 py-0.5 rounded uppercase">+18.8% Cost</span>
                    </td>
                  </tr>

                  {/* Optimal Ballast */}
                  <tr className="hover:bg-gray-50 transition-colors group">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-4 bg-green-500 rounded-sm"></div>
                        <span className="text-xs font-bold text-gray-900">Optimal Ballast Surplus (-8% Ton-Mile)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-xs font-mono font-semibold text-gray-900">$34.10</td>
                    <td className="py-4 px-4 text-xs font-mono font-semibold text-gray-900">$2,557,500</td>
                    <td className="py-4 px-4">
                      <span className="text-xs font-semibold text-green-600 block">-0.8 Days (Express)</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[10px] font-bold text-green-700 bg-green-50 border border-green-100 px-2 py-0.5 rounded uppercase">-9.8% Cost</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: What-If Engine & Macro Drivers */}
        <div className="xl:col-span-4 space-y-6">
          
          {/* What-If Engine */}
          <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-gray-900" />
                <h2 className="text-base font-black text-gray-900 tracking-tight">What-If Engine</h2>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-widest bg-gray-100 text-gray-500 px-2 py-0.5 rounded border border-gray-200">Stochastic</span>
            </div>
            
            <div className="p-5 space-y-5 flex-1">
              <p className="text-xs text-gray-500 font-medium leading-relaxed">Adjust macro variables to simulate voyage sensitivity & freight rate yield in real time.</p>
              
              {/* Target Shipping Route */}
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Target Shipping Route</label>
                <select className="w-full bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-900 rounded-lg px-3 py-2 outline-none">
                  <option>Australia (Hay Point) → India (Paradip)</option>
                  <option>USA (Corpus Christi) → EU (Rotterdam)</option>
                </select>
              </div>

              {/* Vessel Class & DWT */}
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Vessel Class & DWT</label>
                <div className="grid grid-cols-2 gap-2">
                  <button className="bg-gray-900 text-white text-xs font-bold py-1.5 rounded-lg shadow-sm">Panamax (75k)</button>
                  <button className="bg-gray-50 border border-gray-200 text-gray-600 text-xs font-bold py-1.5 rounded-lg hover:bg-gray-100 transition-colors">Capesize (180k)</button>
                </div>
              </div>

              {/* Fuel / Bunker Price */}
              <div>
                <div className="flex justify-between items-end mb-1">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest">Fuel / Bunker Price</label>
                  <span className="text-[10px] font-bold text-gray-900 bg-gray-100 px-1.5 py-0.5 rounded">+12% ($680/MT VLSFO)</span>
                </div>
                <input type="range" className="w-full accent-gray-900 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2" defaultValue="60" />
                <div className="flex justify-between text-[9px] font-bold text-gray-400 mt-1.5">
                  <span>-20% ($480)</span>
                  <span className="text-gray-900">Baseline ($605)</span>
                  <span>+40% ($850)</span>
                </div>
              </div>

              {/* Weather / Congestion Delay */}
              <div>
                <div className="flex justify-between items-end mb-1">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest">Weather / Congestion Delay</label>
                  <span className="text-[10px] font-bold text-gray-900 bg-gray-100 px-1.5 py-0.5 rounded">+1.5 Days (Moderate)</span>
                </div>
                <input type="range" className="w-full accent-gray-900 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2" defaultValue="35" />
                <div className="flex justify-between text-[9px] font-bold text-gray-400 mt-1.5">
                  <span>0.0d (Smooth)</span>
                  <span>+3.0d (Heavy)</span>
                  <span>+6.0d (Crisis)</span>
                </div>
              </div>

              {/* Global Bulk Demand Growth */}
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Global Bulk Demand Growth <span className="text-gray-900">+8.5% YoY</span></label>
                <div className="grid grid-cols-3 gap-2">
                  <button className="bg-gray-50 border border-gray-200 text-gray-600 text-[10px] font-bold py-1.5 rounded-md hover:bg-gray-100 transition-colors">-2.0%</button>
                  <button className="bg-gray-900 text-white text-[10px] font-bold py-1.5 rounded-md shadow-sm">+8.5%</button>
                  <button className="bg-gray-50 border border-gray-200 text-gray-600 text-[10px] font-bold py-1.5 rounded-md hover:bg-gray-100 transition-colors">+15.0%</button>
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-gray-100 bg-gray-50/50 rounded-b-xl">
              <button className="w-full py-3 bg-gray-900 text-white rounded-lg font-bold text-[11px] uppercase tracking-widest shadow-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 mb-5">
                <Zap className="w-3.5 h-3.5" /> RUN STOCHASTIC SIMULATION
              </button>
              
              <div className="bg-blue-50 border border-blue-100/60 rounded-xl p-5 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Simulated Outcome</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest bg-blue-100 text-blue-700 px-2 py-0.5 rounded border border-blue-200">Medium-High Risk</span>
                </div>
                <div className="flex justify-between items-end mb-4 border-b border-blue-100/60 pb-3">
                  <span className="text-xs font-semibold text-gray-600">Expected<br/>Net Rate</span>
                  <div className="text-right">
                    <div className="text-[28px] font-black text-gray-900 leading-none mb-1">$36.15</div>
                    <div className="text-[10px] font-bold text-gray-500">(+$3.75 impact)</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-gray-500 font-medium">Bunker Surcharge Exp.</span>
                    <span className="text-gray-900 font-mono font-bold">+$92,800</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-gray-500 font-medium">Voyage Carbon Index</span>
                    <span className="text-gray-900 font-mono font-bold text-right">CII Grade B <span className="block text-[9px] text-gray-400 font-sans mt-0.5">(14.2 g/t-nm)</span></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Macro Drivers & Radar */}
          <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center">
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Econometric Feed</div>
                <h2 className="text-base font-black text-gray-900 tracking-tight">Macro Drivers & Radar</h2>
              </div>
              <Activity className="w-5 h-5 text-gray-400" />
            </div>
            <div className="p-0 flex-1">
              <div className="divide-y divide-gray-100">
                {/* Driver 1 */}
                <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500">
                         <BarChart2 className="w-4 h-4" />
                      </div>
                      <div>
                         <div className="text-xs font-bold text-gray-900">China Crude Steel Output</div>
                         <div className="text-[10px] font-medium text-gray-500 mt-0.5">Crude steel daily run rate</div>
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="text-xs font-bold text-gray-900">+2.1%</div>
                      <div className="text-[10px] font-medium text-gray-500">Expansive</div>
                   </div>
                </div>
                {/* Driver 2 */}
                <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500">
                         <Anchor className="w-4 h-4" />
                      </div>
                      <div>
                         <div className="text-xs font-bold text-gray-900">Pilbara Iron Ore Berth Flow</div>
                         <div className="text-[10px] font-medium text-gray-500 mt-0.5">Port Hedland exports</div>
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="text-xs font-bold text-gray-900">STABLE</div>
                      <div className="text-[10px] font-mono font-medium text-gray-500 mt-0.5">13.8 Mt/wk</div>
                   </div>
                </div>
                {/* Driver 3 */}
                <div className="p-4 flex items-center justify-between hover:bg-red-50 transition-colors">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-500">
                         <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div>
                         <div className="text-xs font-bold text-gray-900">Chokepoint Congestion</div>
                         <div className="text-[10px] font-medium text-gray-500 mt-0.5">Malacca & Suez transits</div>
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="text-xs font-bold text-red-600 uppercase tracking-widest">CONGESTED</div>
                      <div className="text-[10px] font-mono font-bold text-red-500 mt-0.5">+2.2d Delay</div>
                   </div>
                </div>
                {/* Driver 4 */}
                <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500">
                         <Wind className="w-4 h-4" />
                      </div>
                      <div>
                         <div className="text-xs font-bold text-gray-900">Bay of Bengal Wind Index</div>
                         <div className="text-[10px] font-medium text-gray-500 mt-0.5">Paradip / Dhamra approach</div>
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="text-xs font-bold text-gray-900 uppercase tracking-widest">NORMAL</div>
                      <div className="text-[10px] font-medium text-gray-500 mt-0.5">Beaufort Scale 3</div>
                   </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-100 bg-gray-50/50 rounded-b-xl flex gap-2">
               <Info className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
               <p className="text-[10px] font-semibold text-gray-500 leading-relaxed">
                  Correlated with Baltic Exchange Capesize & Supramax Indices (BCI/BSI).
               </p>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
