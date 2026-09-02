import React, { useState } from 'react';
import { AlertTriangle, Info, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const risks = [
  { id: 1, title: 'Extreme Weather at Discharge Port', category: 'Operational Disruption', level: 'Critical', desc: 'Cyclone expected in Bay of Bengal within 5 days.' },
  { id: 2, title: 'High Freight Volatility', category: 'Freight Volatility', level: 'High', desc: 'Market rates shifted >8% in last 72 hours.' },
  { id: 3, title: 'Berth Congestion at Paradip', category: 'Port Congestion', level: 'Medium', desc: 'Average wait time increased to 4.2 days.' },
  { id: 4, title: 'Spot Exposure Limit', category: 'Contract Risk', level: 'Medium', desc: 'Current spot exposure is 65%, exceeding 50% target.' },
  { id: 5, title: 'Tight Panamax Supply', category: 'Vessel Availability', level: 'Low', desc: 'Available tonnage in Pacific basin dropping slightly.' },
];

export default function RiskCenter() {
  const [filter, setFilter] = useState('All');

  const filteredRisks = filter === 'All' ? risks : risks.filter(r => r.level === filter);

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-display-lg text-primary tracking-tight leading-none mb-2">Risk Center</h1>
          <p className="text-body-lg text-secondary-fixed-dim">Monitor and mitigate maritime logistics and market risks.</p>
        </div>
        <div className="flex bg-surface-container-low p-1 rounded-lg border border-outline/10">
          {['All', 'Critical', 'High', 'Medium', 'Low'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${filter === f ? 'bg-surface text-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-error/10 border border-error/20 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
          <ShieldAlert className="w-10 h-10 text-error mb-2" />
          <span className="text-[32px] font-bold text-error">1</span>
          <span className="text-body-sm font-semibold text-error uppercase tracking-wider">Critical Alert</span>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/20 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
          <AlertTriangle className="w-10 h-10 text-amber-600 mb-2" />
          <span className="text-[32px] font-bold text-amber-700">1</span>
          <span className="text-body-sm font-semibold text-amber-700 uppercase tracking-wider">High Risk</span>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
          <Info className="w-10 h-10 text-blue-600 mb-2" />
          <span className="text-[32px] font-bold text-blue-700">3</span>
          <span className="text-body-sm font-semibold text-blue-700 uppercase tracking-wider">Medium / Low Risks</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {filteredRisks.map((risk, idx) => (
          <motion.div 
            key={risk.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className={`p-6 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-4 ${
              risk.level === 'Critical' ? 'bg-error/5 border-error/30' : 
              risk.level === 'High' ? 'bg-amber-50 border-amber-200' : 'bg-surface border-outline/10'
            }`}
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded ${
                  risk.level === 'Critical' ? 'bg-error text-white' : 
                  risk.level === 'High' ? 'bg-amber-500 text-white' : 'bg-surface-container-highest text-on-surface'
                }`}>{risk.level}</span>
                <span className="text-body-sm text-secondary-fixed-dim">{risk.category}</span>
              </div>
              <h3 className="font-headline-md font-bold text-primary mt-1">{risk.title}</h3>
              <p className="text-body-md text-on-surface-variant">{risk.desc}</p>
            </div>
            <button className="whitespace-nowrap px-4 py-2 bg-surface text-primary border border-outline/20 rounded-lg hover:bg-surface-container-low transition-colors font-semibold text-sm shadow-sm">
              View Details
            </button>
          </motion.div>
        ))}
        {filteredRisks.length === 0 && (
          <div className="text-center py-12 text-on-surface-variant bg-surface rounded-xl border border-outline/10">
            No risks found for this filter.
          </div>
        )}
      </div>
    </div>
  );
}
