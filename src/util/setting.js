import axios from 'axios';
export const DOMAIN = 'https://movienew.cybersoft.edu.vn'

export const KEY_TOKEN_CYBERSOFT = 'TokenCybersoft';

export const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMS8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg2ODQ4MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODgzMjQwMH0.x2aYBurEV6HW_u5m4Fhmr7bbp60q1hcW3_KcQ6nrySI'




//Cấu hình interceptor cho axios (Tất cả request gọi = axios đều được cấu hình) (1 dự án làm 1 duy nhất)
export const http = axios.create({
    baseURL:DOMAIN,
    timeout:30000,
});

http.interceptors.request.use((config)=>{
    config.headers = {
        ...config.headers,
        [KEY_TOKEN_CYBERSOFT]:TOKEN_CYBERSOFT,
        // 'Authorization': localStorage.getItem(ACCESS_TOKEN)  //Token mà người dùng đăng nhập
    }
    return config;
}, (errors) => {
    return Promise.reject(errors)
})
