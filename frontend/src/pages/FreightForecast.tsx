import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, ReferenceLine } from 'recharts';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const data = [
  { day: '-30', rate: 28.5 },
  { day: '-20', rate: 29.1 },
  { day: '-10', rate: 30.5 },
  { day: 'Today', rate: 32.4, forecast: 32.4 },
  { day: '+7', forecast: 33.1 },
  { day: '+14', forecast: 34.6 },
  { day: '+30', forecast: 37.8 },
  { day: '+60', forecast: 39.6 },
];

export default function FreightForecast() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
      <div>
        <h1 className="text-display-lg text-primary tracking-tight leading-none mb-2">Freight Forecast</h1>
        <p className="text-body-lg text-secondary-fixed-dim">AI-driven predictive analytics for maritime freight rates.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-surface rounded-2xl p-6 border border-outline/10 shadow-sm col-span-1">
          <span className="text-label-caps text-on-surface-variant uppercase tracking-wider">Current Rate</span>
          <div className="flex items-end gap-2 mt-2">
            <span className="text-[32px] font-bold text-primary">$32.40</span>
            <span className="text-body-sm text-secondary-fixed-dim mb-1">/ MT</span>
          </div>
          <div className="flex items-center gap-1 mt-4 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md w-fit">
            <ArrowUpRight className="w-4 h-4" />
            <span className="text-body-sm font-semibold">+4.2% this week</span>
          </div>
        </div>
        
        <div className="bg-surface rounded-2xl p-6 border border-outline/10 shadow-sm col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-md font-bold text-primary">60-Day Forward Curve</h3>
            <span className="px-3 py-1 bg-primary-fixed text-on-primary-container rounded-full text-body-sm font-semibold">87% Confidence</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} domain={['dataMin - 2', 'dataMax + 2']} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <ReferenceLine x="Today" stroke="#64748b" strokeDasharray="3 3" label={{ position: 'top', value: 'Today', fill: '#64748b', fontSize: 12 }} />
                <Area type="monotone" dataKey="rate" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorRate)" />
                <Area type="monotone" dataKey="forecast" stroke="#8b5cf6" strokeWidth={3} strokeDasharray="5 5" fillOpacity={1} fill="url(#colorForecast)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-surface rounded-2xl p-6 border border-outline/10 shadow-sm">
        <h3 className="font-headline-md font-bold text-primary mb-4">Key Market Factors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-surface-container-low border border-outline/10">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <span className="font-semibold">Fuel/Bunker Price</span>
            </div>
            <p className="text-body-sm text-secondary-fixed-dim">Expected to rise 3% in next 14 days, creating upward pressure on freight rates.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-low border border-outline/10">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-amber-600" />
              <span className="font-semibold">Port Congestion</span>
            </div>
            <p className="text-body-sm text-secondary-fixed-dim">Moderate delays at discharge ports are reducing effective vessel supply.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-low border border-outline/10">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Cargo Demand</span>
            </div>
            <p className="text-body-sm text-secondary-fixed-dim">Strong seasonal demand for bulk commodities driving higher charter activity.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
