/* eslint-disable prettier/prettier */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api';

export const signUp = createAsyncThunk('auth/register',  (data) => {

    const response =
    instance
        .post('/v1/auth/register', data)
        .then((res) => {
          localStorage.setItem('token', res.data.token.accessToken)
           return res.data
        
        })
        .catch((err) => err.response);


        return response
    
});  


const authSlice = createSlice({
    name: 'auth',
    initialState: { users: null, error: '', token:''},
    reducers: {},
    extraReducers: {
        [signUp.rejected]: (state, action) => {
            console.log(action.error.message)
          return {...state, error:action.error.message}
           
        },
        [signUp.fulfilled]: (state, action) => {
            console.log(action.payload)
     return {...state, users:action.payload, token:localStorage.getItem('token')}            
          
        },
    },
});

export const userState = (state) => authSlice.state;
export default authSlice.reducer;
