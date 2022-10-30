import { LOGIN, LOGOUT } from "./auth.types";

const token = localStorage.getItem('token') || '';

const initialState = {
    token: token,
    isAuth: token ? true : false,
}

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                token: payload.token,
                isAuth: true,
            }
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: '',
                isAuth: false,
            }
        default:
            return state;
    }
}