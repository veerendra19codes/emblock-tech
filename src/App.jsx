
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";
import FeaturedProjects from "./components/Home/FeaturedProjects";
import Testimonials from "./components/Home/Testimonials";
import Footer from "./components/Footer";
import OurProducts from "./components/OurProducts/OurProducts";
import Solutions from "./components/Solutions/Solutions";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Careers from "./components/Careers/Careers";
import ScrollToTop from "./components/ScrollToTop";
import SingleCareer from "./components/Careers/SingleCareer";
import OurServices from "./components/Home/OurServices";
import Clients from "./components/Home/Clients";
import ServicesNew from "./components/Services/ServicesNew";
import SingleService from "./components/Services/SingleService";
import HowWeWork from "./components/Home/HowWeWork";
import HomeFaq from "./components/Home/Accordian";
import SingleProductScroll from "./components/OurProducts/SingleProductScroll";

function App() {
  
  return (
    <div className="w-full overflow-x-hidden h-full flex flex-col justify-center items-center font-manrope bg-gray-50">
      <Router>
        <ScrollToTop />
        <Navbar />  
        <Routes>
          <Route path="/" element={
              <>
                <Hero />
                <FeaturedProjects />
                <OurServices />
                <HowWeWork />
                <Testimonials />
                <HomeFaq />
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
              <SingleProductScroll />
            </>

          } />

          <Route path="/about" element={
              <>
                <About />
              </>
          } />

          <Route path="/services" element={
              <>
                <ServicesNew />
              </>
          } />

          <Route path="/services/:id" element={
              <>
                <SingleService />
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
