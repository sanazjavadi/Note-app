import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: false,
    reducers: {
        openSidebar: () => {
            return true;
        },
        closeSidebar: () => {
            return false;
        },
    },
});

export const sidebarState = (state) => state.sidebar;
export const { openSidebar, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
