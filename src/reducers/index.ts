import { combineReducers } from "redux";
import authState, {AuthState} from "./authState";
import messageState, {MessageState} from "./messageState";
import roomsState, {RoomsState} from "./roomsState";

export interface RootStore {
    messageState: MessageState;
    authState: AuthState;
    roomsState: RoomsState
}

export const rootReducer = combineReducers({
    authState,
    messageState,
    roomsState
});
