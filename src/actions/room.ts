import {
    GET_ROOM_SUCCESS
} from "../actions/types";
import {Dispatch} from "redux";
import RoomService from "../services/room.service";

export const getAllRooms = (id: number) => (dispatch: Dispatch): Promise<void> => {
    return RoomService.getAllRoomsByIdUser(id)
        .then(
            (responce) => {
                dispatch({
                    type: GET_ROOM_SUCCESS,
                    payload: { rooms: responce.data},
                })
            }, (error) => console.error(error)
        );
}
