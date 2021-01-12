/* eslint-disable import/export */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

// Set config defaults when creating the instance
export const instance = axios.create({
    baseURL: 'http://localhost:3030/',
});

export const AUTH_TOKEN = localStorage.getItem('token');

// Alter defaults after instance has been created
instance.defaults.headers.common.Authorization = AUTH_TOKEN || '';
// Override timeout default for the library
// Now all requests using this instance will wait 2.5 seconds before timing out
instance.defaults.timeout = 2500;

/*
   Authentication
 */

/**
 *
 * @param { user data } data
 *
 * @String name
 * @String email
 * @String password
 *
 */

export const signUp = (data) => {
    return instance
        .post('/v1/auth/register', data)
        .then((res) => {
            localStorage.setItem('token', res.data.accessToken);
        })
        .catch((error) => console.log(error.response || error));
};

// example
// const data = {name: 'sanaz', email: 'sanaz@gmail.com', password: '1234567890'}
// signUp(data)

/**
 *
 * @param { user data } data
 *
 * @String email
 * @String password
 *
 */

export const signIn = (data) => {
    return instance
        .post('/v1/auth/login', data)
        .then((res) => console.log(res))
        .catch((error) => console.log(error.response || error));
};

// example
// const data = {email: 'sanaz@gmail.com', password: '1234567890'}
// signIn(data)

/*
   NoteBooks
 */

/**
 *
 * Get All NoteBooks of User
 *
 * @param user_id
 *
 */

export const GetNoteBooks = (user_id) => {
    return instance
        .get(`/v1/user/${user_id}/notebooks`)
        .then((res) => console.log(res))
        .catch((error) => console.log(error.response || error));
};

// example
// const data = '5ff5f2b73670df60f2061fdb'
// GetNoteBooks(data)

/**
 *
 * Create NoteBook
 *
 * @param data && user_id
 *
 */

export const CreateNoteBooks = (data, user_id) => {
    return instance
        .post(`/v1/user/${user_id}/notebooks`, data)
        .then((res) => console.log(res))
        .catch((error) => console.log(error.response || error));
};

// example
// const data = { name: "some sanaz" }
// const user_id = '5ff5f2b73670df60f2061fdb'
// CreateNoteBooks(data, user_id)

/**
 *
 * Edit NoteBook
 *
 * @param data && user_id && NoteBookId
 *
 */

export const UpdateNoteBooks = (data, user_id, NoteBookId) => {
    return instance
        .put(`/v1/user/${user_id}/notebooks/${NoteBookId}`, data)
        .then((res) => console.log(res))
        .catch((error) => console.log(error.response || error));
};

// example
// const data = { name: "some sanaz joonam" }
// const user_id = '5ff5f2b73670df60f2061fdb'
// const NoteBookId = '5ff5eff33670df60f2061fd6'
// UpdateNoteBooks(data, user_id, NoteBookId)

/**
 *
 * Delete NoteBook
 *
 * @param  user_id && NoteBookId
 *
 */

export const DeleteNoteBooks = (user_id, NoteBookId) => {
    return instance
        .delete(`/v1/user/${user_id}/notebooks/${NoteBookId}`)
        .then((res) => console.log(res))
        .catch((error) => console.log(error.response || error));
};

// example
// const user_id = '5ff5f2b73670df60f2061fdb'
// const NoteBookId = '5ff5eff33670df60f2061fd6'
// DeleteNoteBooks(user_id, NoteBookId)

/*
   Notes
 */

/**
 *
 * Get Notes of NoteBook
 *
 * @param  user_id && NoteBookId
 *
 */

export const GetNotes = (user_id, NoteBookId) => {
    return instance
        .get(`/v1/user/${user_id}/notebooks/${NoteBookId}/note`)
        .then((res) => console.log(res))
        .catch((error) => console.log(error.response || error));
};

// example
// const user_id = '5ff5f2b73670df60f2061fdb'
// const NoteBookId = '5ff5eff33670df60f2061fd6'
// GetNotes(user_id, NoteBookId)

/**
 *
 * Create Note
 *
 * @param data && user_id && NoteBookId
 *
 */

export const CreateNote = (data, user_id, NoteBookId) => {
    return instance
        .post(`/v1/user/${user_id}/notebooks/${NoteBookId}/note`, data)
        .then((res) => console.log(res))
        .catch((error) => console.log(error.response || error));
};

// example
// const data = { title: "some sanaz joonam", data: "", description: "" }
// const user_id = '5ff5f2b73670df60f2061fdb'
// const NoteBookId = '5ff5eff33670df60f2061fd6'
// CreateNote(data, user_id, NoteBookId)

/**
 *
 * Edit Note
 *
 * @param data && user_id && NoteId
 *
 */

export const UpdateeNote = (data, user_id, NoteId) => {
    return instance
        .put(`/v1/user/${user_id}/note/${NoteId}`, data)
        .then((res) => console.log(res))
        .catch((error) => console.log(error.response || error));
};

// example
// const data = { title: "some sanaz joonam", data: "", description: "" }
// const user_id = '5ff5f2b73670df60f2061fdb'
// const NoteId = '5ff5eff33670df60f2061fd6'
// UpdateeNote(data, user_id, NoteId)

/**
 *
 * Delete Note
 *
 * @param  user_id && NoteId
 *
 */

export const DeleteNote = (user_id, NoteId) => {
    return instance
        .delete(`/v1/user/${user_id}/note/${NoteId}`)
        .then((res) => console.log(res))
        .catch((error) => console.log(error.response || error));
};

// example
// const user_id = '5ff5f2b73670df60f2061fdb'
// const NoteId = '5ff5eff33670df60f2061fd6'
// DeleteNote(data, user_id, NoteId)
