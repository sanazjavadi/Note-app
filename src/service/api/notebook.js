/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { instance, USER_TOKEN } from '.';

export const getNotebooksService = () => {
    return instance
        .get(`/v1/user/${USER_TOKEN.id}/notebooks`)
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            return err.response || err;
        });
};

export const createNotebookService = (data) => {
    return instance
        .post(`/v1/user/${USER_TOKEN.id}/notebooks`, data)
        .then((res) => {
            return res.data.data;
        })
        .catch((error) => {
            return error.response || error;
        });
};

export const updateNotebookService = (data, currentNoteBook) => {
    return instance
        .put(`/v1/user/${USER_TOKEN.id}/notebooks/${currentNoteBook.id}`, data)
        .then((res) => {
            return res.data.data;
        })
        .catch((error) => error.response || error);
};

export const deleteNotebokService = (NoteBookId) => {
    return instance
        .delete(`/v1/user/${USER_TOKEN.id}/notebooks/${NoteBookId}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err.response || err;
        });
};
