import axios from "axios";
import {authHeader} from "./auth-header";

const API_URL = 'http://localhost:8089/api/user';

export const getUserById = (id: number) => {
    return axios.get(API_URL + `?id=${id}`, {headers: authHeader()})
}
