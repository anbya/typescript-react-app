import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import AuthRoutes from "./routes/AuthRoutes";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<AuthRoutes />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
