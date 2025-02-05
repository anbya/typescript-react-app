import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
    Box,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Button,
    Typography,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CryptoJS from 'crypto-js';
import { proceedLogin } from "../services/auth.service";
import axiosInstance from '../api//axiosInstance'; 

interface ApiResponse {
    [key: string]: any;
}

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isAuthenticated, login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated === 'true') {
        navigate("/main");
        }
    }, [isAuthenticated, navigate]);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
    const encryptData = (data: string): string => {
        return CryptoJS.AES.encrypt(data, `${process.env.REACT_APP_SECRET_KEY}`).toString();
    };

    const submitLogin = async () => {
        if(email == null || email == ''){
            alert('Email cannot be empty!');
        } else if (password == null || password == ''){
            alert('Password cannot be empty!');
        } else {
            try {
                const loginData = {
                    email:email,
                    password:encryptData(password)
                }
                const response = await proceedLogin(loginData) as ApiResponse;
                if(response.data.success == true){
                    const userParams = {
                        params:{
                            id:response.data.user.id
                        }
                    }
                    const userData = await axiosInstance.get('/users', userParams) as ApiResponse;
                    localStorage.setItem('user',JSON.stringify(userData.data.data[0]))
                    login()
                    alert('Login succeed.');
                } else {
                    alert('Login failed!');
                }
            } catch (error) {
                alert('Error on login!');
                console.error(error);
            }
        }
    }

    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
                height:'100vh',
                width:"100vw"
            }}
        >
            <Box>
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                        width:"100%"
                    }}
                    py={1}
                >
                    <h1>Login Page</h1>
                </Box>
                <Box
                    py={1}
                >
                    <Typography variant="h6" gutterBottom>
                    Email
                    </Typography>
                    <OutlinedInput
                        fullWidth={true}
                        type={'text'}
                        size="small"
                        value={email}
                        onChange={(value)=>setEmail(value.target.value)}
                    />
                </Box>
                <Box
                    py={1}
                >
                    <Typography variant="h6" gutterBottom>
                    Password
                    </Typography>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        fullWidth={true}
                        type={showPassword ? 'text' : 'password'}
                        size="small"
                        value={password}
                        onChange={(value)=>setPassword(value.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                            <IconButton
                                aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                                }
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                        }
                    />
                </Box>
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                        width:"100%"
                    }}
                    py={1}
                >
                    <Button fullWidth variant="contained" onClick={()=>submitLogin()}>Login</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
