import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginView from "./views/LoginView";
import ProfileView from "./views/ProfileView";
import DashboardView from "./views/DashboardView";
import Layout from "./components/Layout";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginView />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/profile" replace />} />
            <Route path="profile" element={<ProfileView />} />
            <Route
              path="dashboard"
              element={
                <ProtectedRoute requiredRole="admin">
                  <DashboardView />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/profile" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
