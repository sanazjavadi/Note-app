/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { instance } from '.';

export const signUpService = (data) => {
    return instance
        .post('/v1/auth/register', data)
        .then((res) => {
            localStorage.setItem('token', res.data.token.accessToken);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            return res.data;
        })
        .catch((err) => err.response);
};

export const logInService = (data) => {
    return instance
        .post('/v1/auth/login', data)
        .then((res) => {
            localStorage.setItem('token', res.data.token.accessToken);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            return res.data;
        })
        .catch((err) => err.response);
};
