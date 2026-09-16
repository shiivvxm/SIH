import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import OperationsDashboard from '../components/dashboards/OperationsDashboard';
import AnalystDashboard from '../components/dashboards/AnalystDashboard';
import DecisionMakerDashboard from '../components/dashboards/DecisionMakerDashboard';
import ManagementDashboard from '../components/dashboards/ManagementDashboard';

export default function Dashboard() {
  const { user } = useAuth();

  switch (user?.role) {
    case 'Operations Team':
      return <Navigate to='/operations/dashboard' replace />;
    // case 'Operations Team' fallthrough removed
      
    case 'Analyst':
      return <Navigate to='/analyst/dashboard' replace />;
    // case 'Analyst' fallthrough removed
      
    case 'Decision Maker':
      return <Navigate to='/decision-maker/dashboard' replace />;
    // case 'Decision Maker' fallthrough removed
      return <DecisionMakerDashboard />;
    case 'Management':
      return <Navigate to='/management/dashboard' replace />;
    // case 'Management' fallthrough removed
      
    default:
      return <OperationsDashboard />;
  }
}
