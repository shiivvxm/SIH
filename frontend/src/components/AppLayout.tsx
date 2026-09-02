import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/planner', icon: 'sailing', label: 'Voyage Planner' },
    { path: '/forecast', icon: 'query_stats', label: 'Freight Forecast' },
    { path: '/intelligence', icon: 'anchor', label: 'Vessel & Port' },
    { path: '/contract', icon: 'contract', label: 'Contract Strategy' },
    { path: '/risk', icon: 'security', label: 'Risk Center' },
    { path: '/simulator', icon: 'model_training', label: 'Scenario Simulator' },
    { path: '/reports', icon: 'description', label: 'Reports' },
  ];

  return (
    <div className="flex w-full h-full min-h-screen bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-primary-container z-50 flex flex-col border-r border-outline/10">
        <div className="p-6 flex items-center gap-3 mb-4">
          <Logo className="h-8" />
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-on-primary/10 text-on-primary border-l-4 border-primary-fixed'
                    : 'text-secondary-fixed-dim hover:bg-on-primary/5 hover:text-on-primary'
                }`}
              >
                <span className="material-symbols-outlined mr-3 text-[20px]">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto border-t border-outline/10 p-6 space-y-4">
          <div className="flex items-center gap-2 text-label-caps text-secondary-fixed-dim">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Systems Operational
          </div>
          <div className="flex items-center gap-3">
            <img 
              alt="Profile" 
              className="w-10 h-10 rounded-full border border-outline/20 object-cover" 
              src={`https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=0D8ABC&color=fff`} 
            />
            <div className="overflow-hidden">
              <p className="text-on-primary text-body-sm font-semibold truncate">{user?.name || 'User'}</p>
              <p className="text-secondary-fixed-dim text-[11px] uppercase tracking-wider">{user?.role || 'Enterprise Access'}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 pl-72 flex flex-col min-h-screen">
        {/* Header */}
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl border-b border-outline-variant z-40 flex items-center justify-between px-8">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-label-caps text-on-surface-variant">Project ID</span>
              <span className="text-body-sm font-semibold text-on-surface">SIH26006</span>
            </div>
            <div className="h-8 w-[1px] bg-outline-variant"></div>
            <div className="flex flex-col">
              <span className="text-label-caps text-on-surface-variant">Organization</span>
              <span className="text-body-sm font-semibold text-on-surface">Ministry of Steel</span>
            </div>
          </div>
          <div className="flex items-center gap-5 text-on-surface-variant">
            <button className="hover:text-primary transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="hover:text-primary transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button onClick={handleLogout} className="hover:text-error transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined">logout</span>
              <span className="text-sm font-medium">Sign Out</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 mt-16 p-4 md:p-8 lg:p-12 relative">
          {children}
        </main>
      </div>
    </div>
  );
}
