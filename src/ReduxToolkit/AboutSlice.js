import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Component/Helper/Helper";

export const fetchTeam=createAsyncThunk("/user/team",async()=>{
    const response=await axiosInstance.get("/team")
    console.log(response.data.TeamMember)
    return response.data.TeamMember

})

const AboutSlice=createSlice({
    name:"about",
    initialState:{
        isLoading:false,
        team:[],
        error:null

    },

    extraReducers:(builder)=>{
        builder.addCase(fetchTeam.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(fetchTeam.fulfilled,(state,action)=>{
            state.isLoading=false
            state.team=action.payload
            state.error=null
        })
        builder.addCase(fetchTeam.rejected,(state,action)=>{
            state.isLoading=false
            state.team=[]
            state.error=action.error.message
        })

    }
})

export default AboutSlice.reducer