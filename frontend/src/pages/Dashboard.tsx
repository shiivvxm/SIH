import React from 'react';

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col w-full h-full relative font-body-md overflow-x-hidden p-6 md:p-8 lg:p-12 gap-8">

<header className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 w-full mb-4">
<div className="flex flex-col gap-2 max-w-3xl">
<div className="flex items-center gap-3 mb-2">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="text-label-caps text-secondary font-semibold uppercase tracking-widest">Live Market Data</span>
</div>
<h1 className="text-display-lg text-primary tracking-tight leading-none mb-1">Maritime Freight Intelligence</h1>
<p className="text-body-lg text-secondary-fixed-dim">Real-time decision support for bulk cargo chartering.</p>
</div>
<div className="flex items-center gap-4 shrink-0">
<div className="text-right flex flex-col items-end mr-4 hidden lg:flex">
<span className="text-label-caps text-secondary uppercase">Last Updated</span>
<span className="text-body-sm font-data-table text-primary">14:02 UTC</span>
</div>
<button className="bg-primary text-on-primary hover:bg-primary/90 px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-md active:scale-95 text-body-sm font-medium">
<span className="material-symbols-outlined text-[18px]">cloud_download</span> Export Report
      </button>
</div>
</header>

<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full relative z-10">

<div className="bg-surface-container rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-sm col-span-2 lg:col-span-1 min-h-[140px] relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between z-10">
<span className="text-label-caps text-secondary">Current Freight</span>
<span className="material-symbols-outlined text-secondary text-[20px]">payments</span>
</div>
<div className="flex flex-col z-10 mt-4">
<div className="flex items-baseline gap-2">
<span className="text-headline-lg text-primary font-data-table tracking-tight">$32.4</span>
<span className="text-body-sm text-secondary">/ MT</span>
</div>
<div className="flex items-center gap-1 text-emerald-600 mt-1">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>
<span className="text-body-sm font-medium">4.2% (24h)</span>
</div>
</div>
</div>

<div className="bg-surface-container rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-sm col-span-2 md:col-span-1 min-h-[140px] relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between z-10">
<span className="text-label-caps text-secondary">30-Day Forecast</span>
<span className="material-symbols-outlined text-secondary text-[20px]">trending_up</span>
</div>
<div className="flex flex-col z-10 mt-4">
<div className="flex items-baseline gap-2">
<span className="text-headline-lg text-primary font-data-table tracking-tight">$37.8</span>
<span className="text-body-sm text-secondary">/ MT</span>
</div>
<div className="flex items-center gap-1 text-orange-500 mt-1">
<span className="material-symbols-outlined text-[14px]">show_chart</span>
<span className="text-body-sm font-medium">Rising Trend</span>
</div>
</div>
</div>

<div className="bg-surface-container rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-sm min-h-[140px] relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between z-10">
<span className="text-label-caps text-secondary">Market Risk</span>
<span className="material-symbols-outlined text-secondary text-[20px]">warning</span>
</div>
<div className="flex flex-col z-10 mt-4">
<div className="flex items-baseline gap-2">
<span className="text-headline-lg text-primary font-data-table tracking-tight">72</span>
<span className="text-body-sm text-secondary">/ 100</span>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-yellow-500 h-full rounded-full" style={{width: '72%'}}></div>
</div>
</div>
</div>

<div className="bg-surface-container rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-sm min-h-[140px] relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between z-10">
<span className="text-label-caps text-secondary">Port Congestion</span>
<span className="material-symbols-outlined text-secondary text-[20px]">anchor</span>
</div>
<div className="flex flex-col z-10 mt-4">
<span className="text-headline-md text-primary tracking-tight mt-1">Medium</span>
<div className="flex gap-1 mt-3">
<div className="h-1.5 flex-1 rounded-full bg-primary/20"></div>
<div className="h-1.5 flex-1 rounded-full bg-yellow-500"></div>
<div className="h-1.5 flex-1 rounded-full bg-surface-variant"></div>
</div>
</div>
</div>

