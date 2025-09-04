import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/index";
import Dashboard from "../components/Dashboard/index";
import Analytics from "../components/Analytics/index";
import Transactions from "../components/Transactions/index";
import LoginPage from "../components/Auth/LoginPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Protected Routes - All require authentication */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />
      <Route
        path="/transactions"
        element={
          <ProtectedRoute>
            <Transactions />
          </ProtectedRoute>
        }
      />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
