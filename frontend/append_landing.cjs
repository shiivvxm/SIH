const fs = require('fs');
let c = fs.readFileSync('src/pages/Landing.tsx', 'utf8');

// Replace the closing tags of the landing page to inject the rest of the sections
const closingTags = `    </div>
  );
}`;

const restOfPage = `      {/* Features Grid */}
      <section className="w-full py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-[36px] font-bold text-gray-900 tracking-tight mb-4">Precision at every node.</h2>
            <p className="text-gray-500 text-[16px] leading-relaxed font-medium">
              Navigate complex logistics with deterministic AI models trained on decades of maritime data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="p-10 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 mb-8 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-bold text-gray-900 mb-3">Intelligent Forecasting</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                30-day and 60-day freight rate predictions with 94% accuracy, powered by deep learning models analyzing global macro-economic indicators.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="p-10 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 mb-8 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                <Ship className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-bold text-gray-900 mb-3">Vessel-Port Compatibility</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                Real-time monitoring of port congestion, vessel drafts, and berth availability to prevent demurrage and optimize turnaround times.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-10 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 mb-8 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-bold text-gray-900 mb-3">Contract Optimizer</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                Compare Spot vs. COA strategies with AI-driven risk assessment to lock in optimal rates before market shifts.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-10 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 mb-8 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-bold text-gray-900 mb-3">Scenario Simulation</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                Stress-test your logistics against market volatility. Simulate geopolitical events, weather disruptions, and supply chain shocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-24 bg-gray-50/50">
        <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                alt="David Chen" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <TrendingUp className="text-green-600 w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-gray-900">22% reduction in delays</span>
                  <span className="text-[12px] font-medium text-gray-500">Fleet Operations</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <span className="text-[80px] leading-[0.5] text-green-600 font-serif font-bold">"</span>
            <blockquote className="text-[32px] font-bold text-gray-900 leading-[1.2] tracking-tight -mt-4">
              FreightIQ turned our reactive chartering into a predictive edge. We've reduced operational delays by 22% in just one quarter.
            </blockquote>
            <div className="mt-2 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=David+Chen&background=f3f4f6&color=111827" alt="Avatar" className="w-full h-full object-cover"/>
              </div>
              <div>
                <div className="text-[15px] font-bold text-gray-900">David Chen</div>
                <div className="text-[13px] font-medium text-gray-500">Global Logistics Director, Ministry of Steel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full py-32 bg-gray-900 relative overflow-hidden flex flex-col items-center justify-center text-center px-12">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
        <div className="relative z-10 max-w-3xl flex flex-col items-center">
          <h2 className="text-[48px] font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Ready to optimize your maritime strategy?
          </h2>
          <p className="text-[18px] text-gray-400 mb-12 max-w-xl leading-relaxed font-medium">
            Join the leading steel and logistics teams using FreightIQ to navigate the complexities of global shipping.
          </p>
          <Link to="/login" className="bg-white text-gray-900 px-8 py-4 rounded-xl text-[15px] font-bold hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1">
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-100 pt-20 pb-10">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-2 mb-2">
                <svg viewBox="0 0 32 32" className="w-6 h-6 text-green-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M16 4V16L24.5 24.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16" cy="16" r="3" fill="currentColor" />
                </svg>
                <span className="text-[13px] font-bold text-gray-900 tracking-widest uppercase">FreightIQ Engine</span>
              </div>
              <p className="text-[14px] font-medium text-gray-500 max-w-[300px] leading-relaxed">
                Advanced maritime intelligence and supply chain precision for the modern industrial age.
              </p>
            </div>
            
            <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-2">Corporate</span>
                <a href="#" className="text-[14px] font-medium text-gray-500 hover:text-green-600 transition-colors">About</a>
                <a href="#" className="text-[14px] font-medium text-gray-500 hover:text-green-600 transition-colors">Careers</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-2">Legal</span>
                <a href="#" className="text-[14px] font-medium text-gray-500 hover:text-green-600 transition-colors">Terms</a>
                <a href="#" className="text-[14px] font-medium text-gray-500 hover:text-green-600 transition-colors">Privacy</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-2">Support</span>
                <a href="#" className="text-[14px] font-medium text-gray-500 hover:text-green-600 transition-colors">Help Center</a>
                <a href="#" className="text-[14px] font-medium text-gray-500 hover:text-green-600 transition-colors">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-8 gap-6">
            <span className="text-[13px] font-medium text-gray-400">© 2024 FreightIQ. All rights reserved.</span>
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">In Partnership With</span>
              <span className="text-[12px] font-bold text-gray-900 tracking-widest uppercase">Ministry of Steel</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}`;

c = c.replace(closingTags, restOfPage);

fs.writeFileSync('src/pages/Landing.tsx', c);
