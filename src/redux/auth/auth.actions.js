import axios from "axios";
import { LOGIN, LOGOUT } from "./auth.types";

export const login = (data) => async (dispatch) => {
    const res = await axios.post('https://reqres.in/api/login', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    dispatch({ type: LOGIN, payload: res.data });
}

export const logout = () => ({ type: LOGOUT })