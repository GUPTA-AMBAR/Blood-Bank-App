import { createSlice } from "@reduxjs/toolkit";
import { getUser, userLogin, userRegister } from "./authAction";

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

const initialState = {
    loading : false,
    error : null,
    user : null,
    token
}

const authSlice = createSlice({
    name : "auth",
    initialState: initialState,
    reducers : {},
    extraReducers : (builder)=>{
        //login user
        builder.addCase(userLogin.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(userLogin.fulfilled, (state, {payload})=>{
            state.loading = false;
            state.user = payload?.user;
            console.log("payload-user : ",payload?.user);
            state.token = payload.token;
        });
        builder.addCase(userLogin.rejected, (state,{payload})=>{
            state.loading = false;
            state.error = payload;
        });

        //register user 
        builder.addCase(userRegister.pending,(state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(userRegister.fulfilled,(state,{payload})=>{
            state.loading = false;
            state.user = payload.user;
        });
        builder.addCase(userRegister.rejected,(state,{payload})=>{
            state.loading = false;
            state.error = payload;
        });


        //GETCURRENT user
        builder.addCase(getUser.pending , (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getUser.fulfilled, (state , {payload})=>{
            state.loading = false;
            state.user = payload.user;
        });
        builder.addCase(getUser.rejected, (state, {payload})=>{
            state.loading = false;
            state.error = payload;
        })

    },
})
export default authSlice;