import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from './../Component/Helper/Helper';
import { toast } from "react-toastify";


export const fetchContact=createAsyncThunk("/contact/create",async(data)=>{
    const response=await axiosInstance.post("/contact/create",data)
    return response.data
})
const ContactSlice=createSlice({
    name:"contact",
    initialState:{
        status:"idle"
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchContact.pending,(state)=>{
            state.status="loading"
        })
        builder.addCase(fetchContact.fulfilled,(state,action)=>{
            state.status="idle"
            if(action.payload?.success===true){
                toast(action.payload?.message)
            }

        })
        builder.addCase(fetchContact.rejected,(state,action)=>{
            state.status="idle"
            toast.error("Contact error")

        })

    }
})

export default ContactSlice.reducer