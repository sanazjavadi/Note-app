import { combineReducers } from '@reduxjs/toolkit';
import theme from './theme';
import modal from './modal';

export default combineReducers({
    theme,
    modal,
});
