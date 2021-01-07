import { combineReducers } from '@reduxjs/toolkit';
import theme from './theme';
import modal from './modal';
import notebooks from './notebooks';
import sidebar from './sidebar';

export default combineReducers({
    theme,
    modal,
    notebooks,
    sidebar,
});
