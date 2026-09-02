import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, ArrowRight, Loader2 } from 'lucide-react';

export default function ScenarioSimulator() {
  const [loading, setLoading] = useState(false);
  const [simulated, setSimulated] = useState(false);

  const handleRecalculate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSimulated(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
      <div>
        <h1 className="text-display-lg text-primary tracking-tight leading-none mb-2">What-If Scenario Simulator</h1>
        <p className="text-body-lg text-secondary-fixed-dim">Stress-test your logistics against market volatility and disruptions.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-surface p-6 rounded-2xl border border-outline/10 shadow-sm flex flex-col gap-6">
          <h3 className="font-headline-md font-bold text-primary border-b border-outline/10 pb-4">Market Variables</h3>
          
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-body-sm font-semibold flex justify-between">
                <span>Fuel Price Shock</span>
                <span className="text-primary">+15%</span>
              </label>
              <input type="range" className="w-full" min="-50" max="50" defaultValue="15" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-body-sm font-semibold flex justify-between">
                <span>Port Congestion</span>
                <span className="text-primary">Severe (7 Days)</span>
              </label>
              <input type="range" className="w-full" min="0" max="14" defaultValue="7" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-body-sm font-semibold flex justify-between">
                <span>Cargo Demand Surge</span>
                <span className="text-primary">+5%</span>
              </label>
              <input type="range" className="w-full" min="-20" max="50" defaultValue="5" />
            </div>
          </div>

          <button 
            onClick={handleRecalculate}
            disabled={loading}
            className="mt-auto w-full bg-primary text-on-primary py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <RefreshCcw className="w-5 h-5" />}
            {loading ? 'Analyzing Impact...' : 'Recalculate Impact'}
          </button>
        </div>

        <div className="lg:col-span-2 bg-surface p-6 rounded-2xl border border-outline/10 shadow-sm relative overflow-hidden">
          {loading && (
            <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
              <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
              <p className="font-semibold text-lg text-primary">Running AI Simulation...</p>
            </div>
          )}

          <h3 className="font-headline-md font-bold text-primary mb-6">Simulation Results</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-outline/10 bg-surface-container-lowest">
              <span className="text-label-caps text-secondary-fixed-dim uppercase">Base Scenario (Cost)</span>
              <p className="text-[28px] font-bold text-primary mt-1">$2.27M</p>
            </div>
            <div className={`p-4 rounded-xl border ${simulated ? 'border-error/30 bg-error/5' : 'border-outline/10 bg-surface-container-lowest'}`}>
              <span className="text-label-caps text-secondary-fixed-dim uppercase">Simulated Scenario</span>
              <p className="text-[28px] font-bold text-error mt-1">
                {simulated ? '$2.61M' : '$2.27M'}
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
              <span className="font-semibold text-on-surface">Recommended Vessel</span>
              <div className="flex items-center gap-4">
                <span className="text-secondary-fixed-dim">Panamax</span>
                {simulated && <ArrowRight className="w-4 h-4 text-primary" />}
                {simulated && <span className="font-bold text-primary">Supramax (Due to Draft)</span>}
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
              <span className="font-semibold text-on-surface">Optimal Contract</span>
              <div className="flex items-center gap-4">
                <span className="text-secondary-fixed-dim">Spot</span>
                {simulated && <ArrowRight className="w-4 h-4 text-primary" />}
                {simulated && <span className="font-bold text-primary">Short-Term COA</span>}
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
              <span className="font-semibold text-on-surface">Overall Risk Score</span>
              <div className="flex items-center gap-4">
                <span className="text-secondary-fixed-dim">45 / 100</span>
                {simulated && <ArrowRight className="w-4 h-4 text-error" />}
                {simulated && <span className="font-bold text-error">78 / 100</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
