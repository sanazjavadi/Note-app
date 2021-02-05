/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createNoteService, getNotesService, deleteNoteService, updateNoteService } from '../service/api/notes';

export const getNotes = createAsyncThunk('get/notes', (NoteBookId) => {
    return getNotesService(NoteBookId);
});

export const createNote = createAsyncThunk('create/note', (payload) => {
    return createNoteService(payload);
});

export const DeleteNote = createAsyncThunk('delete/note', (NoteId) => {
    return deleteNoteService(NoteId);
});

export const updateNote = createAsyncThunk('update/note', (payload) => {
    return updateNoteService(payload.id, payload.data);
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
        searchNotes: (state, action) => {
            const arrayNotes = ['title', 'data', 'description'];
            return {
                ...state,
                notes: state.notes.filter((note) => {
                    if (!action.payload.length) {
                        return note;
                    }
                    return arrayNotes.every((noteItem) => {
                        return note[noteItem].toLowerCase().includes(action.payload.toLowerCase());
                    });
                }),
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
        [updateNote.fulfilled]: (state, action) => {
            const updatedNote = state.notes.map((note) => {
                if (note._id === action.payload._id) {
                    return action.payload;
                }
                return note;
            });
            return { ...state, notes: updatedNote, currentNote: action.payload };
        },
    },
});

export const { setCurrentNote, searchNotes } = notesSlice.actions;
export const notesState = (state) => state.notes;
export default notesSlice.reducer;
