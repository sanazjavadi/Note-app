import { createSlice } from '@reduxjs/toolkit';
import {
    lightTheme,
    darkTheme,
    halloweenTheme,
    VintageTheme,
    retroTheme,
    coldTheme,
    warmTheme,
} from '../styles/themes';

const themes = {
    lightTheme,
    darkTheme,
    halloweenTheme,
    VintageTheme,
    retroTheme,
    coldTheme,
    warmTheme,
};

const localSt = localStorage.getItem('themePreference');

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        themes: ['light', 'dark', 'halloween', 'Vintage', 'retro', 'cold', 'warm'],
        current: localSt || 'dark',
        theme: localSt ? themes[`${localSt}Theme`] : darkTheme,
    },
    reducers: {
        changeTheme(state) {
            const currentTheme = state.current;
            const idx = state.themes.indexOf(currentTheme);
            const theme = idx + 1 < state.themes.length ? state.themes[idx + 1] : 'light';
            switch (theme) {
                case 'light':
                    localStorage.setItem('themePreference', theme); // is this bad practice?
                    return { ...state, current: theme, theme: lightTheme };
                case 'dark':
                    localStorage.setItem('themePreference', theme);
                    return { ...state, current: theme, theme: darkTheme };
                case 'warm':
                    localStorage.setItem('themePreference', theme);
                    return { ...state, current: theme, theme: warmTheme };
                case 'halloween':
                    localStorage.setItem('themePreference', theme);
                    return {
                        ...state,
                        current: theme,
                        theme: halloweenTheme,
                    };
                case 'Vintage':
                    localStorage.setItem('themePreference', theme);
                    return {
                        ...state,
                        current: theme,
                        theme: VintageTheme,
                    };
                case 'retro':
                    localStorage.setItem('themePreference', theme);
                    return { ...state, current: theme, theme: retroTheme };
                case 'cold':
                    localStorage.setItem('themePreference', theme);
                    return { ...state, current: theme, theme: coldTheme };
                default:
                    return state;
            }
        },
    },
});

export const { changeTheme } = themeSlice.actions;
export const themeState = (state: any) => state.theme;
export default themeSlice.reducer;
