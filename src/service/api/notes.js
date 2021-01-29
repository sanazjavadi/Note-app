/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { instance, USER_TOKEN } from '.';

export const createNoteService = (payload) => {
    return instance
        .post(`/v1/user/${USER_TOKEN.id}/notebooks/${payload.id}/note`, payload.data)
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            return err.response || err;
        });
};

export const getNotesService = (NoteBookId) => {
    return instance
        .get(`/v1/user/${USER_TOKEN.id}/notebooks/${NoteBookId}/note`)
        .then((res) => {
            return res.data.data;
        })
        .catch((error) => error.response || error);
};

export const deleteNoteService = (NoteId) => {
    return instance
        .delete(`/v1/user/${USER_TOKEN.id}/note/${NoteId}`)
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            return err.response || err;
        });
};
