import React, { useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { Policy, User } from "../types/types";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string): boolean => {
    if (email === "customer@demo.com" && password === "1234") {
      setUser({
        id: 1,
        name: "John",
        email,
        password,
        role: "Customer",
        myPolicies: [],
      });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  const buyPolicy = (policy: Policy) => {
    if (user) {
      setUser({ ...user, myPolicies: [...user.myPolicies, policy] });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, buyPolicy }}>
      {children}
    </AuthContext.Provider>
  );
};
