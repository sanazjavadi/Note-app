import { combineReducers } from '@reduxjs/toolkit';
import theme from './theme';
import modal from './modal';
import notebooks from './notebooks';
import auth from './auth';

export default combineReducers({
    theme,
    modal,
    notebooks,
    auth,
});
