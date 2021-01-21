/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api';

const user = JSON.parse(localStorage.getItem('user'));
console.log(user);
export const getNoteBooks = createAsyncThunk('get/notebooks', () => {
    const response = instance
        .get(`/v1/user/${user.id}/notebooks`)
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
        .post(`/v1/user/${user.id}/notebooks`, data)
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((error) => console.log(error.response || error));

    return response;
});

const notebookSlice = createSlice({
    name: 'notebooks',
    initialState: [],
    // reducers: {
    //     addNewNote: (state, action) => {
    //         state = state.push({
    //             id: action.payload.id,
    //             title: action.payload.title,
    //             pages: action.payload.pages,
    //         });
    //     },
    //     removeNote: (state, action) => {
    //         state = state.filter((note) => note.id !== action.payload);

    //         return state;
    //     },
    //     duplicateNote: (state, action) => {
    //         const duplicate = state.find((note) => note.id === action.payload);
    //         state = state.push({
    //             id: duplicate.id + 1,
    //             title: `copy of (${duplicate.title})`,
    //         });
    //     },

    //     editNote: (state, action) => {
    //         state = state.map((note) => {
    //             if (note.id !== action.payload.id) {
    //                 return note;
    //             }
    //             return action.payload;
    //         });

    //         return state;
    //     },
    //     addPages: (state, action) => {
    //         const newpage = state.find((note) => note.id === action.payload.id);
    //         newpage.pages.push(action.payload.txtArea);
    //         state = state.map((note) => {
    //             if (note.id === newpage.id) {
    //                 return newpage;
    //             }

    //             return note;
    //         });
    //     },
    // },

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
