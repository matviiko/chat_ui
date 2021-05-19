import {User} from "./auth.service";

export const authHeader = () => {
    const user: User = JSON.parse(localStorage.getItem('user') as string);

    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
    } else {
        return {};
    }
}
