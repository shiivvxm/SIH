import React from 'react';
import { Download, Printer, CheckCircle } from 'lucide-react';

export default function Reports() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto pb-12">
      <div className="flex justify-between items-end print:hidden">
        <div>
          <h1 className="text-display-lg text-primary tracking-tight leading-none mb-2">Decision Report</h1>
          <p className="text-body-lg text-secondary-fixed-dim">Final chartering recommendation summary.</p>
        </div>
        <div className="flex gap-4">
          <button onClick={handlePrint} className="px-4 py-2 bg-surface text-primary border border-outline/20 rounded-lg hover:bg-surface-container-low transition-colors font-semibold flex items-center gap-2 shadow-sm">
            <Printer className="w-4 h-4" /> Print
          </button>
          <button className="px-4 py-2 bg-primary text-on-primary rounded-lg hover:bg-primary/90 transition-colors font-semibold flex items-center gap-2 shadow-sm">
            <Download className="w-4 h-4" /> Export PDF
          </button>
        </div>
      </div>

      <div className="bg-surface border border-outline/20 p-8 rounded-2xl shadow-sm print:shadow-none print:border-none print:p-0">
        <div className="border-b border-outline/20 pb-6 mb-6">
          <h2 className="text-[24px] font-bold text-primary mb-1">AI Chartering Recommendation</h2>
          <p className="text-body-sm text-secondary-fixed-dim">Generated on {new Date().toLocaleDateString()}</p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-label-caps uppercase text-secondary-fixed-dim mb-2">Voyage Details</h3>
            <p className="text-body-md font-semibold">Australia (Newcastle) → India (Paradip)</p>
            <p className="text-body-sm mt-1">70,000 MT • Coal</p>
          </div>
          <div>
            <h3 className="font-semibold text-label-caps uppercase text-secondary-fixed-dim mb-2">Market Overview</h3>
            <p className="text-body-md font-semibold">Freight Trend: <span className="text-emerald-600">Rising (+4.2%)</span></p>
            <p className="text-body-sm mt-1">Current Rate: $32.40 / MT</p>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mb-8">
          <h3 className="font-headline-md font-bold text-primary mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-primary" /> Final Recommendation
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between border-b border-primary/10 pb-2">
              <span className="font-semibold">Vessel Type</span>
              <span className="font-bold">PANAMAX (Score: 92/100)</span>
            </div>
            <div className="flex justify-between border-b border-primary/10 pb-2">
              <span className="font-semibold">Contract Strategy</span>
              <span className="font-bold">SHORT-TERM COA</span>
            </div>
            <div className="flex justify-between border-b border-primary/10 pb-2">
              <span className="font-semibold">Execution Window</span>
              <span className="font-bold">NEXT 7-14 DAYS</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Overall Risk</span>
              <span className="font-bold text-amber-600">MEDIUM (Manageable)</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-label-caps uppercase text-secondary-fixed-dim mb-3">Key Justifications</h3>
          <ul className="list-disc pl-5 space-y-2 text-body-sm text-on-surface-variant">
            <li>Freight trend is expected to rise; securing short-term COA locks in current rates while retaining flexibility.</li>
            <li>Panamax is the optimal size due to draft constraints (15.0m max) at Paradip.</li>
            <li>Congestion risk is moderate but acceptable given current buffer schedules.</li>
            <li>Cost efficiency is maximized without sacrificing supply security in a volatile market.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
