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
            return res.data;
        })
        .catch((error) => error.response || error);

    return response;
});

export const DeleteNoteBook = createAsyncThunk('delete/notebook', (NoteBookId) => {
    const response = instance
        .delete(`/v1/user/${parsedUser.id}/notebooks/${NoteBookId}`)
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err.response || err);
        });

    return response;
});

const notebookSlice = createSlice({
    name: 'notebooks',
    initialState: [],

    //     duplicateNote: (state, action) => {
    //         const duplicate = state.find((note) => note.id === action.payload);
    //         state = state.push({
    //             id: duplicate.id + 1,
    //             title: `copy of (${duplicate.title})`,
    //         });
    //     },

    extraReducers: {
        [getNoteBooks.fulfilled]: (state, action) => {
            return action.payload;
        },
        [CreateNoteBook.fulfilled]: (state, action) => {
            const newState = action.payload;
            return { ...state, newState };
        },
    },
});

export const { addNewNote, removeNote, duplicateNote, addPages } = notebookSlice.actions;
export const notebooksState = (state) => state.notebooks;
export default notebookSlice.reducer;
