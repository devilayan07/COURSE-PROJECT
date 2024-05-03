import React, { useEffect } from 'react'
import BannerView from '../Banner/BannerView'
import ServiceView from '../Service/ServiceView'
import Testimonial from '../Testimonial/Testimonial'
import Companies from '../../Companies/Companies'
import About1 from '../About1/About1'
import { useDispatch } from 'react-redux'
import { reset_redirectTo } from '../../../ReduxToolkit/AuthSlice'

function Home() {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(reset_redirectTo(null))
  },[dispatch])
  return (
    <>
    <BannerView/> 
    <About1/>
    <ServiceView/>
    <Testimonial/>
    <Companies/> 
    </>
  )
}

export default Home
