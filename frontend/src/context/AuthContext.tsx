import React, { createContext, useContext, useState, useEffect } from 'react';

type User = { name: string; email: string; role: string } | null;

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(() => {
    const saved = sessionStorage.getItem('freightiq_auth');
    return saved ? JSON.parse(saved) : null;
  });

  const login = () => {
    const demoUser = { name: 'Demo User', email: 'demo@ministryofsteel.gov.in', role: 'Logistics Manager' };
    setUser(demoUser);
    sessionStorage.setItem('freightiq_auth', JSON.stringify(demoUser));
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('freightiq_auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
