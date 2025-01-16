import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={()=>navigate("/about")}>Go to about</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
