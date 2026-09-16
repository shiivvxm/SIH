const fs = require('fs');
let c = fs.readFileSync('src/pages/Landing.tsx', 'utf8');

const oldGrid = `<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="p-10 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 mb-8 group-hover:bg-gray-50 group-hover:text-gray-900 transition-colors">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-bold text-gray-900 mb-3">Intelligent Forecasting</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                30-day and 60-day freight rate predictions with 94% accuracy, powered by deep learning models analyzing global macro-economic indicators.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="p-10 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 mb-8 group-hover:bg-gray-50 group-hover:text-gray-900 transition-colors">
                <Ship className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-bold text-gray-900 mb-3">Vessel-Port Compatibility</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                Real-time monitoring of port congestion, vessel drafts, and berth availability to prevent demurrage and optimize turnaround times.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-10 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 mb-8 group-hover:bg-gray-50 group-hover:text-gray-900 transition-colors">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-bold text-gray-900 mb-3">Contract Optimizer</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                Compare Spot vs. COA strategies with AI-driven risk assessment to lock in optimal rates before market shifts.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-10 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 mb-8 group-hover:bg-gray-50 group-hover:text-gray-900 transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-bold text-gray-900 mb-3">Scenario Simulation</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                Stress-test your logistics against market volatility. Simulate geopolitical events, weather disruptions, and supply chain shocks.
              </p>
            </div>
          </div>`;

// Note: I stripped out formatting like line breaks from the search pattern just to be safe, so instead I'll use regex to replace everything between `<div className="grid grid-cols-1 md:grid-cols-2 gap-8">` and `</section>` minus the tags. Actually, regex is safer.

const pattern = /<div className="grid grid-cols-1 md:grid-cols-2 gap-8">[\s\S]*?<\/section>/;

const replacement = `<motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="relative p-10 rounded-[24px] border border-[#E2E5E9] bg-[#F4F5F7] shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-800 mb-8 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-0.5">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="relative z-10 text-[20px] font-bold text-gray-900 mb-3">Intelligent Forecasting</h3>
              <p className="relative z-10 text-[15px] text-gray-500 leading-relaxed font-medium">
                30-day and 60-day freight rate predictions with 94% accuracy, powered by deep learning models analyzing global macro-economic indicators.
              </p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeUp} className="relative p-10 rounded-[24px] border border-[#E2E5E9] bg-[#F4F5F7] shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-800 mb-8 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-0.5">
                <Ship className="w-6 h-6" />
              </div>
              <h3 className="relative z-10 text-[20px] font-bold text-gray-900 mb-3">Vessel-Port Compatibility</h3>
              <p className="relative z-10 text-[15px] text-gray-500 leading-relaxed font-medium">
                Real-time monitoring of port congestion, vessel drafts, and berth availability to prevent demurrage and optimize turnaround times.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="relative p-10 rounded-[24px] border border-[#E2E5E9] bg-[#F4F5F7] shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-800 mb-8 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-0.5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="relative z-10 text-[20px] font-bold text-gray-900 mb-3">Contract Optimizer</h3>
              <p className="relative z-10 text-[15px] text-gray-500 leading-relaxed font-medium">
                Compare Spot vs. COA strategies with AI-driven risk assessment to lock in optimal rates before market shifts.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={fadeUp} className="relative p-10 rounded-[24px] border border-[#E2E5E9] bg-[#F4F5F7] shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-800 mb-8 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-0.5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="relative z-10 text-[20px] font-bold text-gray-900 mb-3">Scenario Simulation</h3>
              <p className="relative z-10 text-[15px] text-gray-500 leading-relaxed font-medium">
                Stress-test your logistics against market volatility. Simulate geopolitical events, weather disruptions, and supply chain shocks.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>`;

c = c.replace(pattern, replacement);
fs.writeFileSync('src/pages/Landing.tsx', c);
