import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

export default function VoyagePlanner() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleGenerate = () => { setLoading(true); setTimeout(() => navigate("/forecast"), 2000); };
  return (
    <>
      <div className="flex flex-col w-full h-full relative overflow-hidden bg-background">
<div className="max-w-container-max mx-auto w-full p-margin-desktop grid grid-cols-12 gap-gutter relative z-10">

<div className="col-span-12 mb-stack-xl relative">
<div className="absolute -top-12 -left-8 w-48 h-48 bg-primary-fixed/20 blur-3xl rounded-full pointer-events-none"></div>
<h1 className="font-display-lg text-on-surface mb-stack-sm relative z-10">Create Voyage Scenario</h1>
<p className="font-body-lg text-on-surface-variant max-w-2xl">Configure your shipping parameters to generate AI-optimized route, vessel, and contract recommendations.</p>
</div>

<div className="col-span-12 lg:col-span-8 relative z-10">
<div className="bg-surface-container-lowest rounded-xl shadow-lg p-stack-xl relative overflow-hidden group transition-all duration-300 hover:shadow-xl">
<div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed/10 blur-2xl rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<form className="space-y-stack-xl relative z-10" id="voyageForm">

<div className="space-y-stack-md">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[24px]">route</span>
<h2 className="font-headline-md text-on-surface">Route Configuration</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md relative">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-surface shadow-sm z-10">
<span className="material-symbols-outlined text-on-surface-variant text-[16px]">swap_horiz</span>
</div>
<div className="space-y-stack-xs relative group/input">
<label className="font-label-caps text-on-surface-variant uppercase tracking-wider block">Origin</label>
<div className="relative">
<select className="w-full bg-surface border border-outline-variant rounded-lg p-4 font-body-md text-on-surface appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer">
<option  value="australia">Australia (Newcastle)</option>
<option value="indonesia">Indonesia (Samarinda)</option>
<option value="south-africa">South Africa (Richards Bay)</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
</div>
</div>
<div className="space-y-stack-xs relative group/input">
<label className="font-label-caps text-on-surface-variant uppercase tracking-wider block">Destination</label>
<div className="relative">
<select className="w-full bg-surface border border-outline-variant rounded-lg p-4 font-body-md text-on-surface appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer">
<option  value="paradip">India (Paradip)</option>
<option value="haldia">India (Haldia)</option>
<option value="dhamra">India (Dhamra)</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
</div>
</div>
</div>
</div>
<div className="h-px w-full bg-outline-variant/30"></div>

<div className="space-y-stack-md">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[24px]">inventory_2</span>
<h2 className="font-headline-md text-on-surface">Cargo & Schedule</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
<div className="space-y-stack-xs relative group/input">
<label className="font-label-caps text-on-surface-variant uppercase tracking-wider block">Cargo Type</label>
<div className="relative">
<select className="w-full bg-surface border border-outline-variant rounded-lg p-4 font-body-md text-on-surface appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer">
<option  value="coal">Coal</option>
<option value="iron-ore">Iron Ore</option>
<option value="grain">Grain</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
</div>
</div>
<div className="space-y-stack-xs relative group/input">
<label className="font-label-caps text-on-surface-variant uppercase tracking-wider block">Quantity (MT)</label>
<div className="relative">
<input className="w-full bg-surface border border-outline-variant rounded-lg p-4 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" type="number" value="70000"/>
</div>
</div>
<div className="space-y-stack-xs relative group/input">
<label className="font-label-caps text-on-surface-variant uppercase tracking-wider block">Required Delivery</label>
<div className="relative">
<input className="w-full bg-surface border border-outline-variant rounded-lg p-4 font-body-md text-on-surface appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" type="date" value="2026-09-15"/>
</div>
</div>
</div>
</div>
<div className="h-px w-full bg-outline-variant/30"></div>

<div className="space-y-stack-md">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[24px]">strategy</span>
<h2 className="font-headline-md text-on-surface">Strategy Parameters</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
<div className="space-y-stack-xs relative group/input">
<label className="font-label-caps text-on-surface-variant uppercase tracking-wider block">Contract Horizon</label>
<div className="relative">
<select className="w-full bg-surface border border-outline-variant rounded-lg p-4 font-body-md text-on-surface appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer">
<option  value="compare-all">Compare All (Spot vs COA vs T/C)</option>
<option value="spot">Spot Market Only</option>
<option value="coa">Contract of Affreightment</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
</div>
</div>
<div className="space-y-stack-xs relative group/input">
<label className="font-label-caps text-on-surface-variant uppercase tracking-wider block">Vessel Preference</label>
<div className="relative">
<select className="w-full bg-surface border border-outline-variant rounded-lg p-4 font-body-md text-on-surface appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer">
<option  value="any">Any (Optimized by AI)</option>
<option value="panamax">Panamax</option>
<option value="capesize">Capesize</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
</div>
</div>
</div>
</div>
<div className="pt-stack-md flex justify-end">
<button onClick={handleGenerate} disabled={loading} className="relative overflow-hidden group bg-primary text-on-primary font-label-caps py-4 px-8 rounded-lg tracking-widest flex items-center gap-3 transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-80" type="button"><span className="relative z-10 flex items-center gap-2">{loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <span className="material-symbols-outlined text-[20px]">auto_awesome</span>}{loading ? "ANALYZING..." : "GENERATE AI RECOMMENDATION"}</span><div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div></button>
</div>
</form>
</div>
</div>

<div className="col-span-12 lg:col-span-4 opacity-0 pointer-events-none translate-x-8 transition-all duration-500 ease-in-out relative z-10" id="aiSidebar">
<div className="bg-surface-container rounded-xl p-stack-lg sticky top-stack-xl border border-outline-variant/50">
<div className="flex items-center gap-3 mb-stack-lg">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center animate-spin">
<span className="material-symbols-outlined text-on-primary text-[16px]">sync</span>
</div>
<div>
<h3 className="font-headline-md text-on-surface">Intelligence Engine</h3>
<p className="font-body-sm text-on-surface-variant">Processing Scenario Parameters</p>
</div>
</div>
<div className="space-y-stack-md" id="processSteps">

</div>
<div className="mt-stack-lg pt-stack-md border-t border-outline-variant/30 text-center opacity-0 transition-opacity duration-300" id="completionMessage">
<p className="font-body-sm text-secondary mb-3">Analysis Complete</p>
<button className="bg-secondary-fixed text-on-secondary-fixed font-label-caps py-2 px-6 rounded-lg w-full hover:bg-secondary-fixed-dim transition-colors">VIEW RESULTS</button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
