import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../actions/types";
import {AnyAction} from "redux";
import {User} from "../services/auth.service";

const user: User  = JSON.parse(localStorage.getItem("user") as string);

export interface AuthState {
    isLoggedIn: boolean;
    user: User | null;
}

const initialState: AuthState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

export default function (state = initialState, action: AnyAction): AuthState {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
}
