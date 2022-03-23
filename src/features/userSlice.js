import { createSlice  } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    loading: null,
    msg: null,
    error: null,
    token: '',

    isNavigate: false,
    isVerified: null,
    isConfirmed: null,
    userId: null,
    profileSpinner: null
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        startCreateUser: (state, action) => {
            state.loading = action.payload
        },
        userCreatedSuccess: (state, action) => {
            state.loading = null
        },
        userCreatedError: (state, action) => {
            state.error = true
            state.msg = action.payload
            state.loading = null
        },
        clearErrors: (state, action) => {
            state.error = null
            state.msg = null
            state.loading = null
        },
        //Verify account
        startVerifying: (state, action) => {
            state.loading = action.payload
        },
        verifyingSucces: (state, action) => {
            state.loading = null
            state.isNavigate = true
        },
        verifiedError: (state, action) => {
            state.error = action.payload
            state.loading = null
        },
        tokenConfirmed: (state, action ) => {
            state.isNavigate = false
        },
        //Reset Password
        startReseting: (state, action) => {
            state.loading = action.payload
        },
        instructionsSent: (state, action) => {
            state.loading = null
            state.isVerified = true
        },
        resetingError: (state, action) => {
            state.loading = null
            state.error = action.payload
        },
        // Token verified
        resetTokenVerified: (state, action) => {
            state.isVerified = action.payload
        },
        // Change password
        startChangingPassword: (state, action) => {
            state.loading = action.payload
        },
        changedPasswordSuccess: (state, action) => {
            state.loading = null
            state.isConfirmed = true
        },
        changedPasswordError: (state, action) => {
            state.loading = null
            state.error = action.payload
        },
        resetLinkPass: (state, action) => {
            state.isVerified = null
        },
        //Login user
        startLogin: (state, action) =>{
            state.loading = action.payload
        },
        loggedSuccess: (state, action) => {
            state.loading = null
            state.isVerified = true
            state.token = action.payload.token
            state.user = action.payload.user
        },
        loggedError: (state, action) => {
            state.error = action.payload
            state.loading = null
        },

        startGettingProfile: (state, action) => {
            state.profileSpinner = action.payload
        },
        profileDataSuccess: (state, action) => {
            state.user = action.payload
            //state.profileSpinner = null
        },
        profileError: (state, action) => {
            state.profileSpinner = null
            state.error = action.payload
        },
        getTokenFromLocalS: (state, action) => {
            state.token = action.payload
        },
        userIdToken: (state, action) =>{
            state.userId = action.payload
        },
        logOutAction: (state, action) => {
            state.user = {}
            state.token = ""
            state.userId = null
        }
    }
});

export const {
    // Create user
    startCreateUser,
    userCreatedSuccess,
    userCreatedError,
    clearErrors,

    startVerifying,
    verifyingSucces,
    verifiedError,

    tokenConfirmed,

    startReseting,
    instructionsSent,
    resetingError,

    resetTokenVerified,
    startChangingPassword,
    changedPasswordSuccess,
    changedPasswordError,
    resetLinkPass,

    startLogin,
    loggedSuccess,
    loggedError,

    startGettingProfile,
    profileDataSuccess,
    profileError,
    getTokenFromLocalS,
    userIdToken,
    logOutAction,
} = userSlice.actions;

export default userSlice.reducer;