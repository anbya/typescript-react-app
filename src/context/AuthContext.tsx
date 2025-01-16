import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: string | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated] = useState(localStorage.getItem('login'));

    const login = () => {
        localStorage.setItem('login','true')
        window.location.reload()
    };
    const logout = () => {
        localStorage.setItem('login','false')
        window.location.reload()
    };

    return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
