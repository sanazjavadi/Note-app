import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        noteModal: false,
    },
    reducers: {
        openModalNote(state) {
            return { ...state, noteModal: true };
        },
        closeModalNote(state) {
            return { ...state, noteModal: false };
        },
    },
});

export const { openModalNote, closeModalNote } = modalSlice.actions;
export const selectModal = (state) => state.modal;
export default modalSlice.reducer;
