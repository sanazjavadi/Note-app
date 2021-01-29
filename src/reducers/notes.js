/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createNoteService, getNotesService, deleteNoteService } from '../service/api/notes';

export const getNotes = createAsyncThunk('get/notes', (NoteBookId) => {
    return getNotesService(NoteBookId);
});

export const createNote = createAsyncThunk('create/note', (payload) => {
    return createNoteService(payload);
});

export const DeleteNote = createAsyncThunk('delete/note', (NoteId) => {
    return deleteNoteService(NoteId);
});

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [],
        currentNote: {},
        loading: false,
    },
    reducers: {
        setCurrentNote: (state, action) => {
            const note = action.payload;
            return {
                ...state,
                currentNote: note,
            };
        },
    },
    extraReducers: {
        [getNotes.pending]: (state) => {
            return { ...state, loading: true };
        },
        [getNotes.fulfilled]: (state, action) => {
            return { ...state, loading: false, notes: action.payload };
        },
        [createNote.fulfilled]: (state, action) => {
            return { ...state, loading: false, notes: [...state.notes, action.payload] };
        },
    },
});

export const { setCurrentNote } = notesSlice.actions;
export const notesState = (state) => state.notes;
export default notesSlice.reducer;
