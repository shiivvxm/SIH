import React from 'react';
import { motion } from 'framer-motion';
import { 
  Ship, Anchor, AlertTriangle, Clock, Navigation, Wind, Activity, 
  Globe, Map, CheckCircle2, ShieldAlert, BarChart2, Info, ArrowUpRight,
  Filter, Search, RefreshCw, FileText
} from 'lucide-react';
import GlobeAnalytics from '../GlobeAnalytics';

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.05 } }
};

export default function OperationsDashboard() {
  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6 pb-12 max-w-[1600px] mx-auto">
      
      {/* Top Header Module */}
      <motion.div variants={fadeUp} className="flex flex-col xl:flex-row xl:items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold tracking-widest uppercase bg-blue-50 border border-blue-100 text-blue-700 px-2 py-0.5 rounded-sm">
              OPS-03
            </span>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight leading-none">Operations Command Center</h1>
          </div>
          <p className="text-xs text-gray-500 font-medium">
            Real-time visibility into vessels, ports, berths and operational risks.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-3 py-1.5 rounded-lg shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Live AIS Feed</span>
          </div>
          
          <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm">
            <Search className="w-3.5 h-3.5 text-gray-400" aria-hidden="true" />
            <input 
              type="text" 
              placeholder="Search vessel IMO..." 
              className="text-xs font-medium text-gray-700 outline-none w-32 placeholder:text-gray-400"
              aria-label="Search vessel IMO"
            />
          </div>
          
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg shadow-sm hover:bg-gray-50 transition-colors" aria-label="Filter results">
            <Filter className="w-3.5 h-3.5" aria-hidden="true"/>
            <span className="text-[10px] font-bold uppercase tracking-widest">Filter</span>
          </button>
          
          <button className="flex items-center gap-2 bg-gray-900 border border-gray-900 text-white px-4 py-1.5 rounded-lg shadow-sm hover:bg-gray-800 transition-colors" aria-label="Refresh data">
            <RefreshCw className="w-3.5 h-3.5" aria-hidden="true"/>
            <span className="text-[10px] font-bold uppercase tracking-widest">Refresh</span>
          </button>
        </div>
      </motion.div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {[
          { label: "Total Vessels", val: "128", sub: "+8% vs. Q2", icon: <Globe className="w-4 h-4"/>, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Vessels at Sea", val: "86", sub: "In Transit", icon: <Navigation className="w-4 h-4"/>, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Vessels in Port", val: "42", sub: "Berthed/Anchored", icon: <Anchor className="w-4 h-4"/>, color: "text-green-600", bg: "bg-green-50" },
          { label: "Vessels at Risk", val: "11", sub: "Weather/Delays", icon: <AlertTriangle className="w-4 h-4"/>, color: "text-red-600", bg: "bg-red-50" },
          { label: "Avg Port Wait", val: "18.4h", sub: "Paradip / Vizag", icon: <Clock className="w-4 h-4"/>, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Berth Availability", val: "76%", sub: "East Coast Ports", icon: <CheckCircle2 className="w-4 h-4"/>, color: "text-green-600", bg: "bg-green-50" },
        ].map((kpi, i) => (
          <motion.div key={i} variants={fadeUp} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest w-24 leading-tight">{kpi.label}</div>
              <div className={`p-1.5 rounded-lg ${kpi.bg} ${kpi.color}`} aria-hidden="true">{kpi.icon}</div>
            </div>
            <div>
              <div className="text-2xl font-black text-gray-900 leading-none mb-1">{kpi.val}</div>
              <div className="text-[10px] font-semibold text-gray-500 truncate">{kpi.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fleet Status Distribution */}
      <motion.div variants={fadeUp} className="bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-sm flex flex-wrap items-center gap-4 xl:gap-8">
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest shrink-0">Fleet Status Distribution:</div>
        <div className="flex-1 flex flex-wrap gap-2 text-[10px] font-bold tracking-widest uppercase">
          <div className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-md flex items-center gap-2 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> At Sea <span className="bg-white px-1.5 rounded text-blue-900 ml-1">86</span>
          </div>
          <div className="bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-md flex items-center gap-2 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> In Port <span className="bg-white px-1.5 rounded text-green-900 ml-1">42</span>
          </div>
          <div className="bg-amber-50 text-amber-700 border border-amber-100 px-3 py-1 rounded-md flex items-center gap-2 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Anchored <span className="bg-white px-1.5 rounded text-amber-900 ml-1">8</span>
          </div>
          <div className="bg-red-50 text-red-700 border border-red-100 px-3 py-1 rounded-md flex items-center gap-2 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Delayed / Risk <span className="bg-white px-1.5 rounded text-red-900 ml-1">11</span>
          </div>
        </div>
      </motion.div>

      {/* Map & Port Congestion */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Live Maritime AIS Radar */}
        <motion.div variants={fadeUp} className="xl:col-span-8 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <div className="flex items-center gap-2">
              <Map className="w-4 h-4 text-gray-500" aria-hidden="true"/>
              <h2 className="text-sm font-bold text-gray-900 tracking-tight">Live Maritime AIS Radar — Bay of Bengal</h2>
            </div>
            <div className="flex bg-white rounded-md p-0.5 border border-gray-200 shadow-sm">
              <button className="px-3 py-1 text-[9px] font-bold rounded bg-gray-900 text-white">ALL</button>
              <button className="px-3 py-1 text-[9px] font-bold rounded text-gray-500 hover:text-gray-900">IN TRANSIT</button>
              <button className="px-3 py-1 text-[9px] font-bold rounded text-red-600 hover:text-red-700">AT RISK</button>
            </div>
          </div>
          <div className="relative w-full h-[400px] bg-[#0F172A] flex items-center justify-center overflow-hidden">
             {/* 3D Globe representation for AIS tracking */}
             <GlobeAnalytics className="w-[120%] h-[120%] opacity-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" speed={0.001} />
             <div className="absolute bottom-4 left-4 text-[10px] font-mono font-bold text-white/50">
                COORD: LAT 19°22'N • LON 86°40'E
             </div>
             <div className="absolute top-4 right-4 bg-white/10 backdrop-blur border border-white/20 p-3 rounded-lg text-white max-w-[200px]">
                <div className="text-[9px] font-bold uppercase tracking-widest text-green-400 mb-1">Vessel Selected</div>
                <div className="text-sm font-black mb-0.5">MV Ocean Star</div>
                <div className="text-[10px] font-medium text-white/70">ETA Paradip: 22 May 14:00</div>
             </div>
          </div>
        </motion.div>

        {/* Port Congestion & Queue Radar */}
        <motion.div variants={fadeUp} className="xl:col-span-4 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-gray-900">Port Congestion Radar</h2>
              <div className="text-[10px] font-medium text-gray-500 mt-0.5">East Coast Terminals</div>
            </div>
            <span className="bg-amber-100 text-amber-800 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border border-amber-200">Alert State</span>
          </div>
          <div className="p-0 overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse min-w-[300px]" aria-label="Port Congestion Data">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100">
                  <th className="py-2.5 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Port</th>
                  <th className="py-2.5 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Status</th>
                  <th className="py-2.5 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Queue</th>
                  <th className="py-2.5 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Avg Wait</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="text-xs font-bold text-gray-900">Paradip (PPT)</div>
                    <div className="text-[9px] font-medium text-gray-500 mt-0.5">Iron/Coal Berth</div>
                  </td>
                  <td className="py-3 px-4"><span className="bg-amber-50 text-amber-700 border border-amber-200 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase" aria-label="Status High">High</span></td>
                  <td className="py-3 px-4 text-xs font-mono font-semibold text-gray-900">12</td>
                  <td className="py-3 px-4 text-xs font-mono font-semibold text-gray-900">4.2d</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="text-xs font-bold text-gray-900">Dhamra (DPCL)</div>
                    <div className="text-[9px] font-medium text-gray-500 mt-0.5">Deep Draft Tml</div>
                  </td>
                  <td className="py-3 px-4"><span className="bg-blue-50 text-blue-700 border border-blue-200 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase" aria-label="Status Medium">Medium</span></td>
                  <td className="py-3 px-4 text-xs font-mono font-semibold text-gray-900">6</td>
                  <td className="py-3 px-4 text-xs font-mono font-semibold text-gray-900">2.1d</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="text-xs font-bold text-gray-900">Visakhapatnam</div>
                    <div className="text-[9px] font-medium text-gray-500 mt-0.5">Outer Harbor</div>
                  </td>
                  <td className="py-3 px-4"><span className="bg-green-50 text-green-700 border border-green-200 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase" aria-label="Status Low">Low</span></td>
                  <td className="py-3 px-4 text-xs font-mono font-semibold text-gray-900">2</td>
                  <td className="py-3 px-4 text-xs font-mono font-semibold text-gray-900">0.8d</td>
                </tr>
                <tr className="hover:bg-red-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="text-xs font-bold text-gray-900">Haldia Dock</div>
                    <div className="text-[9px] font-medium text-gray-500 mt-0.5">Riverine Tml</div>
                  </td>
                  <td className="py-3 px-4"><span className="bg-red-50 text-red-700 border border-red-200 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase" aria-label="Status Critical">Critical</span></td>
                  <td className="py-3 px-4 text-xs font-mono font-semibold text-red-600">9</td>
                  <td className="py-3 px-4 text-xs font-mono font-semibold text-red-600">5.1d</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>

      {/* Berth Schedule & Timelines */}
      <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" aria-hidden="true" />
            <h2 className="text-sm font-bold text-gray-900">Berth Schedule & Wait Timelines</h2>
          </div>
          <button className="text-[10px] font-bold text-blue-600 uppercase tracking-widest hover:text-blue-800 transition-colors">View Full Roster</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]" aria-label="Berth Schedule">
            <thead>
              <tr className="bg-gray-50/80 border-b border-gray-100">
                <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Vessel Name</th>
                <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Designated Berth</th>
                <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Arrival Time</th>
                <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Berth Time</th>
                <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Wait Duration</th>
                <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Status</th>
                <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Cargo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { v: 'MV Ocean Star', b: 'Paradip Berth #2', arr: '22 May 14:00', brt: '22 May 19:00', wait: '5h 00m', stat: 'ON TIME', sc: 'bg-green-50 text-green-700', cargo: 'Coking Coal (75k MT)' },
                { v: 'MV Steel Carrier', b: 'Haldia Berth #6', arr: '23 May 10:30', brt: '25 May 18:30', wait: '56h 00m', stat: 'DELAYED', sc: 'bg-red-50 text-red-700', cargo: 'Iron Ore (120k MT)' },
                { v: 'MV Horizon', b: 'Vizag Berth #7', arr: '23 May 16:50', brt: '24 May 00:00', wait: '7h 10m', stat: 'WARNING', sc: 'bg-amber-50 text-amber-700', cargo: 'PCI Coal (60k MT)' },
                { v: 'MV Eastern Glory', b: 'Dhamra Mech.', arr: '24 May 04:00', stat: 'ARRIVED', brt: '24 May 09:30', wait: '5h 30m', sc: 'bg-blue-50 text-blue-700', cargo: 'Limestone (50k MT)' }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-xs font-bold text-gray-900">{row.v}</td>
                  <td className="py-3 px-4 text-xs font-medium text-gray-600">{row.b}</td>
                  <td className="py-3 px-4 text-xs font-mono font-medium text-gray-900">{row.arr}</td>
                  <td className="py-3 px-4 text-xs font-mono font-medium text-gray-900">{row.brt}</td>
                  <td className="py-3 px-4 text-xs font-mono font-bold text-gray-600">
                    {row.wait.startsWith('56') ? <span className="text-red-600">{row.wait}</span> : row.wait}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest ${row.sc}`}>{row.stat}</span>
                  </td>
                  <td className="py-3 px-4 text-xs font-medium text-gray-600">{row.cargo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Vessel-Port Physical Compatibility */}
      <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-gray-500" aria-hidden="true" />
            <h2 className="text-sm font-bold text-gray-900">Vessel — Port Physical Compatibility Inspector</h2>
          </div>
          <span className="bg-blue-50 border border-blue-100 text-blue-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">Validation Engine: Active</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]" aria-label="Compatibility Analysis">
            <thead>
              <tr className="bg-gray-50/80 border-b border-gray-100">
                <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Vessel Class</th>
                <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Draft</th>
                <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">LOA</th>
                <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Beam</th>
                <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Port Constraint Limits</th>
                <th className="py-3 px-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Compatibility Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-4">
                  <div className="text-xs font-bold text-gray-900">MV Ocean Star</div>
                  <div className="text-[10px] font-medium text-gray-500 mt-0.5">Panamax Class</div>
                </td>
                <td className="py-4 px-4 text-xs font-mono font-semibold text-gray-900">12.5m</td>
                <td className="py-4 px-4 text-xs font-mono font-semibold text-gray-900">225m</td>
                <td className="py-4 px-4 text-xs font-mono font-semibold text-gray-900">32.2m</td>
                <td className="py-4 px-4 text-xs font-medium text-gray-600">Draft Limit: 14.5m / LOA: 260m</td>
                <td className="py-4 px-4">
                  <span className="bg-green-50 border border-green-200 text-green-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 w-fit">
                    <CheckCircle2 className="w-3 h-3"/> COMPATIBLE
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-red-50/30 transition-colors">
                <td className="py-4 px-4">
                  <div className="text-xs font-bold text-gray-900">MV Global Trader</div>
                  <div className="text-[10px] font-medium text-gray-500 mt-0.5">VLCC Class</div>
                </td>
                <td className="py-4 px-4 text-xs font-mono font-bold text-red-600">18.2m</td>
                <td className="py-4 px-4 text-xs font-mono font-bold text-red-600">330m</td>
                <td className="py-4 px-4 text-xs font-mono font-semibold text-gray-900">58.0m</td>
                <td className="py-4 px-4 text-xs font-bold text-red-600">Draft Limit 15.0m exceeded at Paradip</td>
                <td className="py-4 px-4">
                  <span className="bg-red-50 border border-red-200 text-red-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 w-fit">
                    <AlertTriangle className="w-3 h-3"/> NOT COMPATIBLE
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Bottom Grid: Alerts, Cargo, Weather */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* Live Operational Alerts */}
        <motion.div variants={fadeUp} className="xl:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-red-500"/> Live Operational Alerts</h2>
          </div>
          <div className="p-4 space-y-3 flex-1 overflow-y-auto max-h-[300px]">
            {[
              { level: 'CRITICAL', time: '12 mins ago', title: 'Port Congestion Spike: Haldia', desc: 'Average waiting time increased to 12 vessels; average wait extended to 5.1 days.', action: 'Consider alternate berth allocation.', bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700' },
              { level: 'WARNING', time: '34 mins ago', title: 'Weather Disruption: Tropical Depression', desc: 'South Bay of Bengal (35kts winds). MV Steel Carrier re-routing +10h delay.', action: 'Monitor ETA for supply chain impact.', bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700' },
            ].map((alert, i) => (
              <div key={i} className={`p-3 rounded-lg border ${alert.bg} ${alert.border}`}>
                <div className="flex justify-between items-start mb-1">
                  <span className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded border ${alert.border} bg-white ${alert.text}`}>{alert.level}</span>
                  <span className="text-[9px] font-bold text-gray-500">{alert.time}</span>
                </div>
                <h4 className="text-xs font-bold text-gray-900 mt-1">{alert.title}</h4>
                <p className="text-[11px] text-gray-700 mt-1 leading-relaxed">{alert.desc}</p>
                <div className="text-[10px] font-bold text-gray-900 mt-2 flex items-center gap-1">Action: <span className="font-medium text-gray-600">{alert.action}</span></div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cargo Visibility */}
        <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2"><FileText className="w-4 h-4 text-gray-500"/> Cargo Visibility</h2>
          </div>
          <div className="p-0 flex-1 overflow-y-auto max-h-[300px]">
             <div className="divide-y divide-gray-100">
                <div className="p-4 hover:bg-gray-50 transition-colors">
                   <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-bold text-gray-900">Iron Ore Pellets</span>
                      <span className="text-[9px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 uppercase tracking-widest">Delayed</span>
                   </div>
                   <div className="text-[10px] font-medium text-gray-500 mb-2">Port Hedland → Haldia</div>
                   <div className="text-[11px] font-mono font-semibold text-gray-900">120,000 MT • ETA 25 May</div>
                </div>
                <div className="p-4 hover:bg-gray-50 transition-colors">
                   <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-bold text-gray-900">Coking Coal</span>
                      <span className="text-[9px] font-bold text-green-700 bg-green-50 px-1.5 py-0.5 rounded border border-green-200 uppercase tracking-widest">Normal</span>
                   </div>
                   <div className="text-[10px] font-medium text-gray-500 mb-2">Newcastle → Paradip</div>
                   <div className="text-[11px] font-mono font-semibold text-gray-900">75,000 MT • ETA 22 May</div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Operations Summary */}
        <motion.div variants={fadeUp} className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-blue-50/30">
            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2"><Activity className="w-4 h-4 text-blue-600"/> Operations Summary</h2>
          </div>
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2 text-xs">
                <span className="font-medium text-gray-600">On-Time Fleet Ratio:</span>
                <span className="font-mono font-bold text-green-600">82.3%</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-2 text-xs">
                <span className="font-medium text-gray-600">Berth Utilization:</span>
                <span className="font-mono font-bold text-gray-900">76.4%</span>
              </div>
              <div className="flex justify-between items-center pb-2 text-xs">
                <span className="font-medium text-gray-600">Critical Actions:</span>
                <span className="font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">2 PENDING</span>
              </div>
            </div>
            <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-3">
               <div className="text-[9px] font-bold text-blue-600 uppercase tracking-widest mb-1">AI Recommendation</div>
               <p className="text-[10px] text-gray-600 font-medium leading-relaxed">
                  Haldia congestion is a primary constraint. Two vessels show elevated delay risk. Review berth allocation and arrival windows immediately.
               </p>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
