import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { GuidedIntake } from './pages/GuidedIntake';
import { StatusTracker } from './pages/StatusTracker';
import { DocumentCenter } from './pages/DocumentCenter';
import { ReviewIntake } from './pages/ReviewIntake';
import { TaxSummary } from './pages/TaxSummary';
import { EFileAuthorization } from './pages/EFileAuthorization';
import { TaxInsights } from './pages/TaxInsights';
import { Settings } from './pages/Settings';
import Layout from './components/Layout';

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>
  );
}

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <LoadingScreen />;
//  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

export function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            // <RequireAuth>
              <Layout currentPage="dashboard">
                <Dashboard />
              </Layout>
            // </RequireAuth>
          }
        />

        <Route
          path="/guided-intake"
          element={
            <RequireAuth>
              <Layout currentPage="guided-intake">
                <GuidedIntake />
              </Layout>
            </RequireAuth>
          }
        />

        <Route
          path="/status"
          element={
            <RequireAuth>
              <Layout currentPage="status">
                <StatusTracker />
              </Layout>
            </RequireAuth>
          }
        />

        <Route
          path="/documents"
          element={
            <RequireAuth>
              <Layout currentPage="documents">
                <DocumentCenter />
              </Layout>
            </RequireAuth>
          }
        />

        <Route
          path="/intake"
          element={
            <RequireAuth>
              <Layout currentPage="intake">
                <ReviewIntake />
              </Layout>
            </RequireAuth>
          }
        />

        <Route
          path="/summary"
          element={
            <RequireAuth>
              <Layout currentPage="summary">
                <TaxSummary />
              </Layout>
            </RequireAuth>
          }
        />

        <Route
          path="/efile"
          element={
            <RequireAuth>
              <Layout currentPage="efile">
                <EFileAuthorization />
              </Layout>
            </RequireAuth>
          }
        />

        <Route
          path="/insights"
          element={
            <RequireAuth>
              <Layout currentPage="insights">
                <TaxInsights />
              </Layout>
            </RequireAuth>
          }
        />

        <Route
          path="/settings"
          element={
            <RequireAuth>
              <Layout currentPage="settings">
                <Settings />
              </Layout>
            </RequireAuth>
          }
        />

        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </AuthProvider>
  );
}
