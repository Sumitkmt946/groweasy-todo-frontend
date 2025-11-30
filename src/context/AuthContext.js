import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api/client";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // app start -> token load
  useEffect(() => {
    const loadToken = async () => {
      try {
        const savedToken = await AsyncStorage.getItem("token");
        if (savedToken) {
          setToken(savedToken);
          api.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
          await fetchProfile();
        }
      } catch (e) {
        console.log("Error loading token", e);
      } finally {
        setLoading(false);
      }
    };
    loadToken();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await api.get("/auth/profile");
      setProfile(res.data);
    } catch (err) {
      console.log("Profile fetch error", err.response?.data || err.message);
    }
  };

  const login = async (email, password) => {
    const res = await api.post("/auth/login", { email, password });
    const t = res.data.access_token;
    setToken(t);
    api.defaults.headers.common["Authorization"] = `Bearer ${t}`;
    await AsyncStorage.setItem("token", t);
    await fetchProfile();
  };

  const signup = async (name, email, password) => {
    await api.post("/auth/signup", { name, email, password });
    // signup ke baad direct login kara denge
    await login(email, password);
  };

  const logout = async () => {
    setToken(null);
    setProfile(null);
    delete api.defaults.headers.common["Authorization"];
    await AsyncStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ token, profile, login, signup, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
