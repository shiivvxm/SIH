import React, { createContext, useContext, useState } from 'react';

type RoleType = 'Operations Team' | 'Analyst' | 'Decision Maker' | 'Management';
type User = { name: string; email: string; role: RoleType } | null;

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  login: () => void;
  logout: () => void;
  switchRole: (role: RoleType) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(() => {
    const saved = sessionStorage.getItem('freightiq_auth');
    return saved ? JSON.parse(saved) : null;
  });

  const login = () => {
    const demoUser: User = { name: 'Demo User', email: 'demo@freightiq.com', role: 'Operations Team' };
    setUser(demoUser);
    sessionStorage.setItem('freightiq_auth', JSON.stringify(demoUser));
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('freightiq_auth');
  };

  const switchRole = (role: RoleType) => {
    if (user) {
      const updatedUser = { ...user, role };
      setUser(updatedUser);
      sessionStorage.setItem('freightiq_auth', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
