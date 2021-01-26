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
            return res.data.data;
        })
        .catch((error) => error.response || error);
});

export const createNote = createAsyncThunk('create/note', (payload) => {
    const response = instance
        .post(`/v1/user/${parsedUser.id}/notebooks/${payload.id}/note`, payload.data)
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            return err.response || err;
        });
    return response;
});

const notesSlice = createSlice({
    name: 'notes',
    initialState: {},
    extraReducers: {
        [getNotes.fulfilled]: (state, action) => {
            return action.payload;
        },
        [createNote.fulfilled]: (state, action) => {
            return [...state, action.payload];
        },
    },
});

export const notesState = (state) => state.notes;
export default notesSlice.reducer;
