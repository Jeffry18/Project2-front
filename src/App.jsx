import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import DashboardLayout from "./components/layout/DashboardLayout";
import RoleRoute from "./routes/RoleRoute";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import Analytics from "./pages/Analytics";
import Organization from "./pages/Organization";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Protected Layout */}

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/tickets"
              element={<Tickets />}
            />

            <Route
              path="/analytics"
              element={
                <RoleRoute roles={["admin"]}>
                  <Analytics />
                </RoleRoute>
              }
            />

            <Route
              path="/organization"
              element={
                <RoleRoute roles={["admin"]}>
                  <Organization />
                </RoleRoute>
              }
            />

          </Route>
        </Route>

        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;