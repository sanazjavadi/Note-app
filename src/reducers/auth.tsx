/* eslint-disable prettier/prettier */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signUpService, logInService  } from '../service/api/auth'
import { AUTH_TOKEN } from '../service/api'

export const signUp = createAsyncThunk('auth/register', (data) => {
 
  return signUpService(data)
    
});

export const Login = createAsyncThunk('auth/login', (data) => {
 
    return logInService(data)
  
})



const currentUser = localStorage.getItem("user")
const parsedUser = currentUser ? JSON.parse(currentUser) : null;

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: parsedUser, error: '', token: AUTH_TOKEN , loading:false},
    reducers: {
        signOut: (state) => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            return {...state, token:null}
        }
    },
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
export const { signOut } = authSlice.actions
export default authSlice.reducer;   