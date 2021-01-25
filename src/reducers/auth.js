/* eslint-disable prettier/prettier */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api';

export const signUp = createAsyncThunk('auth/register', (data) => {
 
    const response =
    instance
        .post('/v1/auth/register', data)
        .then((res) => {
          localStorage.setItem('token', res.data.token.accessToken)
          localStorage.setItem('user', JSON.stringify(res.data.user))
           return res.data
        
        })
        .catch((err) => err.response);


        return response
    
});

export const Login = createAsyncThunk('auth/login', (data) => {

    const response = instance.post('/v1/auth/login', data)
    .then((res) => {
        localStorage.setItem('token', res.data.token.accessToken)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        console.log(res)
        return res.data
    })
    .catch((err) =>{
        console.log(err.response|| response)
       return err.response
    });

    return response
})


const currentToken = localStorage.getItem("token")
const currentUser = localStorage.getItem("user")
const parsedUser = currentUser ? JSON.parse(currentUser) : null;

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: parsedUser, error: '', token: currentToken, loading:false},
    reducers: {},
    extraReducers: {
        [signUp.pending]: (state) => {
            return {...state, loading:true}

        },
        [signUp.rejected]: (state, action) => {
          return {...state, loading:false, error:action.error.message}
           
        },
        [signUp.fulfilled]: (state, action) => {
        return {...state, loading:false, user:action.payload.user, token: localStorage.getItem('token')}            
          
        },
        [Login.pending]: (state) => {
            return {...state, loading:true}
        },
        [Login.rejected]: (state, action) => {
            return {...state, loading:false, error:action.error.message}
        },
        [Login.fulfilled]: (state, action) => {
            return {...state, loading:false, user:action.payload.user, token: localStorage.getItem('token')}
        }

    },
});

export const userState = (state) => state.auth;
export default authSlice.reducer;       