<div className="bg-surface-container rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-sm min-h-[140px] relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between z-10">
<span className="text-label-caps text-secondary">Vessel Avail</span>
<span className="material-symbols-outlined text-secondary text-[20px]">directions_boat</span>
</div>
<div className="flex flex-col z-10 mt-4">
<span className="text-headline-md text-primary tracking-tight mt-1">Moderate</span>
<div className="flex items-center gap-2 mt-2">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-on-primary text-[10px] shadow-sm"><span className="material-symbols-outlined text-[12px]">sailing</span></div>
<div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed text-[10px] shadow-sm z-10"><span className="material-symbols-outlined text-[12px]">sailing</span></div>
<div className="w-6 h-6 rounded-full bg-surface-variant border border-outline flex items-center justify-center text-secondary text-[10px] shadow-sm z-20">+4</div>
</div>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full relative z-10">

<section className="lg:col-span-2 flex flex-col gap-4">
<div className="bg-surface-container rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between w-full z-10">
<h2 className="text-headline-md text-primary flex items-center gap-3">
<span className="material-symbols-outlined text-secondary">monitoring</span>
                      Freight Rate Outlook
                  </h2>
<div className="flex gap-2">
<button className="px-3 py-1 text-label-caps rounded-full bg-primary/10 text-primary font-semibold">7D</button>
<button className="px-3 py-1 text-label-caps rounded-full text-secondary hover:bg-surface-variant transition-colors">30D</button>
<button className="px-3 py-1 text-label-caps rounded-full text-secondary hover:bg-surface-variant transition-colors">60D</button>
</div>
</div>

<div className="w-full h-[300px] mt-4 relative z-10">
<svg className="w-full h-full text-primary" preserveAspectRatio="none" viewBox="0 0 800 300">

<line stroke="currentColor" stroke-dasharray="4,4" stroke-opacity="0.1" strokeWidth="1" x1="0" x2="800" y1="50" y2="50"></line>
<line stroke="currentColor" stroke-dasharray="4,4" stroke-opacity="0.1" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
<line stroke="currentColor" stroke-dasharray="4,4" stroke-opacity="0.1" strokeWidth="1" x1="0" x2="800" y1="250" y2="250"></line>

<text fill="currentColor" font-family="JetBrains Mono" font-size="10" opacity="0.5" x="0" y="45">$40</text>
<text fill="currentColor" font-family="JetBrains Mono" font-size="10" opacity="0.5" x="0" y="145">$30</text>
<text fill="currentColor" font-family="JetBrains Mono" font-size="10" opacity="0.5" x="0" y="245">$20</text>

<text fill="currentColor" font-family="JetBrains Mono" font-size="10" opacity="0.5" x="50" y="290">Aug</text>
<text fill="currentColor" font-family="JetBrains Mono" font-size="10" opacity="0.5" x="350" y="290">Today</text>
<text fill="currentColor" font-family="JetBrains Mono" font-size="10" opacity="0.5" x="750" y="290">Nov</text>

<path d="M 400 150 L 500 120 L 600 100 L 700 80 L 800 60 L 800 160 L 700 180 L 600 200 L 500 190 L 400 150 Z" fill="currentColor" fill-opacity="0.05"></path>

<path d="M 50 200 Q 150 180 250 220 T 400 150" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>

<path d="M 400 150 Q 550 100 800 110" fill="none" stroke="currentColor" stroke-dasharray="6,6" strokeLinecap="round" strokeWidth="3"></path>

<circle cx="400" cy="150" fill="currentColor" r="6"></circle>
<circle className="animate-ping" cx="400" cy="150" fill="currentColor" opacity="0.2" r="14" style={{transformOrigin: '400px 150px'}}></circle>

<rect fill="currentColor" height="24" rx="4" width="60" x="370" y="100"></rect>
<text fill="white" font-family="JetBrains Mono" font-size="12" font-weight="bold" text-anchor="middle" x="400" y="116">$32.4</text>
</svg>
</div>
</div>
</section>

