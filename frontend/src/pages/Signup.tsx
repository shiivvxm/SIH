import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-container-low relative overflow-hidden py-12">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg relative z-10"
      >
        <div className="bg-surface rounded-2xl shadow-xl border border-outline-variant/30 p-8">
          <Logo className="mb-6 h-8 justify-center" />
          <h1 className="font-headline-lg text-2xl font-bold text-primary text-center mb-6">Create your FreightIQ account</h1>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1"><label className="text-body-sm font-semibold">Full Name</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-outline-variant/50" /></div>
              <div className="space-y-1"><label className="text-body-sm font-semibold">Work Email</label><input type="email" className="w-full px-4 py-3 rounded-xl border border-outline-variant/50" /></div>
            </div>
            <div className="space-y-1"><label className="text-body-sm font-semibold">Organization</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-outline-variant/50" /></div>
            <div className="space-y-1"><label className="text-body-sm font-semibold">Role</label>
              <select className="w-full px-4 py-3 rounded-xl border border-outline-variant/50 bg-surface">
                <option>Procurement Manager</option><option>Chartering Manager</option><option>Logistics Manager</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1"><label className="text-body-sm font-semibold">Password</label><input type="password" className="w-full px-4 py-3 rounded-xl border border-outline-variant/50" /></div>
              <div className="space-y-1"><label className="text-body-sm font-semibold">Confirm</label><input type="password" className="w-full px-4 py-3 rounded-xl border border-outline-variant/50" /></div>
            </div>
            <button type="button" className="w-full bg-primary text-on-primary py-3 rounded-xl font-semibold hover:bg-primary/90 mt-4">Create Account</button>
          </form>
        </div>
        <p className="text-center mt-6 text-body-sm text-on-surface-variant">Already have an account? <Link to="/login" className="text-primary font-semibold hover:underline">Sign In</Link></p>
      </motion.div>
    </div>
  );
}
