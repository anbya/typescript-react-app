import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import ProtectedRoute from "./ProtectedRoute";

const NotFound = () => <h1>404 Not Found</h1>;

const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
