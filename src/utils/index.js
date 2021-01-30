/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import { instance } from '../service/api';

export const applyTheme = (theme) => {
    Object.keys(theme).forEach((key) => {
        const value = theme[key];
        document.documentElement.style.setProperty(key, value);
    });
};

export const uploadImage = (file) => {
    const formData = new FormData();
    formData.append('jetscanFile', file);

    instance
        .post('/v1/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.error({ err });
        });
};
