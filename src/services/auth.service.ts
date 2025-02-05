import axios from "axios";

axios.defaults.withCredentials = true;

interface DataToPass {
    [key: string]: any;
}

interface RefreshTokenResponse {
  success: boolean;
}


export const proceedLogin = async (params:DataToPass) => {
    try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/auth/web-login`, params
        );
        return response;
    } catch (error) {
        return error
    }
};

// Fungsi untuk melakukan refresh token
export const proceedRefreshToken = async () => {
  const response = await axios.get<RefreshTokenResponse>(
    `${process.env.REACT_APP_API_URL}/auth/refresh-token`
  );

  return response.data;
};
