/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
export const applyTheme = (theme) => {
    Object.keys(theme).forEach((key) => {
        const value = theme[key];
        document.documentElement.style.setProperty(key, value);
    });
};
