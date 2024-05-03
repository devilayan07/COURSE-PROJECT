import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../Component/Helper/Helper';
import { toast } from "react-toastify";

export const register=createAsyncThunk("/user/register",async(formdata)=>{
    const response=await axiosInstance.post("/register",formdata)
    return response.data
})

export const login=createAsyncThunk("/user/login",async(data)=>{
    const response=await axiosInstance.post("/login",data)
    return response.data
})

const AuthSlice=createSlice({
    name:"registration",
    initialState:{
        status:"idle",
        isloggedIn:false,
        redirectTo:null

    },
    
    reducers: {

      reset_redirectTo: (state, { payload }) => {
        state.redirectTo = payload;
    },

      handleLoggedout: (state, { payload }) => {
          localStorage.removeItem("token");
          // localStorage.removeItem("Name");
          // localStorage.removeItem("image");
          // localStorage.removeItem("title");
          state.isloggedIn = false;
          toast("Logout SuccessFull");
        },

        check_token: (state, { payload }) => {
          let token = localStorage.getItem("token");
          if (token !== null && token !== undefined) {
            state.isloggedIn = true;
          }
        },
    
    
  },


    extraReducers: (builder)=>{
      builder.addCase(register.pending,(state)=>{
        state.status="loading"
      })
      builder.addCase(register.fulfilled,(state,action)=>{
        state.status="idle"
        if(action.payload?.status===200){
            toast(action.payload?.message);

        }
        else{
            if(action.payload?.status===201){
                toast(action.payload?.message);

            }
        }
      })
      builder.addCase(register.rejected,(state,action)=>{
        state.status="idle"
      })
      builder.addCase(login.pending,(state)=>{
        state.status="loading"
      })
      builder.addCase(login.fulfilled,(state,action)=>{
        state.status="idle"
        if(action.payload?.status===200){
          state.redirectTo="/"
            localStorage.setItem("token",action.payload?.token)
            state.isloggedIn=true;

            toast(action.payload?.message);


        }
        else{
            if(action.payload?.status===201){
                toast(action.payload?.message);


            }
        }

      })
      builder.addCase(login.rejected,(state)=>{
        state.status="idle"

      })
    }

})

export const{handleLoggedout,check_token,reset_redirectTo}=AuthSlice.actions
export default AuthSlice.reducer