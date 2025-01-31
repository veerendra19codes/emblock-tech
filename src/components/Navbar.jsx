import { useLocation } from "react-router-dom"
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation()
  // console.log("location:", location);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const navitems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Solutions",
      path: "/solutions/1",
    },
    {
      id: 3,
      name: "Our Products",
      path: "/ourproducts",
    },
    {
      id: 4,
      name: "About",
      path: "/about",
    },
    {
      id: 5,
      name: "Services",
      path: "/services",
    },
    {
      id: 6,
      name: "Careers",
      path: "/careers",
    },

  ]


  return (
    <>
      {/* desktop nav  */}
      <nav className="opacity-0 translate-y-full w-full h-28 hidden md:flex flex-row justify-between items-center px-12 border-b border-gray-300 shadow-sm animate-slide-down animate-fill-mode-forwards">

          <Link to="/" className="logo flex justify-center items-center gap-2 object-contain rounded-full">
            <img src="/logo.png" className="h-8 w-auto" />
          </Link>

          <div className="flex justify-between items-center gap-24">

            <ul className="nav-items flex justify-center items-center gap-8">
              {navitems.map((item) => (
                <Link key={item.id} to={item.path} className={
                location.pathname === item.path
                  ? "text-customgray font-semibold text-sm"
                  : "hover:text-customgray font-semibold text-sm text-customgrayhover"
                  }>{item.name}</Link>
              ))}
            </ul>

            <Link to="/contactus" className="contacts flex gap-4 justify-center items-center">
              <button className="py-3 px-6 rounded-full bg-customgray text-white text-[14px]  font-semibold hover:bg-customgreen hover:text-customblack transition-all duration-300">Contact Us</button>
            </Link>

          </div>

      </nav>

      {/* mobile navbar  */}
      <nav className="w-full h-20 flex justify-between items-center p-4 md:hidden shadow-sm border-b border-gray-400 bg-gray-100">
        <img src="logo.png" className="h-6" />
        <HiMenuAlt2 className="size-12 rotate-180 shadow-2xl rounded-full bg-white p-2" onClick={() => setShowMobileNavbar(true)} />

        <div className={`${showMobileNavbar ? "flex" : "hidden"} fixed top-0 right-0 left-0 menu w-full flex-col gap-4 bg-white text-white bg-opacity-90 backdrop-blur-sm z-50  h-[500px] opacity-0 animate-slide-down-fast animate-fill-mode-forwards`}>

          <nav className="w-full h-20 p-4 flex justify-between items-center md:hidden shadow-sm  bg-gray-100">
            <img src="logo.png" className="h-6" />
            <IoCloseSharp className="size-12 rotate-180 shadow-2xl rounded-full bg-white text-customblack p-2" onClick={() => setShowMobileNavbar(false)} />
          </nav>

            
          <ul className="nav-items w-full flex flex-col justify-center items-center gap-2 py-2 ">
            {navitems.map((item) => (
              <Link key={item.id} to={item.path} className={
              location.pathname === item.path
                ? "text-customgray font-semibold text-xl"
                : "hover:text-customgray font-semibold text-xl text-customgrayhover"
                } onClick={() => setShowMobileNavbar(false)}>{item.name}</Link>
            ))}
          </ul>

          <Link to="/contactus" className="contacts flex gap-4 justify-center items-center" onClick={() => setShowMobileNavbar(false)}>
            <button className="py-3 px-6 rounded-full bg-customgray text-white text-[14px]  font-semibold hover:bg-customgreen hover:text-customblack transition-all duration-300">Contact Us</button>
          </Link>
          
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-400 font-semibold text-xl">Email:</p>
            <h1 className="text-customblack text-xl font-semibold">
              contact@emblocktech.com
            </h1>
          </div>
        </div>
      </nav>
    </>

  )
}

export default Navbar
