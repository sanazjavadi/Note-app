/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const notebookSlice = createSlice({
    name: 'notebooks',
    initialState: [
        {
            id: 1,
            title: 'example',
            pages: [],
        },
    ],
    reducers: {
        addNewNote: (state, action) => {
            state = state.push({
                id: action.payload.id,
                title: action.payload.title,
                pages: action.payload.pages,
            });
        },
        removeNote: (state, action) => {
            state = state.filter((note) => note.id !== action.payload);

            return state;
        },
        duplicateNote: (state, action) => {
            const duplicate = state.find((note) => note.id === action.payload);
            state = state.push({
                id: duplicate.id + 1,
                title: `copy of (${duplicate.title})`,
            });
        },

        editNote: (state, action) => {
            state = state.map((note) => {
                if (note.id !== action.payload.id) {
                    return note;
                }
                return action.payload;
            });

            return state;
        },
        addPages: (state, action) => {
            const newpage = state.find((note) => note.id === action.payload.id);
            newpage.pages.push(action.payload.txtArea);
            state = state.map((note) => {
                if (note.id === newpage.id) {
                    return newpage;
                }

                return note;
            });
        },
    },
});

export const { addNewNote, removeNote, duplicateNote, addPages } = notebookSlice.actions;
export const notebooksState = (state) => state.notebooks;
export default notebookSlice.reducer;
