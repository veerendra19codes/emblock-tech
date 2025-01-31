
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";
import FeaturedProjects from "./components/Home/FeaturedProjects";
import HowItWorks from "./components/Home/HowItWorks";
import Testimonials from "./components/Home/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import OurProducts from "./components/OurProducts/OurProducts";
import SingleProduct from "./components/OurProducts/SingleProduct";
import ServicesHero from "./components/Services/Hero";
import Services from "./components/Services/Services";
import ServicesFaq from "./components/Services/Faq";
import Solutions from "./components/Solutions/Solutions";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Careers from "./components/Careers/Careers";
import ScrollToTop from "./components/ScrollToTop";
import SingleCareer from "./components/Careers/SingleCareer";
import OurServices from "./components/Home/OurServices";
import Clients from "./components/Home/Clients";
import ServicesNew from "./components/Services/ServicesNew";

function App() {
  
  return (
    <div className="min-w-screen max-w-screen overflow-x-hidden h-full flex flex-col justify-center items-center font-manrope bg-gray-50">
      <Router>
        <ScrollToTop />
        <Navbar />  
        <Routes>
          <Route path="/" element={
              <>
                <Hero />
                <FeaturedProjects />
                <OurServices />
                <HowItWorks />
                <Testimonials />
                <Faq />
                <Clients />
              </>
          } />

          <Route path="/solutions/:id" element={
              <>
                <Solutions />
              </>
          } />


          <Route path="/ourproducts" element={
            <>
              <OurProducts />
            </>
          } />

          <Route path="/product/:id" element={
            <>
              <SingleProduct />
            </>

          } />

          <Route path="/about" element={
              <>
                <About />
              </>
          } />

          <Route path="/services" element={
              <>
                {/* <ServicesHero />
                <Services />
                <ServicesFaq /> */}
                <ServicesNew />
              </>
          } />

          <Route path="/careers" element={
              <>
                <Careers />
              </>
          } />

          <Route path="/careers/:id" element={
              <>
                <SingleCareer />
              </>
          } />

          <Route path="/contactus" element={
              <>
                <ContactUs />
              </>
          } />
        </Routes>
        <Footer />

      </Router>

    </div>
  )
}

export default App
