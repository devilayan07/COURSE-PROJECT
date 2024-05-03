
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../Component/Helper/Helper';

export const fetchBanner=createAsyncThunk("/user/banner",async()=>{
    const response=await axiosInstance.get("/banner")
    return response.data.bannerdata
})

export const fetchService=createAsyncThunk("/user/service",async()=>{
    const response=await axiosInstance.get("/service")
    // console.log(response.data)
    return response.data
})

export const fetchTestimonial=createAsyncThunk("/user/testimonial",async()=>{
    const response=await axiosInstance.get("/testimonial")
    return response.data.testimonials
})
const HomeSlice=createSlice({
    name:"banners",
    initialState:{
        isLoading:false,
        banner:[],
        service:[],
        testimonial:[],
        error:null

    },

    extraReducers:(builder)=>{
        builder.addCase(fetchBanner.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(fetchBanner.fulfilled,(state,action)=>{
            state.isLoading=false
            state.banner=action.payload
            state.error=null
        })
        builder.addCase(fetchBanner.rejected,(state,action)=>{
            state.isLoading=false
            state.banner=[]
            state.error=action.error.message
        })
        builder.addCase(fetchService.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(fetchService.fulfilled,(state,action)=>{
            state.isLoading=false
            state.service=action.payload
            state.error=null

        })
        builder.addCase(fetchService.rejected,(state,action)=>{
            state.isLoading=false
            state.service=[]
            state.error=action.error.message

        })
        builder.addCase(fetchTestimonial.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(fetchTestimonial.fulfilled,(state,action)=>{
            state.isLoading=false
            state.testimonial=action.payload
            state.error=[]
        })
        builder.addCase(fetchTestimonial.rejected,(state,action)=>{
            state.isLoading=false
            state.testimonial=action.error.message
            state.error=[]
        })


    }

})

export default HomeSlice.reducer