import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    startCreateUser,
    userCreatedSuccess,
    userCreatedError,
    clearErrors,

    startVerifying,
    verifyingSucces,
    verifiedError,

    startReseting,
    instructionsSent,
    resetingError,
    resetTokenVerified,
    startChangingPassword,
    changedPasswordSuccess,
    changedPasswordError,
    startLogin,
    loggedSuccess,
    loggedError,
    startGettingProfile,
    profileDataSuccess,
    profileError,
    getTokenFromLocalS,
    userIdToken
} from '../features/userSlice';
import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

export const createUserAction = createAsyncThunk(
    'createUser',
    async (data, thunkApi) => {
        thunkApi.dispatch(startCreateUser(true));
        try {
            const user = await axiosClient.post('/api/create-account', data)
            
            Swal.fire({
                title: `${user.data.msg}`,
                text: 'Check your inbox or your spam folder to verify your account',
                icon: 'success',
                toast: true,
                position: 'top-end',
            });
            thunkApi.dispatch(userCreatedSuccess())
        } catch (error) {
            console.log(error.response);
            thunkApi.dispatch(userCreatedError('Unable to create your account'));
            Swal.fire({
                title: `${error.response.data.msg}`,
                icon: 'error',
                toast: true,
                position: 'top-end',
                timer: 2500
            }).then( (val) => {
                if(val.isConfirmed){
                    thunkApi.dispatch(clearErrors())
                }
            })
        }

    }
);

export const confirmAccountAction = createAsyncThunk(
    'confirmAccount',
    async (token, thunkApi) => {
        thunkApi.dispatch(startVerifying(true));
        try {
            const result = await axiosClient.get(`/api/confirm-account/${token}`);
            thunkApi.dispatch(verifyingSucces())
            Swal.fire({
                title: `${result.data.msg}`,
                icon: 'success',
                toast: true,
                position: 'top-end',
                
            })
        } catch (error) {
            //console.log(error.response, 'desde el catch');
            thunkApi.dispatch(verifiedError(error.response.data.msg))
            Swal.fire({
                title: `${error.response.data.msg}`,
                icon: 'error',
                toast: true,
                position: 'top-end',
                
            }).then( (val) => {
                if(val.isConfirmed){
                    thunkApi.dispatch(clearErrors())
                }
            })
        }
    }
)

export const resetingPasswordAction = createAsyncThunk(
    'passwordReset',
    async (data, thunkApi) => {
        thunkApi.dispatch(startReseting(true))
        try {
            const result = await axiosClient.post('/api/reset-password', data)
            thunkApi.dispatch(instructionsSent())
            Swal.fire({
                title: `${result.data.msg}`,
                icon: 'success',
                toast: true,
                position: 'top-end',
            })
        } catch (error) {
            //console.log(error.response, 'catch error')
            thunkApi.dispatch(resetingError(error.response.data.msg))
            Swal.fire({
                title: `${error.response.data.msg}`,
                icon: 'error',
                toast: true,
                position: 'top-end',
                
            }).then( (val) => {
                if(val.isConfirmed){
                    thunkApi.dispatch(clearErrors())
                }
            })
        }
    }
)

export const verifyTokenPasswordAction = createAsyncThunk(
    'verifyToken',
    async (token, thunkApi) => {
        try {
            const data = await axiosClient.get(`/api/reset-password/${token}`);
            Swal.fire({
                title: `${data.data.msg}`,
                icon: 'success',
                toast: true,
                position: 'top-end',
                
            });
            thunkApi.dispatch(resetTokenVerified(true))
        } catch (error) {
            //console.log(error.response)
            Swal.fire({
                title: `${error.response.data.msg}`,
                icon: 'error',
                toast: true,
                position: 'top-end',
                
            })
        }
    }
)

export const changePasswordAction = createAsyncThunk(
    'changePassword',
    async (data, thunkApi) => {
        thunkApi.dispatch(startChangingPassword(true))
        try {            
            let newPass = { 'password': data.password };
            const result = await axiosClient.post(`/api/reset-password/${data.token}`, newPass)
            thunkApi.dispatch(changedPasswordSuccess())
            Swal.fire({
                title: `${result.data.msg}`,
                icon: 'success',
                toast: true,
                position: 'top-end',
            });

        } catch (error) {
            console.log(error.response)
            thunkApi.dispatch(changedPasswordError(error.response.data.msg))
            Swal.fire({
                title: `${error.response.data.msg}`,
                icon: 'error',
                toast: true,
                position: 'top-end',
                
            }).then( (val) => {
                if(val.isConfirmed){
                    thunkApi.dispatch(clearErrors())
                }
            })
        }
    }
)

export const loggingUserAction = createAsyncThunk(
    'logginUser',
    async (data, thunkApi) => {
        thunkApi.dispatch(startLogin(true))
        try {
            const result = await axiosClient.post('/api/login', data);
            thunkApi.dispatch(loggedSuccess(result.data))
            
            Swal.fire({
                title: `${result.data.msg}`,
                icon: 'success',
                toast: true,
                position: 'top-end',
                
            })
        } catch (error) {
            console.log(error.response)
            thunkApi.dispatch(loggedError(`${error.response.data.msg}`))
            Swal.fire({
                title: `${error.response.data.msg}`,
                icon: 'error',
                toast: true,
                position: 'top-end',
                
            }).then( (val) => {
                if(val.isConfirmed){
                    thunkApi.dispatch(clearErrors())
                }
            })
        }
    }
)

export const verifyUserInfoAction = createAsyncThunk(
    'userAuth',
    async (token, thunkApi) => {
        //thunkApi.dispatch(startGettingProfile(true))
        thunkApi.dispatch(getTokenFromLocalS(token))
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        try {
            thunkApi.dispatch(startGettingProfile(true))
            const result = await axiosClient.get('/api/profile', config );
            thunkApi.dispatch(profileDataSuccess(result.data.user))
            thunkApi.dispatch(userIdToken(result.data.user.id))
            setTimeout(() => {
                thunkApi.dispatch(startGettingProfile(false))
            }, 800)
        } catch (error) {
            console.log(error.response)
            thunkApi.dispatch(profileError(error.response.data.msg))
            Swal.fire({
                title: `${error.response.data.msg}`,
                icon: 'error',
                toast: true,
                position: 'top-end',
                
            }).then( (val) => {
                if(val.isConfirmed){
                    thunkApi.dispatch(clearErrors())
                }
            })
        }
    }
)