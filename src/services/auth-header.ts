import {LoginResponse} from "./auth.service";

export const authHeader = () => {
    const user: LoginResponse = JSON.parse(localStorage.getItem('user') as string);

    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
    } else {
        return {};
    }
}
