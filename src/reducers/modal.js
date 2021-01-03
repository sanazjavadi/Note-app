import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        noteModal: false,
        notebookModal: false,
    },
    reducers: {
        openNoteModal(state) {
            return { ...state, noteModal: true };
        },
        closeNoteModal(state) {
            return { ...state, noteModal: false };
        },
        openNotebookModal(state) {
            return { ...state, notebookModal: true };
        },
        closeNotebookModal(state) {
            return { ...state, notebookModal: false };
        },
    },
});

export const { openNoteModal, closeNoteModal, openNotebookModal, closeNotebookModal } = modalSlice.actions;
export const modalState = (state) => state.modal;
export default modalSlice.reducer;
