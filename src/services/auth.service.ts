import axios from "axios";

interface RegisterRequest {
    user: string;
    email: string;
    password: string;
    role: Array<string>;
    message?: string;
}

interface LoginRequest {
    user: string;
    password: string;
}

// NEED EDIT Interface
export interface User {
    id: number;
    user: string;
    password: string;
    token: string;
    role: Array<Roles | string>;
}

export interface Roles {
    id: number;
    name: string;
}

enum ROLE {
    USER = "ROLE_USER",
    ADMIN = "ROLE_ADMIN"
}

const API_URL = 'http://localhost:8089/api/auth/';

 const register = (username: string, email: string, password: string) => {
    return axios.post<RegisterRequest>(API_URL + 'signup', {
        username,
        email,
        password,
        role: [ROLE.USER]
    })
};

 const login = (username: string, password: string) => {
    return axios.post<User>(API_URL + 'signin', {
        username,
        password,
    }).then((response): User => {
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    })
};

 const logout = () => {
    localStorage.removeItem("user");
};

 const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user') as string);
};

export default {login, logout, getCurrentUser, register};

