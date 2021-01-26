/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../api';

const user = localStorage.getItem('user');
const parsedUser = user ? JSON.parse(user) : {};

export const getNotes = createAsyncThunk('get/notes', (NoteBookId) => {
    return instance
        .get(`/v1/user/${parsedUser.id}/notebooks/${NoteBookId}/note`)
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((error) => console.log(error.response || error));
});

export const createNote = createAsyncThunk('create/note', (NoteBookId, data) => {
    const response = instance
        .post(`/v1/user/${parsedUser.id}/notebooks/${NoteBookId}/note`, data)
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err.response || err);
            return err.response || err;
        });
    return response;
});

const notesSlice = createSlice({
    name: 'notes',
    initialState: [],
    extraReducers: {
        [getNotes.fulfilled]: (state, action) => {
            return action.payload;
        },
        [createNote.fulfilled]: (state, action) => {
            state = action.state;
        },
    },
});

export const notesState = (state) => state.notes;
export default notesSlice.reducer;
