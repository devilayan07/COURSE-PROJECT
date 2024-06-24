import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Component/Helper/Helper";
import { toast } from "react-toastify";


export const fetchCourse=createAsyncThunk("user/course",async()=>{
    const response=await axiosInstance.get("/course")
    console.log(response.data.Courses)
    return response.data.Courses
})

export const fetchApply=createAsyncThunk("user/apply",async({id,payload})=>{
    try {
        const response=await axiosInstance.post(`/course/apply/${id}`,payload)
        return response.data
        
    } catch (error) {
        return error.response.data
    }

})


const CourseSlice=createSlice({
    name:"course",
    initialState:{
        isLoading:false,
        course:[],
        error:null,
        status:"idle"
    },

    extraReducers:(builder)=>{
     builder.addCase(fetchCourse.pending,(state)=>{
        state.isLoading=true
     })
     builder.addCase(fetchCourse.fulfilled,(state,action)=>{
        state.isLoading=false
        state.course=action.payload
        state.error=null
     })
     builder.addCase(fetchCourse.rejected,(state,action)=>{
        state.isLoading=false
        state.course=[]
        state.error=action.error.message
     })
     builder.addCase(fetchApply.pending,(state)=>{
        state.status="loading"
     })
     builder.addCase(fetchApply.fulfilled,(state,action)=>{
        state.status="idle"
        toast.success("You apply course successfully")
     })
     builder.addCase(fetchApply.rejected,(state,action)=>{
        state.status="error"
        toast.error("Error in Purchase")

     })

    }
})

export default CourseSlice.reducer