<section className="lg:col-span-1 flex flex-col gap-6">
<div className="bg-primary text-on-primary rounded-3xl p-8 flex flex-col justify-between shadow-xl h-full relative overflow-hidden group">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-fixed/20 rounded-full blur-3xl group-hover:bg-primary-fixed/30 transition-colors duration-700"></div>
<div className="relative z-10 flex flex-col gap-6">
<h3 className="text-headline-md tracking-tight flex items-center gap-2">
<span className="material-symbols-outlined">insights</span>
                      Market Outlook
                  </h3>
<div className="text-body-lg leading-relaxed text-on-primary/90 font-light border-l-2 border-primary-fixed/30 pl-4 py-2">
<p>Freight rates show an upward projected trend over the next <span className="font-bold text-on-primary bg-primary-fixed/20 px-1 rounded">30–60 days</span>.</p>
<p className="mt-4">Current conditions may represent a favorable window for securing suitable voyage capacity before anticipated Q4 congestion.</p>
</div>
</div>
<div className="relative z-10 mt-8 pt-6 border-t border-on-primary/10 flex flex-col gap-4">
<div className="flex justify-between items-center text-body-sm text-on-primary/70">
<span>Analyst Confidence</span>
<span className="font-data-table text-on-primary">High (84%)</span>
</div>
<div className="w-full bg-on-primary/10 h-1 rounded-full overflow-hidden">
<div className="bg-primary-fixed h-full rounded-full" style={{width: '84%'}}></div>
</div>
</div>
</div>
</section>
</div>

<section className="w-full relative z-10 bg-surface-container rounded-3xl shadow-sm overflow-hidden flex flex-col">
<div className="p-6 md:p-8 flex items-center justify-between border-b border-outline/10">
<h2 className="text-headline-md text-primary flex items-center gap-3">
<span className="material-symbols-outlined text-secondary">route</span>
                Active Strategic Routes
            </h2>
<button className="text-label-caps text-secondary hover:text-primary transition-colors flex items-center gap-1">
                View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
<div className="overflow-x-auto w-full">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-variant/30 text-label-caps text-secondary">
<th className="px-6 py-4 font-semibold w-1/3">Trade Route</th>
<th className="px-6 py-4 font-semibold">Current Freight</th>
<th className="px-6 py-4 font-semibold text-center">30D Trend</th>
<th className="px-6 py-4 font-semibold">Market Risk</th>
<th className="px-6 py-4 font-semibold text-right">Congestion</th>
</tr>
</thead>
<tbody className="text-body-sm font-data-table divide-y divide-outline/5">

<tr className="hover:bg-surface-variant/20 transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="flex flex-col items-center">
<span className="text-[10px] text-secondary font-mono">AUS</span>
<div className="w-1 h-3 border-l-2 border-dotted border-secondary/50 my-1"></div>
<span className="text-[10px] text-secondary font-mono">IND</span>
</div>
<span className="text-body-md text-primary font-medium group-hover:translate-x-1 transition-transform">Australia → Paradip</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-body-md text-primary">$18.50 <span className="text-body-sm text-secondary font-normal">/ MT</span></span>
<span className="text-[11px] text-emerald-600 flex items-center"><span className="material-symbols-outlined text-[12px]">arrow_drop_up</span> 1.2%</span>
</div>
</td>
<td className="px-6 py-5">
<div className="w-24 h-8 mx-auto text-emerald-500">
<svg className="w-full h-full fill-none stroke-current stroke-2 strokeLinecap-round" viewBox="0 0 100 30">
<path d="M0,25 Q20,20 40,22 T70,10 T100,5"></path>
</svg>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2 py-1 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-700">LOW</span>
</td>
<td className="px-6 py-5 text-right">
<div className="flex items-center justify-end gap-2 text-secondary">
<span className="material-symbols-outlined text-[18px] text-emerald-500" style={{fontVariationSettings: '\'FILL\' 1'}}>circle</span>
                              Clear
                          </div>
</td>
</tr>

