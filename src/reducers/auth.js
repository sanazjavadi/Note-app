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

export const signIn = createAsyncThunk('aut/login',(data)=> {
  

})

const authSlice = createSlice({
    name: 'auth',
    initialState: { users: [], error: ''},
    reducers: {},
    extraReducers: {
        [signUp.rejected]: (state, action) => {
            console.log(action.error.message);
        },
        [signUp.fulfilled]: (state, action) => {
            console.log(localStorage.getItem('token'))
            console.log(action.payload);
        },
    },
});

export const userState = (state) => authSlice.state;
export default authSlice.reducer;
