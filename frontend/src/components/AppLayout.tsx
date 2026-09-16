import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';
import { ChevronDown, Ship, Globe, BarChart2, ShieldAlert, Target, Navigation, FileText, Activity, Compass, Anchor, LayoutDashboard, BrainCircuit, Users } from 'lucide-react';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { user, logout, switchRole } = useAuth();
  const navigate = useNavigate();
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  type RoleType = 'Operations Team' | 'Analyst' | 'Decision Maker' | 'Management';
  const roles: RoleType[] = ['Operations Team', 'Analyst', 'Decision Maker', 'Management'];

  const handleRoleSwitch = (r: RoleType) => {
    switchRole(r);
    setRoleMenuOpen(false);
    if(r === 'Operations Team') navigate('/operations/dashboard'); else if(r === 'Analyst') navigate('/analyst/dashboard'); else if(r === 'Decision Maker') navigate('/decision-maker/dashboard'); else if(r === 'Management') navigate('/management/dashboard'); else navigate('/dashboard');
  };

  const getNavItems = () => {
    switch (user?.role) {
      case 'Operations Team':
        return [
          { path: '/operations/dashboard', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Overview' },
          { path: '/operations/fleet', icon: <Globe className="w-5 h-5" />, label: 'Live Fleet Tracking' },
          { path: '/operations/ports', icon: <Anchor className="w-5 h-5" />, label: 'Port & Berth Ops' },
          { path: '/operations/vessels', icon: <Ship className="w-5 h-5" />, label: 'Vessel Compatibility' },
          { path: '/operations/alerts', icon: <ShieldAlert className="w-5 h-5" />, label: 'Alerts & Risks' },
        ];
      case 'Analyst':
        return [
          { path: '/analyst/dashboard', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Overview' },
          { path: '/analyst/forecasts', icon: <BarChart2 className="w-5 h-5" />, label: 'Freight Forecasting' },
          { path: '/analyst/simulation', icon: <BrainCircuit className="w-5 h-5" />, label: 'What-If Simulation' },
          { path: '/analyst/routes', icon: <Navigation className="w-5 h-5" />, label: 'Route & Market Analysis' },
          { path: '/analyst/model-performance', icon: <Activity className="w-5 h-5" />, label: 'Model Performance' },
          { path: '/analyst/early-warnings', icon: <ShieldAlert className="w-5 h-5" />, label: 'Early Warnings' },
        ];
      case 'Decision Maker':
        return [
          { path: '/decision-maker/dashboard', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Overview' },
          { path: '/decision-maker/recommendations', icon: <Target className="w-5 h-5" />, label: 'AI Recommendations' },
          { path: '/decision-maker/chartering', icon: <Compass className="w-5 h-5" />, label: 'Chartering Decisions' },
          { path: '/decision-maker/contracts', icon: <FileText className="w-5 h-5" />, label: 'Contract Strategies' },
          { path: '/decision-maker/approvals', icon: <Users className="w-5 h-5" />, label: 'Approvals' },
        ];
      case 'Management':
        return [
          { path: '/management/dashboard', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Overview' },
          { path: '/management/roi', icon: <BarChart2 className="w-5 h-5" />, label: 'ROI & Savings' },
          { path: '/management/performance', icon: <Activity className="w-5 h-5" />, label: 'Performance' },
          { path: '/management/audit-logs', icon: <FileText className="w-5 h-5" />, label: 'Audit Logs' },
          { path: '/management/governance', icon: <ShieldAlert className="w-5 h-5" />, label: 'Governance' },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <div className="flex w-full h-full min-h-screen bg-gray-50 text-gray-900 font-sans overflow-x-hidden">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-[#0F172A] z-50 flex flex-col border-r border-gray-800">
        <div className="p-6 flex items-center gap-3 mb-4">
          <Logo className="h-8 text-white" />
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-xl transition-all font-medium text-[14px] ${
                  isActive
                    ? 'bg-white/10 text-white border-l-4 border-[#16B364]'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto border-t border-gray-800 p-6 space-y-4">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            <span className="w-2 h-2 rounded-full bg-[#16B364] animate-pulse"></span>
            Systems Operational
          </div>
          <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
            <img 
              alt="Profile" 
              className="w-10 h-10 rounded-full border border-gray-700 object-cover bg-gray-800" 
              src={`https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=0F172A&color=fff`} 
            />
            <div className="overflow-hidden">
              <p className="text-white text-[13px] font-bold truncate">{user?.name || 'User'}</p>
              <p className="text-gray-400 text-[11px] uppercase tracking-wider font-semibold">{user?.role || 'Access'}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 pl-72 flex flex-col min-h-screen relative">
        {/* Header */}
        <header className="fixed top-0 left-72 right-0 h-20 bg-white/80 backdrop-blur-xl border-b border-gray-200 z-40 flex items-center justify-between px-10">
          <div className="flex items-center gap-8">
            <h1 className="text-[22px] font-bold text-gray-900 tracking-tight">{user?.role} Dashboard</h1>
          </div>
          <div className="flex items-center gap-6 text-gray-500">
            
            {/* Role Switcher */}
            <div className="relative">
              <button 
                onClick={() => setRoleMenuOpen(!roleMenuOpen)}
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-xl text-sm font-bold transition-colors"
              >
                Viewing as: {user?.role}
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {roleMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden py-2 z-50">
                  <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 mb-2">Switch Role Perspective</div>
                  {roles.map(r => (
                    <button 
                      key={r}
                      onClick={() => handleRoleSwitch(r)}
                      className={`w-full text-left px-4 py-2.5 text-sm font-semibold hover:bg-gray-50 transition-colors ${user?.role === r ? 'text-[#16B364]' : 'text-gray-700'}`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="h-8 w-[1px] bg-gray-200"></div>

            <button className="hover:text-gray-900 transition-colors relative">
              <ShieldAlert className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <button onClick={handleLogout} className="hover:text-red-600 transition-colors flex items-center gap-2 text-gray-900 font-bold bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-sm hover:shadow-md">
              Sign Out
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 mt-20 p-8 lg:p-10 relative bg-[#F8FAFC]">
          {children}
        </main>
      </div>
    </div>
  );
}
