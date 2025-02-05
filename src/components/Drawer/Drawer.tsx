import React from 'react';
import { useNavigate } from "react-router-dom";
import {
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader
} from 'reactstrap';
import { MdMenu } from "react-icons/md";
import './Drawer.css'

interface ChildComponentProps {
    drawerToggle: (state: boolean) => void;
    state:boolean;
}

const Dashboard: React.FC<ChildComponentProps> = ({ drawerToggle, state }) => {
  const navigate = useNavigate();

    return (
        <Offcanvas
            backdrop={true}
            isOpen={state}
            toggle={()=>drawerToggle(false)}
        >
            <OffcanvasHeader>
                DRAWER SIDEBAR
            </OffcanvasHeader>
            <OffcanvasBody style={{padding:0}}>
                <div className='lokal-drawer-item' onClick={()=>{
                    navigate("/main");
                    drawerToggle(false)
                }}>
                    <div>
                        Go to main
                    </div>
                    <MdMenu size={22} />
                </div>
                <div className='lokal-drawer-item' onClick={()=>{
                    navigate("/main/button");
                    drawerToggle(false)
                }}>
                    <div>
                        Go to button
                    </div>
                    <MdMenu size={22} />
                </div>
                <div className='lokal-drawer-item' onClick={()=>{
                    navigate("/main/typography");
                    drawerToggle(false)
                }}>
                    <div>
                        Go to typography
                    </div>
                    <MdMenu size={22} />
                </div>
                <div className='lokal-drawer-item' onClick={()=>{
                    navigate("/main/form-input");
                    drawerToggle(false)
                }}>
                    <div>
                        Go to form input
                    </div>
                    <MdMenu size={22} />
                </div>
            </OffcanvasBody>
        </Offcanvas>
    );
};

export default Dashboard;
