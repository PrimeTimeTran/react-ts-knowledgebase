import { useState, useEffect } from "react";

interface AuthState {
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  removeToken: () => void;
}

export const useAuth = (): AuthState => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  const setToken = (token: string) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return { isAuthenticated, setToken, removeToken };
};

export default useAuth;
