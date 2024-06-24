import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../Component/Helper/Helper';
import { toast } from "react-toastify";

export const register=createAsyncThunk("/user/register",async(formdata)=>{
    const response=await axiosInstance.post("/register",formdata)
    return response.data
})

export const login=createAsyncThunk("/user/login",async(data)=>{
    const response=await axiosInstance.post("/login",data)
    console.log(response.data)
    return response.data
})

export const update=createAsyncThunk("/update-password",async(data1)=>{
  const response=await axiosInstance.post("/update-password",data1)
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

        if(action.payload?.status===true){

            toast(action.payload?.message);

        }
      })
      builder.addCase(register.rejected,(state,action)=>{
        state.status="idle"
        toast.error("Registration error")
      })
      builder.addCase(login.pending,(state)=>{
        state.status="loading"
      })
      builder.addCase(login.fulfilled,(state,action)=>{
        state.status="idle"
        if(action.payload?.status===200){
          state.redirectTo="/"
            localStorage.setItem("token",action.payload?.token)
            localStorage.setItem("userid",action.payload?.user._id)
            state.isloggedIn=true;

            toast(action.payload?.message);


        }

      })
      builder.addCase(login.rejected,(state)=>{
        state.status="idle"
        toast.error("login error")

      })

      builder.addCase(update.pending,(state)=>{
        state.status="loading"
      })
      builder.addCase(update.fulfilled,(state,action)=>{
        state.status="idle"
        if(action.payload?.success===true){
          toast(action.payload?.msg)
        }
      })
      builder.addCase(update.rejected,(state)=>{
        state.status="idle"
      })
    }

})

export const{handleLoggedout,check_token,reset_redirectTo}=AuthSlice.actions
export default AuthSlice.reducer