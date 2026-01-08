
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import {Outlet} from "react-router-dom";

const Landing = () => {



  return (
    <>
    <Outlet />
    <Header/>
    
     <Hero /> <Features />
    </>

  )
}

export default Landing