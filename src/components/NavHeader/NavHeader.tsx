import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  UncontrolledDropdown
} from 'reactstrap';
import "./NavHeader.css";

interface User {
  [key: string]: any;
}

interface ChildComponentProps {
  drawerToggle: (state: boolean) => void;  // Fungsi yang dipassing
}

const NavHeader: React.FC<ChildComponentProps> = ({ drawerToggle }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const rawUserData = localStorage.getItem("user");
  const userData: User | null = rawUserData ? JSON.parse(rawUserData) : null;

  return (
    <Navbar
      color={'light'}
      style={{
        paddingLeft:'100px',
        paddingRight:'100px'
      }}
    >
      <NavbarBrand onClick={()=>drawerToggle(true)}>
        <Button color="success">
          <MdMenu size={30} />
        </Button>
      </NavbarBrand>
      <Nav className="ms-auto">
        {/* <NavItem className='nav-item-container' onClick={()=>navigate("/main")}>
          <a>Item 1</a>
        </NavItem>
        <NavItem className='nav-item-container' onClick={()=>navigate("/main")}>
          <a>Item 2</a>
        </NavItem> */}
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret className='nav-dropdown-link'>
            Welcome, {userData?.email}
          </DropdownToggle>
          <DropdownMenu right>
            {/* <DropdownItem onClick={()=>navigate("/main")}>Option 1</DropdownItem>
            <DropdownItem onClick={()=>navigate("/main")}>Option 2</DropdownItem>
            <DropdownItem divider /> */}
            <DropdownItem onClick={logout}>Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
};

export default NavHeader;
