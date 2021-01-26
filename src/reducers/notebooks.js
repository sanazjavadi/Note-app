/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api';

const user = localStorage.getItem('user');
const parsedUser = user ? JSON.parse(user) : {};

export const getNoteBooks = createAsyncThunk('get/notebooks', () => {
    const response = instance
        .get(`/v1/user/${parsedUser.id}/notebooks`)
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            return err.response || err;
        });

    return response;
});

export const CreateNoteBook = createAsyncThunk('create/notebook', (data) => {
    const response = instance
        .post(`/v1/user/${parsedUser.id}/notebooks`, data)
        .then((res) => {
            return res.data.data;
        })
        .catch((error) => {
            return error.response || error;
        });

    return response;
});

export const DeleteNoteBook = createAsyncThunk('delete/notebook', (NoteBookId) => {
    const response = instance
        .delete(`/v1/user/${parsedUser.id}/notebooks/${NoteBookId}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err.response || err;
        });

    return response;
});

const notebookSlice = createSlice({
    name: 'notebooks',
    initialState: [],
    reducers: {
        duplicateNote: (state, action) => {
            const duplicate = state.find((note) => note._id === action.payload);
            state = state.push({
                id: duplicate._id + 1,
                name: `copy of (${duplicate.name})`,
            });
        },
    },
    extraReducers: {
        [getNoteBooks.fulfilled]: (state, action) => {
            return action.payload;
        },
        [CreateNoteBook.fulfilled]: (state, action) => {
            return [...state, action.payload];
        },
    },
});

export const { duplicateNote } = notebookSlice.actions;
export const notebooksState = (state) => state.notebooks;
export default notebookSlice.reducer;
