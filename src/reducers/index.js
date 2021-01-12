import { combineReducers } from '@reduxjs/toolkit';
import theme from './theme';
import modal from './modal';
import notebooks from './notebooks';
import sidebar from './sidebar';
import auth from './auth';

export default combineReducers({
    theme,
    modal,
    notebooks,
    sidebar,
    auth,
});
