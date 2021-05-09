import { combineReducers } from "redux";
import authState, {AuthState} from "./authState";
import messageState, {MessageState} from "./messageState";

export interface RootStore {
    messageState: MessageState
    authState: AuthState
}

export const rootReducer = combineReducers({
    authState,
    messageState,
});
