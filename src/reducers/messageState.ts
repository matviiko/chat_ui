import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";
import {AnyAction} from "redux";

export interface MessageState {
    message?: string;
}

const initialState: MessageState = {};

export default function (state = initialState, action: AnyAction): MessageState {
    const { type, payload } = action;

    switch (type) {
        case SET_MESSAGE:
            return { message: payload };

        case CLEAR_MESSAGE:
            return { message: "" };

        default:
            return state;
    }
}
