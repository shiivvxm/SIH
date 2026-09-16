import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ManagementDashboard from './components/dashboards/ManagementDashboard';
import ROISavings from './pages/management/ROISavings';
import Performance from './pages/management/Performance';
import AuditLogs from './pages/management/AuditLogs';
import Governance from './pages/management/Governance';
import DecisionMakerDashboard from './components/dashboards/DecisionMakerDashboard';
import AIRecommendations from './pages/decision-maker/AIRecommendations';
import CharteringDecisions from './pages/decision-maker/CharteringDecisions';
import ContractStrategies from './pages/decision-maker/ContractStrategies';
import Approvals from './pages/decision-maker/Approvals';
import AnalystOverview from './pages/analyst/AnalystOverview';
import FreightForecasting from './pages/analyst/FreightForecasting';
import WhatIfSimulation from './pages/analyst/WhatIfSimulation';
import RouteMarketAnalysis from './pages/analyst/RouteMarketAnalysis';
import ModelPerformance from './pages/analyst/ModelPerformance';
import EarlyWarnings from './pages/analyst/EarlyWarnings';
import OperationsOverview from './pages/operations/OperationsOverview';
import LiveFleetTracking from './pages/operations/LiveFleetTracking';
import PortBerthOps from './pages/operations/PortBerthOps';
import VesselCompatibility from './pages/operations/VesselCompatibility';
import AlertsRisks from './pages/operations/AlertsRisks';
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
        
        <Route path='/operations/dashboard' element={<ProtectedRoute><motion.div {...pageTransition}><OperationsOverview /></motion.div></ProtectedRoute>} />
        <Route path='/operations/fleet' element={<ProtectedRoute><motion.div {...pageTransition}><LiveFleetTracking /></motion.div></ProtectedRoute>} />
        <Route path='/operations/ports' element={<ProtectedRoute><motion.div {...pageTransition}><PortBerthOps /></motion.div></ProtectedRoute>} />
        <Route path='/operations/vessels' element={<ProtectedRoute><motion.div {...pageTransition}><VesselCompatibility /></motion.div></ProtectedRoute>} />
        <Route path='/operations/alerts' element={<ProtectedRoute><motion.div {...pageTransition}><AlertsRisks /></motion.div></ProtectedRoute>} />
        <Route path='/analyst/dashboard' element={<ProtectedRoute><motion.div {...pageTransition}><AnalystOverview /></motion.div></ProtectedRoute>} />
        <Route path='/analyst/forecasts' element={<ProtectedRoute><motion.div {...pageTransition}><FreightForecasting /></motion.div></ProtectedRoute>} />
        <Route path='/analyst/simulation' element={<ProtectedRoute><motion.div {...pageTransition}><WhatIfSimulation /></motion.div></ProtectedRoute>} />
        <Route path='/analyst/routes' element={<ProtectedRoute><motion.div {...pageTransition}><RouteMarketAnalysis /></motion.div></ProtectedRoute>} />
        <Route path='/analyst/model-performance' element={<ProtectedRoute><motion.div {...pageTransition}><ModelPerformance /></motion.div></ProtectedRoute>} />
        <Route path='/analyst/early-warnings' element={<ProtectedRoute><motion.div {...pageTransition}><EarlyWarnings /></motion.div></ProtectedRoute>} />
        <Route path='/decision-maker/dashboard' element={<ProtectedRoute><motion.div {...pageTransition}><DecisionMakerDashboard /></motion.div></ProtectedRoute>} />
        <Route path='/decision-maker/recommendations' element={<ProtectedRoute><motion.div {...pageTransition}><AIRecommendations /></motion.div></ProtectedRoute>} />
        <Route path='/decision-maker/chartering' element={<ProtectedRoute><motion.div {...pageTransition}><CharteringDecisions /></motion.div></ProtectedRoute>} />
        <Route path='/decision-maker/contracts' element={<ProtectedRoute><motion.div {...pageTransition}><ContractStrategies /></motion.div></ProtectedRoute>} />
        <Route path='/decision-maker/approvals' element={<ProtectedRoute><motion.div {...pageTransition}><Approvals /></motion.div></ProtectedRoute>} />
        <Route path='/management/dashboard' element={<ProtectedRoute><motion.div {...pageTransition}><ManagementDashboard /></motion.div></ProtectedRoute>} />
        <Route path='/management/roi' element={<ProtectedRoute><motion.div {...pageTransition}><ROISavings /></motion.div></ProtectedRoute>} />
        <Route path='/management/performance' element={<ProtectedRoute><motion.div {...pageTransition}><Performance /></motion.div></ProtectedRoute>} />
        <Route path='/management/audit-logs' element={<ProtectedRoute><motion.div {...pageTransition}><AuditLogs /></motion.div></ProtectedRoute>} />
        <Route path='/management/governance' element={<ProtectedRoute><motion.div {...pageTransition}><Governance /></motion.div></ProtectedRoute>} />
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
