import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import VoyagePlanner from './pages/VoyagePlanner';
import VesselPortIntelligence from './pages/VesselPortIntelligence';
import ContractStrategy from './pages/ContractStrategy';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import FreightForecast from './pages/FreightForecast';
import RiskCenter from './pages/RiskCenter';
import ScenarioSimulator from './pages/ScenarioSimulator';
import Reports from './pages/Reports';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AnimatePresence, motion } from 'framer-motion';
import AppLayout from './components/AppLayout';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <AppLayout>{children}</AppLayout>;
}

const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3 }
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<motion.div {...pageTransition}><Landing /></motion.div>} />
        <Route path='/login' element={<motion.div {...pageTransition}><Login /></motion.div>} />
        <Route path='/signup' element={<motion.div {...pageTransition}><Signup /></motion.div>} />
        <Route path='/forgot-password' element={<motion.div {...pageTransition}><ForgotPassword /></motion.div>} />
        
        <Route path='/dashboard' element={<ProtectedRoute><motion.div {...pageTransition}><Dashboard /></motion.div></ProtectedRoute>} />
        <Route path='/planner' element={<ProtectedRoute><motion.div {...pageTransition}><VoyagePlanner /></motion.div></ProtectedRoute>} />
        <Route path='/forecast' element={<ProtectedRoute><motion.div {...pageTransition}><FreightForecast /></motion.div></ProtectedRoute>} />
        <Route path='/intelligence' element={<ProtectedRoute><motion.div {...pageTransition}><VesselPortIntelligence /></motion.div></ProtectedRoute>} />
        <Route path='/contract' element={<ProtectedRoute><motion.div {...pageTransition}><ContractStrategy /></motion.div></ProtectedRoute>} />
        <Route path='/risk' element={<ProtectedRoute><motion.div {...pageTransition}><RiskCenter /></motion.div></ProtectedRoute>} />
        <Route path='/simulator' element={<ProtectedRoute><motion.div {...pageTransition}><ScenarioSimulator /></motion.div></ProtectedRoute>} />
        <Route path='/reports' element={<ProtectedRoute><motion.div {...pageTransition}><Reports /></motion.div></ProtectedRoute>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </AuthProvider>
  );
}
