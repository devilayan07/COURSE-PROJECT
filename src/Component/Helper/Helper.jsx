import axios from "axios";
let adminUrl = "https://restapinodejs.onrender.com/api";
export const baseURL = adminUrl;
let axiosInstance = axios.create({
    baseURL,
});

export { adminUrl };
export const blog_pic= (media) => {
    return `https://restapinodejs.onrender.com/api/blog/image/${media}`;
};
export const banner_pic = (media) => {
    return `https://restapinodejs.onrender.com/api/banner/photo/${media}`;
};
export const testimonial_pic = (media) => {
    return `https://restapinodejs.onrender.com/api/testimonials/photo/${media}`;
};
export const team_pic = (media) => {
    return `https://restapinodejs.onrender.com/api/team/photo/${media}`;
};
export const course_pic = (media) => {
    return `https://restapinodejs.onrender.com/api/course/photo/${media}`;
};




axiosInstance.interceptors.request.use(
    async function (config) {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        if (token !== null || token !== undefined) {
            config.headers["x-access-token"] = token;
        }
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);
export default axiosInstance;
