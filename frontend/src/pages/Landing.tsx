import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Target, TrendingUp, ShieldAlert, Zap, Anchor, Ship, Navigation, CheckCircle2 } from 'lucide-react';
import GlobeAnalytics from '../components/GlobeAnalytics';
import heroBg from '../assets/hero-bg.jpg';

export default function Landing() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-gray-200 selection:text-gray-900 overflow-x-hidden">
      
      {/* Navbar with subtle blur */}
      <header className="w-full px-8 py-5 flex items-center justify-between z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 transition-all duration-300">
        <div className="flex items-center gap-2 cursor-pointer">
          <svg viewBox="0 0 32 32" className="w-7 h-7 text-gray-900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M16 4V16L24.5 24.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="16" cy="16" r="3" fill="currentColor" />
            <path d="M16 4L20 8M16 4L12 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-bold text-[22px] tracking-tight text-gray-900">FreightIQ</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10 text-[14px] font-semibold text-gray-500">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#intelligence" className="hover:text-gray-900 transition-colors">Intelligence</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/login" className="bg-gray-900 text-white px-7 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all shadow-sm">
            Login
          </Link>
          <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white cursor-pointer hover:bg-gray-800 transition-all shadow-sm">
            <span className="material-symbols-outlined text-[20px]">person</span>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <main 
        className="relative w-full pt-16 pb-20 lg:pb-32 bg-white"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-transparent"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Content */}
          <motion.div 
            className="flex flex-col lg:col-span-5 z-10"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] text-gray-900 uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-gray-800 animate-pulse"></span>
              Live Intelligence
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-[64px] lg:text-[82px] leading-[1.05] font-bold text-gray-900 tracking-tight mb-8">
              Predict.<br/>
              <span className="text-gray-400">Optimize.</span><br/>
              Decide.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-gray-600 text-[16px] lg:text-[17px] leading-relaxed max-w-[460px] mb-10 font-medium">
              The AI-Powered Intelligence Layer for Maritime Freight & Chartering. Turn market volatility into a competitive advantage.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-14">
              <Link to="/login" className="group flex items-center gap-2 bg-gray-900 text-white px-7 py-4 rounded-xl text-[15px] font-semibold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group flex items-center gap-2 bg-white text-gray-900 px-7 py-4 rounded-xl text-[15px] font-semibold hover:bg-gray-50 transition-all shadow-sm border border-gray-200 hover:-translate-y-0.5">
                Watch Demo
                <Play className="w-4 h-4 text-gray-900 fill-gray-900/20" />
              </button>
            </motion.div>

            {/* Feature Highlights beneath buttons */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-x-6 gap-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-200">
                  <Target className="w-4 h-4" />
                </div>
                <span className="text-[13px] font-bold text-gray-700 leading-tight">Real-time Market<br/>Intelligence</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-200">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-[13px] font-bold text-gray-700 leading-tight">AI-Powered<br/>Forecasting</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-200">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <span className="text-[13px] font-bold text-gray-700 leading-tight">Risk & Scenario<br/>Simulation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-200">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-[13px] font-bold text-gray-700 leading-tight">Actionable<br/>Insights</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Advanced Route Analysis Card */}
          <motion.div 
            className="lg:col-span-7 flex justify-center lg:justify-end mt-12 lg:mt-0 perspective-1000"
            initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] w-full max-w-[800px] border border-gray-100 relative overflow-hidden group">
              
              {/* Card Header */}
              <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-start z-20 pointer-events-none">
                <div>
                  <div className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-1 font-mono">ROUTE ANALYSIS</div>
                  <div className="text-[22px] font-bold text-gray-900 flex items-center gap-2">
                    Aus <ArrowRight className="w-5 h-5 text-gray-300" /> Ind
                  </div>
                </div>
                <div className="flex gap-1.5 bg-gray-50 px-3 py-2 rounded-full border border-gray-100 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-8 right-24 z-20">
                <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-100 shadow-sm text-[11px] font-bold text-gray-900 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800 animate-pulse"></span>
                  Live
                </div>
              </div>

              {/* Globe Container */}
              <div className="relative w-full aspect-[4/3] flex items-center justify-center pt-8">
                {/* Embedded Globe */}
                <GlobeAnalytics className="w-[120%] h-[120%] max-w-none opacity-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" speed={0.0015} />

                {/* Overlaid Route Labels */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <div className="absolute top-[30%] left-[15%]">
                    <div className="text-[12px] font-bold text-gray-900">Russia</div>
                    <div className="text-[10px] text-gray-400">via Northern Sea</div>
                  </div>
                  <div className="absolute top-[45%] left-[10%]">
                    <div className="text-[12px] font-bold text-gray-900">USA</div>
                    <div className="text-[10px] text-gray-400">via Panama Canal</div>
                  </div>
                  <div className="absolute bottom-[35%] left-[20%]">
                    <div className="text-[12px] font-bold text-gray-900">Mozambique</div>
                    <div className="text-[10px] text-gray-400">via Indian Ocean</div>
                  </div>
                  <div className="absolute bottom-[35%] right-[10%] text-right">
                    <div className="text-[12px] font-bold text-gray-900">Australia</div>
                    <div className="text-[10px] text-gray-400">via Southern Route</div>
                  </div>
                  <div className="absolute top-[50%] right-[10%] text-right">
                    <div className="text-[12px] font-bold text-gray-900">Indonesia</div>
                    <div className="text-[10px] text-gray-400">via Sunda Route</div>
                  </div>
                </div>
              </div>

              {/* Live Data Floating Bar */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 grid grid-cols-4 gap-4 divide-x divide-gray-100">
                  <div className="pl-2">
                    <div className="text-xl font-bold text-gray-900 mb-1">8,247</div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-gray-500">Active Voyages</span>
                      <span className="text-[10px] font-bold text-gray-700 flex items-center">↑ 12%</span>
                    </div>
                  </div>
                  <div className="pl-6">
                    <div className="text-xl font-bold text-gray-900 mb-1">$1,842 <span className="text-sm text-gray-400 font-medium">/ TEU</span></div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-gray-500">Avg. Freight Rate</span>
                      <span className="text-[10px] font-bold text-gray-500 flex items-center">↓ 3%</span>
                    </div>
                  </div>
                  <div className="pl-6">
                    <div className="text-xl font-bold text-gray-900 mb-1">24</div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-gray-500">High Risk Alerts</span>
                      <span className="text-[10px] font-bold text-gray-700 flex items-center">↑ 8%</span>
                    </div>
                  </div>
                  <div className="pl-6">
                    <div className="text-xl font-bold text-gray-900 mb-1">92%</div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-gray-500">Forecast Accuracy</span>
                      <span className="text-[10px] font-bold text-gray-700 flex items-center">↑ 5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Trusted By Banner */}
      <section className="w-full py-12 border-y border-gray-100 bg-white">
        <div className="max-w-[1440px] mx-auto px-12 flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">TRUSTED BY INDUSTRY LEADERS</span>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2 text-2xl font-black tracking-tighter"><Anchor className="w-6 h-6"/> MAERSK</div>
            <div className="flex items-center gap-1 text-3xl font-black lowercase tracking-tighter"><Ship className="w-8 h-8"/> msc</div>
            <div className="flex items-center gap-2 text-xl font-black uppercase tracking-widest"><Navigation className="w-6 h-6"/> CMA CGM</div>
            <div className="flex items-center gap-2 text-xl font-bold uppercase"><Target className="w-6 h-6"/> Hapag-Lloyd</div>
            <div className="flex items-center gap-2 text-xl font-black uppercase"><CheckCircle2 className="w-6 h-6"/> COSCO</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="w-full py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-[36px] font-bold text-gray-900 tracking-tight mb-4">Precision at every node.</h2>
            <p className="text-gray-500 text-[16px] leading-relaxed font-medium">
              Navigate complex logistics with deterministic AI models trained on decades of maritime data.
            </p>
          </div>

          <motion.div 
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
      </section>

      {/* Intelligence Section */}
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
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                  <TrendingUp className="text-gray-900 w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-gray-900">22% reduction in delays</span>
                  <span className="text-[12px] font-medium text-gray-500">Fleet Operations</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <span className="text-[80px] leading-[0.5] text-gray-900 font-serif font-bold">"</span>
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
                <svg viewBox="0 0 32 32" className="w-6 h-6 text-gray-900" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <a href="#" className="text-[14px] font-medium text-gray-500 hover:text-gray-900 transition-colors">About</a>
                <a href="#" className="text-[14px] font-medium text-gray-500 hover:text-gray-900 transition-colors">Careers</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-2">Legal</span>
                <a href="#" className="text-[14px] font-medium text-gray-500 hover:text-gray-900 transition-colors">Terms</a>
                <a href="#" className="text-[14px] font-medium text-gray-500 hover:text-gray-900 transition-colors">Privacy</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-2">Support</span>
                <a href="#" className="text-[14px] font-medium text-gray-500 hover:text-gray-900 transition-colors">Help Center</a>
                <a href="#" className="text-[14px] font-medium text-gray-500 hover:text-gray-900 transition-colors">Contact</a>
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
}
