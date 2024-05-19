import './App.css';
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
// import Registration from './Component/AUTH/Registration';
// import Login from './Component/AUTH/Login';
// import Header from './LAYOUT/Header/Header';
// import Home from './Component/CMS/Home/Home';
// import About from './Component/CMS/About/About';
// import Course from './Component/CMS/Course/Course';
// import Blog from './Component/CMS/Blog/Blog';
import { useDispatch } from 'react-redux';
import { useEffect,lazy, Suspense } from 'react';
import { check_token } from './ReduxToolkit/AuthSlice';
// import ApplyCourse from './Component/CMS/ApplyCourse/ApplyCourse';
// import BlogDetails from './Component/CMS/BlogDetails/BlogDetails';
// import Contact from './Component/CMS/Contact/Contact';
import { toast } from 'react-toastify';
import Loader from './Component/Loader/Loader';
import Footer from './LAYOUT/Footer/Footer';

const Home=lazy(()=> import("./Component/CMS/Home/Home") )
const Registration=lazy(()=>import("./Component/AUTH/Registration"))
const Login=lazy(()=> import("./Component/AUTH/Login"))
const Header=lazy(()=> import("./LAYOUT/Header/Header"))
const About=lazy(()=>import("./Component/CMS/About/About"))
const Course=lazy(()=> import("./Component/CMS/Course/Course"))
const Blog=lazy(()=>import("./Component/CMS/Blog/Blog"))
const ApplyCourse=lazy(()=>import("./Component/CMS/ApplyCourse/ApplyCourse"))
const BlogDetails=lazy(()=>import("./Component/CMS/BlogDetails/BlogDetails"))
const Contact=lazy(()=>import("./Component/CMS/Contact/Contact"))
const Updatepassword=lazy(()=> import("./Component/AUTH/Updatepassword"))


function PrivateRoute({children}){
  console.log(children,"children")
  const token=localStorage.getItem("token") || sessionStorage.getItem("token");

  return token!==null && token!==undefined?(
    children):(
      <>
      <Navigate to="/"/>
      {toast("Please go for login either you can't access other pages")}
      </>
    )
  

}

const PublicRouteNames=[
  {
    path:"/",
    Component:<Home/>
  },
  {
    path:"/login",
    Component:<Login/>
  },
  {
    path:"/registration",
    Component:<Registration/>
  },
  {
    path:"/update",
    Component:<Updatepassword/>
  }

]

const PrivateRouteNames=[
  {
    path:"/about",
    Component:<About/>
  },
  {
    path:"/course",
    Component:<Course/>
  },
  {
    path:"/courses/:id",
    Component:<ApplyCourse/>
  },
  {
    path:"/blog",
    Component:<Blog/>
  },
  {
    path:"/blogdetails/:id",
    Component:<BlogDetails/>
  },
  {
    path:"/contact",
    Component:<Contact/>
  }
]
function App() {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(check_token())
  })
  return (
    <div className="App">
      {/* <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path="/courses/:id" element={<ApplyCourse/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blogdetails/:id' element={<BlogDetails/>}/>
          <Route path='/contact' element={<Contact/>}/>


        </Routes>
      </Router> */}
      <Suspense fallback={<Loader/>}>
      <Router>
        <Header/>
        <Routes>
          {
            PublicRouteNames?.map((route,index)=>{
              return(
                <Route key={index} exact path={route.path} element={route.Component}/>
              )
            })
          }
          {
            PrivateRouteNames?.map((route,index)=>{
              return(
                <Route key={index} exact path={route.path} element={<PrivateRoute>{route.Component}</PrivateRoute>}/>
              )
            })
          }
        </Routes>
        <Footer/>
      </Router>
      </Suspense>
    </div>
  );
}

export default App;
