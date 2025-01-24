
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";
import FeaturedProjects from "./components/Home/FeaturedProjects";
import ToolsAndSkills from "./components/Home/ToolsAndSkills";
import HowItWorks from "./components/Home/HowItWorks";
import Testimonials from "./components/Home/Testimonials";
import Faq from "./components/Home/Faq";
import Contact from "./components/Home/Contact";
import Footer from "./components/Home/Footer";

function App() {
  
  return (
    <div className="min-w-screen max-w-screen overflow-x-hidden h-full flex flex-col justify-center items-center font-manrope bg-gray-50">
      <Router>
          <Navbar />  
        <Routes>
          <Route path="/" element={
              <>
                <Hero />
                <FeaturedProjects />
                <ToolsAndSkills />
                <HowItWorks />
                <Testimonials />
                <Faq />
                <Contact />
                <Footer />
              </>
          } />
        </Routes>
      </Router>

    </div>
  )
}

export default App