<tr className="hover:bg-surface-variant/20 transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="flex flex-col items-center">
<span className="text-[10px] text-secondary font-mono">AUS</span>
<div className="w-1 h-3 border-l-2 border-dotted border-secondary/50 my-1"></div>
<span className="text-[10px] text-secondary font-mono">IND</span>
</div>
<span className="text-body-md text-primary font-medium group-hover:translate-x-1 transition-transform">Australia → Gangavaram</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-body-md text-primary">$17.90 <span className="text-body-sm text-secondary font-normal">/ MT</span></span>
<span className="text-[11px] text-secondary flex items-center"><span className="material-symbols-outlined text-[12px]">remove</span> 0.0%</span>
</div>
</td>
<td className="px-6 py-5">
<div className="w-24 h-8 mx-auto text-secondary">
<svg className="w-full h-full fill-none stroke-current stroke-2 strokeLinecap-round" viewBox="0 0 100 30">
<path d="M0,15 L20,18 L40,14 L60,16 L80,15 L100,15"></path>
</svg>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2 py-1 rounded text-[11px] font-semibold bg-surface-variant text-secondary">MEDIUM</span>
</td>
<td className="px-6 py-5 text-right">
<div className="flex items-center justify-end gap-2 text-secondary">
<span className="material-symbols-outlined text-[18px] text-yellow-500" style={{fontVariationSettings: '\'FILL\' 1'}}>warning</span>
                              Mod
                          </div>
</td>
</tr>

<tr className="hover:bg-surface-variant/20 transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="flex flex-col items-center">
<span className="text-[10px] text-secondary font-mono">IDN</span>
<div className="w-1 h-3 border-l-2 border-dotted border-secondary/50 my-1"></div>
<span className="text-[10px] text-secondary font-mono">IND</span>
</div>
<span className="text-body-md text-primary font-medium group-hover:translate-x-1 transition-transform">Indonesia → Paradip</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-body-md text-primary">$12.40 <span className="text-body-sm text-secondary font-normal">/ MT</span></span>
<span className="text-[11px] text-orange-500 flex items-center"><span className="material-symbols-outlined text-[12px]">arrow_drop_up</span> 3.1%</span>
</div>
</td>
<td className="px-6 py-5">
<div className="w-24 h-8 mx-auto text-orange-500">
<svg className="w-full h-full fill-none stroke-current stroke-2 strokeLinecap-round" viewBox="0 0 100 30">
<path d="M0,28 L20,25 L40,26 L60,15 L80,18 L100,5"></path>
</svg>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2 py-1 rounded text-[11px] font-semibold bg-orange-500/10 text-orange-700">HIGH</span>
</td>
<td className="px-6 py-5 text-right">
<div className="flex items-center justify-end gap-2 text-secondary">
<span className="material-symbols-outlined text-[18px] text-error" style={{fontVariationSettings: '\'FILL\' 1'}}>error</span>
                              High
                          </div>
</td>
</tr>

<tr className="hover:bg-surface-variant/20 transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="flex flex-col items-center">
<span className="text-[10px] text-secondary font-mono">USA</span>
<div className="w-1 h-3 border-l-2 border-dotted border-secondary/50 my-1"></div>
<span className="text-[10px] text-secondary font-mono">IND</span>
</div>
<span className="text-body-md text-primary font-medium group-hover:translate-x-1 transition-transform">USA → Haldia</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-body-md text-primary">$45.20 <span className="text-body-sm text-secondary font-normal">/ MT</span></span>
<span className="text-[11px] text-emerald-600 flex items-center"><span className="material-symbols-outlined text-[12px]">arrow_drop_up</span> 0.8%</span>
</div>
</td>
<td className="px-6 py-5">
<div className="w-24 h-8 mx-auto text-emerald-500">
<svg className="w-full h-full fill-none stroke-current stroke-2 strokeLinecap-round" viewBox="0 0 100 30">
<path d="M0,20 Q25,18 50,15 T100,10"></path>
</svg>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2 py-1 rounded text-[11px] font-semibold bg-surface-variant text-secondary">MEDIUM</span>
</td>
<td className="px-6 py-5 text-right">
<div className="flex items-center justify-end gap-2 text-secondary">
<span className="material-symbols-outlined text-[18px] text-emerald-500" style={{fontVariationSettings: '\'FILL\' 1'}}>circle</span>
                              Clear
                          </div>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
    </>
  );
}
