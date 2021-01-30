import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        noteModal: false,
        notebookModal: false,
        editModal: false,
        optionsModal: false,
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
        openEditModal(state) {
            return { ...state, editModal: true };
        },
        closeEditModal(state) {
            return { ...state, editModal: false };
        },
        openOptionsModal(state) {
            return { ...state, optionsModal: true };
        },
        closeOptionsModal(state) {
            return { ...state, optionsModal: false };
        },
    },
});

export const {
    openNoteModal,
    closeNoteModal,
    openNotebookModal,
    closeNotebookModal,
    openEditModal,
    closeEditModal,
    openOptionsModal,
    closeOptionsModal,
} = modalSlice.actions;
export const modalState = (state) => state.modal;
export default modalSlice.reducer;
