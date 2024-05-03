import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Component/Helper/Helper";
import { toast } from "react-toastify";

export const fetchBlogDetails=createAsyncThunk("/blogdetails",async(id)=>{
    const response=await axiosInstance.get(`/blogdetails/${id}`)
    console.log(response.data.data)
    return response.data.data
})

export const fetchCreate=createAsyncThunk("/blog/comment/create",async({id,payload})=>{
 const response=await axiosInstance.post(`/blog/${id}/comment/create`,payload)
 return response.data
})

export const fetchComment=createAsyncThunk("/comment",async(id)=>{
    const response=await axiosInstance.get(`/comment/${id}`)
    return response.data.post.comment.comments
})
const BlogDetailsSlice=createSlice({
    name:"details",
    initialState:{
        isLoading:false,
        details:[],
        comment:[],
        error:null,
        status:"idle"
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchBlogDetails.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(fetchBlogDetails.fulfilled,(state,action)=>{
            state.isLoading=false
            state.details=action.payload
            console.log(action.payload)
            state.error=null
        })
        builder.addCase(fetchBlogDetails.rejected,(state,action)=>{
            state.isLoading=false
            state.details=[]
            state.error=action.error.message
        })
        builder.addCase(fetchCreate.pending,(state)=>{
            state.status="loading"
        })
        builder.addCase(fetchCreate.fulfilled,(state)=>{
            state.status="idle"
            toast.success("Comment successfully added")
        })
        builder.addCase(fetchCreate.rejected,(state)=>{
            state.status="idle"
            toast.error("Comment error")
        })
        builder.addCase(fetchComment.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(fetchComment.fulfilled,(state,action)=>{
            state.isLoading=false
            state.comment=action.payload
            state.error=null
        })
        builder.addCase(fetchComment.rejected,(state,action)=>{
            state.isLoading=false
            state.comment=[]
            state.error=action.error.message
        })

    }
})

export default BlogDetailsSlice.reducer