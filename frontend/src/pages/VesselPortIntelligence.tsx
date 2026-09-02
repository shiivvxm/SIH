import React from 'react';

export default function VesselPortIntelligence() {
  return (
    <>
      <div className="flex flex-col w-full h-full max-w-[1440px] mx-auto p-4 md:p-8 lg:p-12 gap-8 lg:gap-12 text-on-surface">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-outline-variant/30">
<div>
<span className="text-label-caps text-on-surface-variant mb-2 block tracking-widest uppercase">Intelligence Module IV</span>
<h1 className="text-display-lg text-on-surface font-headline-lg tracking-tight">Vessel & Port Strategy</h1>
<p className="text-body-lg text-on-surface-variant mt-3 max-w-2xl">Optimization algorithms for Eastern seaboard shipments. Evaluating asset compatibility against current port congestion metrics and physical constraints.</p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-body-sm font-data-table text-on-surface-variant">Live Feed Active</span>
</div>
<button className="bg-primary-container text-on-primary px-6 py-2 rounded-lg text-body-sm font-data-table hover:bg-primary transition-colors flex items-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">tune</span> Configure Parameters
      </button>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="flex items-center justify-between">
<h2 className="text-headline-md font-headline-md text-on-surface">Vessel Class Suitability</h2>
<div className="flex gap-2">
<span className="text-label-caps text-on-surface-variant px-3 py-1 bg-surface-container rounded-full">Score &gt; 85: Optimal</span>
<span className="text-label-caps text-on-surface-variant px-3 py-1 bg-surface-container rounded-full">Score 70-85: Viable</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<div className="bg-surface-container relative rounded-xl p-6 overflow-hidden flex flex-col justify-between min-h-[220px] ring-2 ring-primary-fixed shadow-md group hover:shadow-lg transition-shadow">
<div className="absolute -right-12 -top-12 w-48 h-48 bg-primary-fixed/20 rounded-full blur-2xl group-hover:bg-primary-fixed/30 transition-colors"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<span className="text-label-caps px-2 py-1 bg-primary text-on-primary rounded-md tracking-wider">RECOMMENDED</span>
<span className="text-headline-md font-data-table text-primary">92<span className="text-body-sm text-on-surface-variant">/100</span></span>
</div>
<h3 className="text-headline-md font-headline-md text-on-surface mb-1">PANAMAX</h3>
<p className="text-body-sm text-on-surface-variant line-clamp-2">Optimal balance of capacity and draft clearance for Paradip and Gangavaram.</p>
</div>
<div className="relative z-10 mt-6 grid grid-cols-2 gap-4 border-t border-outline-variant/20 pt-4">
<div>
<span className="block text-[10px] uppercase tracking-wider text-on-surface-variant">Capacity</span>
<span className="text-body-sm font-data-table">65,000 DWT</span>
</div>
<div>
<span className="block text-[10px] uppercase tracking-wider text-on-surface-variant">Est. Util</span>
<span className="text-body-sm font-data-table text-emerald-600">96%</span>
</div>
</div>
</div>

<div className="bg-surface rounded-xl p-6 flex flex-col justify-between min-h-[220px] shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow">
<div>
<div className="flex justify-between items-start mb-4">
<span className="text-label-caps px-2 py-1 bg-surface-container-high text-on-surface rounded-md tracking-wider">VIABLE</span>
<span className="text-headline-md font-data-table text-on-surface">81<span className="text-body-sm text-on-surface-variant">/100</span></span>
</div>
<h3 className="text-headline-md font-headline-md text-on-surface mb-1">SUPRAMAX</h3>
<p className="text-body-sm text-on-surface-variant line-clamp-2">Good flexibility across all minor ports, slightly higher freight cost per ton.</p>
</div>
<div className="mt-6 grid grid-cols-2 gap-4 border-t border-outline-variant/20 pt-4">
<div>
<span className="block text-[10px] uppercase tracking-wider text-on-surface-variant">Capacity</span>
<span className="text-body-sm font-data-table">55,000 DWT</span>
</div>
<div>
<span className="block text-[10px] uppercase tracking-wider text-on-surface-variant">Est. Util</span>
<span className="text-body-sm font-data-table">88%</span>
</div>
</div>
</div>

<div className="bg-surface rounded-xl p-6 flex flex-col justify-between min-h-[220px] shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow">
<div>
<div className="flex justify-between items-start mb-4">
<span className="text-label-caps px-2 py-1 bg-surface-container text-on-surface-variant rounded-md tracking-wider">SUB-OPTIMAL</span>
<span className="text-headline-md font-data-table text-on-surface-variant">68<span className="text-body-sm">/100</span></span>
</div>
<h3 className="text-headline-md font-headline-md text-on-surface mb-1">HANDYSIZE</h3>
<p className="text-body-sm text-on-surface-variant line-clamp-2">Underutilized capacity for required volume. Economically inefficient.</p>
</div>
<div className="mt-6 grid grid-cols-2 gap-4 border-t border-outline-variant/20 pt-4">
<div>
<span className="block text-[10px] uppercase tracking-wider text-on-surface-variant">Capacity</span>
<span className="text-body-sm font-data-table">35,000 DWT</span>
</div>
<div>
<span className="block text-[10px] uppercase tracking-wider text-on-surface-variant">Est. Util</span>
<span className="text-body-sm font-data-table text-error">42%</span>
</div>
</div>
</div>

<div className="bg-surface rounded-xl p-6 flex flex-col justify-between min-h-[220px] shadow-sm border border-error/30 hover:border-error/60 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-error/5 rounded-bl-full"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<span className="text-label-caps px-2 py-1 bg-error-container text-on-error-container rounded-md tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">warning</span> CONSTRAINT
             </span>
<span className="text-headline-md font-data-table text-error">54<span className="text-body-sm">/100</span></span>
</div>
<h3 className="text-headline-md font-headline-md text-on-surface mb-1">CAPESIZE</h3>
<p className="text-body-sm text-error/80 line-clamp-2">Draft exceeds safe clearance limits for intended destination ports.</p>
</div>
<div className="relative z-10 mt-6 grid grid-cols-2 gap-4 border-t border-outline-variant/20 pt-4 opacity-75">
<div>
<span className="block text-[10px] uppercase tracking-wider text-on-surface-variant">Draft Req.</span>
<span className="text-body-sm font-data-table text-error">&gt;18.5m</span>
</div>
<div>
<span className="block text-[10px] uppercase tracking-wider text-on-surface-variant">Port Max</span>
<span className="text-body-sm font-data-table">15.0m</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-4">

<div className="lg:col-span-8 flex flex-col gap-4">
<h2 className="text-body-lg font-headline-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">analytics</span> Specification Matrix
      </h2>
<div className="bg-surface rounded-xl shadow-sm border border-outline-variant/30 overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[700px]">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant/30">
<th className="p-4 text-label-caps text-on-surface-variant font-medium">Vessel Class</th>
<th className="p-4 text-label-caps text-on-surface-variant font-medium">Capacity (DWT)</th>
<th className="p-4 text-label-caps text-on-surface-variant font-medium">Draft (m)</th>
<th className="p-4 text-label-caps text-on-surface-variant font-medium">LOA x Beam</th>
<th className="p-4 text-label-caps text-on-surface-variant font-medium">Port Compat.</th>
<th className="p-4 text-label-caps text-on-surface-variant font-medium text-right">Score</th>
</tr>
</thead>
<tbody className="text-body-sm font-data-table divide-y divide-outline-variant/20">
<tr className="hover:bg-surface-container-low/50 transition-colors bg-primary/5">
<td className="p-4 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">directions_boat</span>
</div>
<span className="font-semibold">PANAMAX</span>
</td>
<td className="p-4">60,000 - 80,000</td>
<td className="p-4">12.0 - 13.5</td>
<td className="p-4 text-on-surface-variant">225m × 32m</td>
<td className="p-4">
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-emerald-500" title="Paradip"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500" title="Gangavaram"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500" title="Vizag"></div>
</div>
</td>
<td className="p-4 text-right text-primary font-bold">92</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-4 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">directions_boat</span>
</div>
<span>SUPRAMAX</span>
</td>
<td className="p-4">50,000 - 60,000</td>
<td className="p-4">11.0 - 12.2</td>
<td className="p-4 text-on-surface-variant">190m × 32m</td>
<td className="p-4">
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-emerald-500" title="Paradip"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500" title="Gangavaram"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500" title="Vizag"></div>
</div>
</td>
<td className="p-4 text-right">81</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-4 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">directions_boat</span>
</div>
<span>HANDYSIZE</span>
</td>
<td className="p-4">10,000 - 40,000</td>
<td className="p-4">9.5 - 10.5</td>
<td className="p-4 text-on-surface-variant">175m × 28m</td>
<td className="p-4">
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-emerald-500" title="Paradip"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500" title="Gangavaram"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500" title="Vizag"></div>
</div>
</td>
<td className="p-4 text-right">68</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors opacity-75">
<td className="p-4 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-error/10 flex items-center justify-center">
<span className="material-symbols-outlined text-[18px] text-error">directions_boat</span>
</div>
<span className="text-error">CAPESIZE</span>
</td>
<td className="p-4">150,000+</td>
<td className="p-4">17.0 - 18.5</td>
<td className="p-4 text-on-surface-variant">290m × 45m</td>
<td className="p-4">
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-error" title="Paradip - Draft Restricted"></div>
<div className="w-3 h-3 rounded-full bg-error" title="Gangavaram - Draft Restricted"></div>
<div className="w-3 h-3 rounded-full bg-amber-500" title="Vizag - Marginal"></div>
</div>
</td>
<td className="p-4 text-right text-error">54</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-4">
<h2 className="text-body-lg font-headline-md text-on-surface flex items-center justify-between">
<span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">radar</span> Port Status</span>
<span className="text-label-caps text-on-surface-variant">EAST COAST IND</span>
</h2>
<div className="flex flex-col gap-3 relative">

<div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-outline-variant/30 z-0 hidden sm:block"></div>

<div className="bg-surface rounded-xl p-4 shadow-sm border border-outline-variant/30 flex items-start gap-4 relative z-10 group hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border-2 border-surface z-10">
<span className="material-symbols-outlined text-amber-700 text-[20px]">anchor</span>
</div>
<div className="w-full">
<div className="flex justify-between items-center mb-2">
<h4 className="font-headline-md text-body-md">PARADIP</h4>
<span className="text-[10px] font-data-table px-2 py-1 bg-amber-50 text-amber-700 rounded uppercase">Medium Congestion</span>
</div>
<div className="grid grid-cols-2 gap-y-2 gap-x-4 text-body-sm">
<div><span className="text-on-surface-variant block text-[10px] uppercase">Waiting Time</span> <span className="font-data-table">1.8 days</span></div>
<div><span className="text-on-surface-variant block text-[10px] uppercase">Berth</span> <span className="font-data-table">Available</span></div>
<div><span className="text-on-surface-variant block text-[10px] uppercase">Draft Status</span> <span className="text-emerald-600 flex items-center gap-1 text-[12px]"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>OK (15m)</span></div>
</div>
</div>
</div>

<div className="bg-surface rounded-xl p-4 shadow-sm border border-outline-variant/30 flex items-start gap-4 relative z-10 group hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 border-2 border-surface z-10">
<span className="material-symbols-outlined text-emerald-700 text-[20px]">anchor</span>
</div>
<div className="w-full">
<div className="flex justify-between items-center mb-2">
<h4 className="font-headline-md text-body-md">GANGAVARAM</h4>
<span className="text-[10px] font-data-table px-2 py-1 bg-emerald-50 text-emerald-700 rounded uppercase">Low Congestion</span>
</div>
<div className="grid grid-cols-2 gap-y-2 gap-x-4 text-body-sm">
<div><span className="text-on-surface-variant block text-[10px] uppercase">Waiting Time</span> <span className="font-data-table">0.9 days</span></div>
<div><span className="text-on-surface-variant block text-[10px] uppercase">Berth</span> <span className="font-data-table">Good</span></div>
<div><span className="text-on-surface-variant block text-[10px] uppercase">Draft Status</span> <span className="text-emerald-600 flex items-center gap-1 text-[12px]"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>OK (16m)</span></div>
</div>
</div>
</div>

<div className="bg-surface rounded-xl p-4 shadow-sm border border-outline-variant/30 flex items-start gap-4 relative z-10 group hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 border-2 border-surface z-10">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">anchor</span>
</div>
<div className="w-full">
<div className="flex justify-between items-center mb-2">
<h4 className="font-headline-md text-body-md">VIZAG</h4>
<span className="text-[10px] font-data-table px-2 py-1 bg-surface-container-high text-on-surface-variant rounded uppercase">Moderate</span>
</div>
<div className="grid grid-cols-2 gap-y-2 gap-x-4 text-body-sm">
<div><span className="text-on-surface-variant block text-[10px] uppercase">Waiting Time</span> <span className="font-data-table">1.3 days</span></div>
<div><span className="text-on-surface-variant block text-[10px] uppercase">Draft Status</span> <span className="text-amber-600 flex items-center gap-1 text-[12px]"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Check (14m)</span></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full h-48 mt-8 rounded-xl overflow-hidden relative border border-outline-variant/20 shadow-inner">
<div className="absolute inset-0 bg-primary-container mix-blend-multiply opacity-10"></div>
<div className="w-full h-full bg-cover bg-center" data-alt="Minimalist maritime navigational chart of the Bay of Bengal and East Coast of India. Deep steel blue waters with faint technical grid lines and subtle glowing markers indicating port locations. High contrast, modern corporate style, conveying intelligence and precision without being overly complex. Predominantly dark blue and gray tones." data-location="Bay of Bengal, East Coast India" style={{background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
<div className="absolute bottom-4 left-6">
<span className="text-label-caps text-on-surface-variant bg-surface/80 backdrop-blur px-3 py-1 rounded">SAT COM ACTIVE</span>
</div>
</div>
</div>
    </>
  );
}
