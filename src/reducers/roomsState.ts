import { GET_ROOM_SUCCESS, ROOMS_DESTROY } from "../actions/types"
import {AnyAction} from "redux";
import {Room} from "../services/room.service";

export interface RoomsState {
    rooms: Array<Room> | Array<null>;
}

const initialState: RoomsState = {
    rooms: []
}

export default function (state = initialState, action: AnyAction): RoomsState {
    const { type, payload } = action;

    switch (type) {
        case GET_ROOM_SUCCESS:
            return {
                ...state,
                rooms: payload.rooms,
            };
        case ROOMS_DESTROY:
            return {
                ...state,
                rooms: []
            };
        default:
            return state;
    }
}
