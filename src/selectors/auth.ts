import {RootStore} from "../reducers";
import {User} from "../services/auth.service";

export const getAuthState = (state: RootStore) => state.authState;

export const getIdUser = (state: RootStore): number => {
    const user = state.authState.user as User
    return user.id
};
