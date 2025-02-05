import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

const NotFound = () => <h1>404 Not Found</h1>;

const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/main/*" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
