import {SHOW_OR_HIDE_ROOMS_LIST} from "../actions/types"
import {AnyAction} from "redux";

export interface SidebarState {
    isShowRoomsList: boolean;
}

const initialState:SidebarState = {
    isShowRoomsList: false
}

export default function (state = initialState, action: AnyAction): SidebarState {
    const { type, payload } = action;

    switch (type) {
        case SHOW_OR_HIDE_ROOMS_LIST:
            return {
                ...state,
                isShowRoomsList: !state.isShowRoomsList,
            };
        default:
            return state;
    }
}
