import { combineReducers } from "redux";
import authState, {AuthState} from "./authState";
import messageState, {MessageState} from "./messageState";
import roomsState, {RoomsState} from "./roomsState";
import sidebarState, {SidebarState} from "./sidebarState";

export interface RootStore {
    messageState: MessageState;
    authState: AuthState;
    roomsState: RoomsState;
    sidebarState: SidebarState;
}

export const rootReducer = combineReducers({
    authState,
    messageState,
    roomsState,
    sidebarState
});
