
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import ContactMe from '../Components/ContactMe'
import Footer from '../Components/Footer'
import {Outlet} from "react-router-dom";

const Landing = () => {



  return (
    <>
    <Outlet />
    <Header/>
    
     <Hero /> <Features /> <ContactMe />
    <Footer />
    </>

  )
}

export default Landing