/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    getNotebooksService,
    createNotebookService,
    updateNotebookService,
    deleteNotebokService,
} from '../service/api/notebook';

export const getNoteBooks = createAsyncThunk('get/notebooks', () => getNotebooksService());

export const CreateNoteBook = createAsyncThunk('create/notebook', (data) => createNotebookService(data));

export const UpdateNoteBook = createAsyncThunk('update/notebook', (data, { getState }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { currentNoteBook } = getState().notebooks;
    return updateNotebookService(data, currentNoteBook);
});

export const DeleteNoteBook = createAsyncThunk('delete/notebook', (NoteBookId) => deleteNotebokService(NoteBookId));

const notebookSlice = createSlice({
    name: 'notebooks',
    initialState: {
        notebooks: [],
        loading: false,
        currentNoteBook: { name: '', id: null },
    },
    reducers: {
        duplicateNote: (state, action) => {
            const duplicate = state.notebooks.find((note) => note._id === action.payload);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            state = state.notebooks.push({ ...duplicate, name: `copy of (${duplicate.name})` });
        },
        setCurrentNoteBookId: (state, action) => {
            return {
                ...state,
                currentNoteBook: { ...state.currentNoteBook, name: action.payload.name, id: action.payload.id },
            };
        },
    },
    extraReducers: {
        [getNoteBooks.pending as any]: (state) => {
            return { ...state, loading: true };
        },
        [getNoteBooks.fulfilled as any]: (state, action) => {
            return { ...state, loading: false, notebooks: action.payload };
        },
        [CreateNoteBook.fulfilled as any]: (state, action) => {
            return { ...state, notebooks: [...state.notebooks, action.payload] };
        },
        [UpdateNoteBook.fulfilled as any]: (state, action) => {
            const newNoteBook = action.payload;
            const updatedNoteBooks = state.notebooks.map((noteBook) => {
                if (noteBook._id === action.payload._id) {
                    return newNoteBook;
                }
                return noteBook;
            });
            return { ...state, notebooks: updatedNoteBooks };
        },
    },
});

export const { duplicateNote, setCurrentNoteBookId } = notebookSlice.actions;
export const notebooksState = (state) => state.notebooks;
export default notebookSlice.reducer;
