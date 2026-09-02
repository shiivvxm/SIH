const fs = require('fs');
let c = fs.readFileSync('src/pages/Landing.tsx', 'utf8');

const navOld = `<nav className="hidden md:flex items-center gap-10 text-[14px] font-semibold text-gray-500">
          <a href="#" className="text-gray-900 hover:text-gray-900 transition-colors">Features</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Intelligence</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Pricing</a>
        </nav>`;

const navNew = `<nav className="hidden md:flex items-center gap-10 text-[14px] font-semibold text-gray-500">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#intelligence" className="hover:text-gray-900 transition-colors">Intelligence</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
        </nav>`;

c = c.replace(navOld, navNew);

c = c.replace(
  '{/* Features Grid */}\n      <section className="w-full py-24 bg-white relative">', 
  '{/* Features Grid */}\n      <section id="features" className="w-full py-24 bg-white relative">'
);

const newSections = `      {/* Intelligence Section */}
      <section id="intelligence" className="w-full py-24 bg-gray-50 relative border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-[36px] font-bold text-gray-900 tracking-tight mb-4">Deep Market Intelligence.</h2>
            <p className="text-gray-500 text-[16px] leading-relaxed font-medium">
              Turn macro-economic volatility into actionable foresight. Our AI continuously analyzes global shipping patterns.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-900 mb-6">
                 <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Anomaly Detection</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Automatically flag unusual routing, port congestion, and unexpected delays in real-time across the global fleet.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-900 mb-6">
                 <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rate Forecasting</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Predict future spot and contract rates across major maritime routes with high precision using historical ML models.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-900 mb-6">
                 <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Sourcing</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Optimize your vessel chartering strategy based on predictive availability and demand metrics from multiple APIs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-32 bg-white relative border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-[36px] font-bold text-gray-900 tracking-tight mb-4">Transparent Pricing.</h2>
            <p className="text-gray-500 text-[16px] leading-relaxed font-medium">
              Enterprise-grade intelligence for fleets of all sizes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-500 text-sm mb-6 font-medium">For small operations.</p>
              <div className="text-4xl font-black text-gray-900 mb-8">$499<span className="text-lg text-gray-400 font-medium tracking-normal">/mo</span></div>
              <ul className="flex flex-col gap-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-400"/> Basic Forecasting</li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-400"/> Daily Market Updates</li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-400"/> 5 Active Voyages</li>
              </ul>
              <button className="w-full py-4 rounded-xl border border-gray-200 text-gray-900 font-bold hover:bg-gray-50 transition-colors shadow-sm">Start Trial</button>
            </div>

            {/* Professional */}
            <div className="bg-gray-900 p-10 rounded-3xl border border-gray-800 shadow-2xl flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-white text-gray-900 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">Popular</div>
              <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
              <p className="text-gray-400 text-sm mb-6 font-medium">For growing fleets.</p>
              <div className="text-4xl font-black text-white mb-8">$1,299<span className="text-lg text-gray-500 font-medium tracking-normal">/mo</span></div>
              <ul className="flex flex-col gap-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-sm text-gray-300 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-500"/> AI Predictive Engine</li>
                <li className="flex items-center gap-3 text-sm text-gray-300 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-500"/> Risk Simulator</li>
                <li className="flex items-center gap-3 text-sm text-gray-300 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-500"/> Unlimited Voyages</li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-white text-gray-900 font-bold hover:bg-gray-100 transition-colors shadow-sm">Upgrade Now</button>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-500 text-sm mb-6 font-medium">For global corporations.</p>
              <div className="text-4xl font-black text-gray-900 mb-8 tracking-tight">Custom</div>
              <ul className="flex flex-col gap-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-400"/> Dedicated API Access</li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-400"/> Custom AI Models</li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-400"/> 24/7 Priority Support</li>
              </ul>
              <button className="w-full py-4 rounded-xl border border-gray-200 text-gray-900 font-bold hover:bg-gray-50 transition-colors shadow-sm">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}`;

c = c.replace('      {/* Testimonial Section */}', newSections);

fs.writeFileSync('src/pages/Landing.tsx', c);
