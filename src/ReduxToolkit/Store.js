import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import HomeSlice from "./HomeSlice";
import AboutSlice from "./AboutSlice";
import CourseSlice from "./CourseSlice";
import BlogSlice from "./BlogSlice";
import BlogDetailsSlice from "./BlogDetailsSlice";
import ContactSlice from "./ContactSlice";

export const store=configureStore({
    reducer:{
        Auth:AuthSlice,
        banner:HomeSlice,
        about:AboutSlice,
        course:CourseSlice,
        blog:BlogSlice,
        Details:BlogDetailsSlice,
        Contact:ContactSlice
    }
})