import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import { Ship, Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleDemoLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      login();
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-container-low relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-surface rounded-2xl shadow-xl border border-outline-variant/30 p-8 flex flex-col items-center relative">
          <Link 
            to="/" 
            className="absolute top-8 left-8 flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-gray-900 group transition-colors"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back
          </Link>
          <Logo className="mb-8 h-10" />
          
          <div className="text-center mb-8">
            <h1 className="font-headline-lg text-[28px] font-bold text-primary mb-2">Welcome back</h1>
            <p className="text-body-md text-on-surface-variant">Sign in to your freight intelligence workspace.</p>
          </div>

          <form className="w-full space-y-4">
            <div className="space-y-1">
              <label className="text-body-sm font-semibold text-on-surface">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/50" />
                <input type="email" placeholder="name@company.com" className="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface transition-all" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-body-sm font-semibold text-on-surface">Password</label>
                <Link to="/forgot-password" className="text-body-sm text-primary hover:underline font-medium">Forgot Password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/50" />
                <input type="password" placeholder="••••••••" className="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface transition-all" />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input type="checkbox" id="remember" className="rounded border-outline-variant/50 text-primary focus:ring-primary" />
              <label htmlFor="remember" className="text-body-sm text-on-surface-variant">Remember me</label>
            </div>

            <button type="button" className="w-full bg-primary text-on-primary py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors mt-2">
              Sign In
            </button>
            
            <div className="relative py-4 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant/30"></div></div>
              <span className="relative bg-surface px-4 text-body-sm text-on-surface-variant uppercase tracking-wider font-semibold">OR</span>
            </div>

            <button 
              onClick={handleDemoLogin}
              disabled={isLoading}
              className="w-full bg-surface-container-highest text-primary py-3 rounded-xl font-semibold hover:bg-surface-dim transition-all border border-outline-variant/50 flex justify-center items-center gap-2 relative overflow-hidden group"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>
                  Continue with Demo Account
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
            
            <div className="text-center pt-2">
              <span className="text-[12px] uppercase tracking-widest text-primary/60 font-semibold bg-primary/5 px-2 py-1 rounded">Demo Environment</span>
            </div>
          </form>
        </div>
        
        <p className="text-center mt-6 text-body-sm text-on-surface-variant">
          Don't have an account? <Link to="/signup" className="text-primary font-semibold hover:underline">Create account</Link>
        </p>
      </motion.div>
    </div>
  );
}
