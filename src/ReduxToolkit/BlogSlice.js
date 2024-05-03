import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Component/Helper/Helper";

export const fetchBlog=createAsyncThunk("/user/allBlog",async()=>{
    const response=await axiosInstance.get("/allBlog")
    return response.data.data
})

export const fetchCategory=createAsyncThunk("/user/category",async()=>{
    const response=await axiosInstance.get("/showallcategory")
    return response.data.data
})

export const fetchCategoryWise=createAsyncThunk("/category/post",async(id)=>{
    const response=await axiosInstance.get(`/category/post/${id}`)
    console.log(response.data.data)
    return response.data.data
})

export const fetchSearch=createAsyncThunk("/user/serach",async(output)=>{
    const response=await axiosInstance.get(`/search/${output}`)
    console.log(response.data)
    return response.data
})

export const fetchPost=createAsyncThunk("/letest-post",async()=>{
    const response=await axiosInstance.get("/letest-post")
    console.log(response.data.data)
    return response.data.data
})
const BlogSlice=createSlice({
    name:"blog",
    initialState:{
        isLoading:false,
        blog:[],
        category:[],
        post:[],
        
        error:null,
        status:"idle"
    },
    reducers:{
        add:(state,action)=>{
            return{...state,blog:[action.payload]}
  
            
          }
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchBlog.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(fetchBlog.fulfilled,(state,action)=>{
            state.isLoading=false
            state.blog=action.payload
            state.error=null
        })
        builder.addCase(fetchBlog.rejected,(state,action)=>{
            state.isLoading=false
            state.blog=[]
            state.error=action.error.message
        })
        builder.addCase(fetchCategory.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(fetchCategory.fulfilled,(state,action)=>{
            state.isLoading=false
            state.category=action.payload
            state.error=null
        })
        builder.addCase(fetchCategory.rejected,(state,action)=>{
            state.isLoading=false
            state.category=[]
            state.error=action.error.message
        })
        builder.addCase(fetchSearch.pending,(state)=>{
            state.status="loading"
        })
        builder.addCase(fetchSearch.fulfilled,(state,action)=>{
            state.status="idle"
            state.blog=action.payload
            console.log(action.payload)
        })
        builder.addCase(fetchSearch.rejected,(state,action)=>{
            state.status="error"
        })
        builder.addCase(fetchCategoryWise.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(fetchCategoryWise.fulfilled,(state,action)=>{
            state.isLoading=false
            state.blog=action.payload
            state.error=null
        })
        builder.addCase(fetchCategoryWise.rejected,(state,action)=>{
            state.isLoading=false
            state.blog=[]
            state.error=action.error.message
        })
        builder.addCase(fetchPost.pending,(state)=>{
            state.isLoading=true
            
        })
        builder.addCase(fetchPost.fulfilled,(state,action)=>{
            state.isLoading=false
            state.post=action.payload
            state.error=null
        })
        builder.addCase(fetchPost.rejected,(state,action)=>{
            state.isLoading=false
            state.post=[]
            state.error=action.error.message
        })
    }
})
 
export const {add}=BlogSlice.actions

export default BlogSlice.reducer