import React from "react";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>About Page</h1>
            <button onClick={()=>navigate("/dashboard")}>Go to dashboard</button>
        </div>
    );
};

export default About;
