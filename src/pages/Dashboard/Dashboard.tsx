import React, { useState } from 'react';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import NavHeader from "../../components/NavHeader/NavHeader";
import Drawer from "../../components/Drawer/Drawer";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import FormInput from "../FormInput/FormInput";
import {
  Container,
} from 'reactstrap';
import './Dashboard.css'

interface User {
  [key: string]: any;
}

const DashboardMain = () => <h1>Dashboard main</h1>;

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const rawUserData = localStorage.getItem("user");
  const userData: User | null = rawUserData ? JSON.parse(rawUserData) : null;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggle = (state:boolean):void => {
    setDrawerOpen(state)
  }

  return (
    <div>
      <NavHeader drawerToggle={drawerToggle} />
      <Container
        fluid
        style={{
          paddingLeft:'100px',
          paddingRight:'100px'
        }}
      >
        <Routes>
          <Route path="/" element={<DashboardMain />} />
          <Route path="/button" element={<Button />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/form-input" element={<FormInput />} />
        </Routes>
      </Container>
      <Drawer drawerToggle={drawerToggle} state={drawerOpen} />
    </div>
  );
};

export default Dashboard;
