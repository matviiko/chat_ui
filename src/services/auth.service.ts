import axios, { AxiosResponse } from "axios";

interface RegisterRequest {
    user: string;
    email: string;
    password: string;
    role: Array<string>;
}

interface LoginRequest {
    user: string;
    password: string;
}

// NEED EDIT Interface
export interface LoginResponse {
    id: number;
    user: string;
    password: string;
    token: string;
    role: Array<string>;
}

enum ROLE {
    USER = "ROLE_USER"
}

const API_URL = 'http://localhost:8089/api/auth/';

export const register = (username: string, email: string, password: string) => {
    return axios.post<RegisterRequest>(API_URL + 'signup', {
        username,
        email,
        password,
        role: [ROLE.USER]
    })
};

export const login = (username: string, password: string) => {
    return axios.post<LoginResponse>(API_URL + 'signin', {
        username,
        password,
    }).then((response): LoginResponse => {
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    })
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user') as string);
};

