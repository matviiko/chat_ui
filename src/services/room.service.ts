import axios from "axios";
import {authHeader} from "./auth-header";
import { URL } from "../assets/api"
import {User} from "./auth.service";

const API_URL = `${URL}/api/room`;

export interface ICreateRoom {
    name: string;
    connections: Array<number>;
}

export interface Room {
    id: number;
    name: string;
    connections: Array<User>;
    createdAt: string;
}

const createRoom = (request: ICreateRoom) => {
    return axios.post<Room>(API_URL + '/create', request, {headers: authHeader()});
}

const getAllRoomsByIdUser = (id: number) => {
    return axios.get<Array<Room>>(API_URL + `/all?userId=${id}`, {headers: authHeader()});
}


export default {createRoom, getAllRoomsByIdUser};
