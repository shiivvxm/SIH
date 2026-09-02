import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';

export default function ForgotPassword() {
  const [sent, setSent] = useState(false);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-container-low relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md relative z-10">
        <div className="bg-surface rounded-2xl shadow-xl border border-outline-variant/30 p-8 text-center">
          <Logo className="mb-6 h-8 justify-center" />
          <h1 className="font-headline-lg text-2xl font-bold text-primary mb-2">Reset your password</h1>
          {!sent ? (
            <>
              <p className="text-body-sm text-on-surface-variant mb-6">Enter your work email and we'll send instructions to reset your password.</p>
              <input type="email" placeholder="Work Email" className="w-full px-4 py-3 rounded-xl border border-outline-variant/50 mb-4" />
              <button onClick={() => setSent(true)} className="w-full bg-primary text-on-primary py-3 rounded-xl font-semibold hover:bg-primary/90">Send Reset Link</button>
            </>
          ) : (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-200">
              Reset instructions generated.
            </motion.div>
          )}
        </div>
        <p className="text-center mt-6 text-body-sm text-on-surface-variant"><Link to="/login" className="text-primary font-semibold hover:underline">Back to Login</Link></p>
      </motion.div>
    </div>
  );
}
