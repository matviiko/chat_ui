import {
    SHOW_OR_HIDE_ROOMS_LIST
} from "./types";
import {Dispatch} from "redux";

export const showRoomList = () => (dispatch: Dispatch) => {
    dispatch({type: SHOW_OR_HIDE_ROOMS_LIST,})
}
