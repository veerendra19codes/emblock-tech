
// import { useLocation } from "react-router-dom";
// import { HiMenuAlt2 } from "react-icons/hi";
// import { useState } from "react";
// import { IoCloseSharp } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation();
//   const [showMobileNavbar, setShowMobileNavbar] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const navitems = [
//     { id: 1, name: "Home", path: "/" },
//     { id: 2, name: "Solutions", path: "/solutions/1" },
//     { id: 3, name: "Our Products", path: "/ourproducts" },
//     { id: 4, name: "About", path: "/about" },
//     { id: 5, name: "Services", path: "/services" },
//     { id: 6, name: "Careers", path: "/careers" },
//   ];

//   return (
//     <>
//       {/* Desktop Navbar */}
//       <nav className="opacity-0 translate-y-full w-full h-28 hidden lg:flex flex-row justify-between items-center px-12 border-b border-gray-300 shadow-sm animate-slide-down animate-fill-mode-forwards">
//         <Link to="/" className="logo flex justify-center items-center gap-2 object-contain rounded-full">
//           <img src="/logo.png" className="h-8 w-auto" />
//         </Link>

//         <div className="flex justify-between items-center gap-24">
//           <ul className="nav-items flex justify-center items-center gap-8">
//             {navitems.map((item) => (
//               <li
//                 key={item.id}
//                 className="relative"
//                 onClick={() => {
//                     item.name == "Solutions" && setShowPopup(!showPopup);
//                     item.name != "Solutions" && setShowPopup(false);
//                 } }

//                 // onMouseEnter={() => item.name === "Solutions" && setShowPopup(true)}
//                 // onMouseLeave={() => item.name === "Solutions" && setShowPopup(false)}
//               >
//                 <Link
//                   to={item.path}
//                   className={
//                     location.pathname === item.path
//                       ? "text-customgray font-semibold text-sm 2xl:text-md"
//                       : "hover:text-customgray font-semibold text-sm 2xl:text-md text-customgrayhover"
//                   }
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <Link to="/contactus" className="contacts flex gap-4 justify-center items-center">
//             <button className="py-3 px-6 rounded-full bg-customgray text-white text-[14px] font-semibold hover:bg-customgreen hover:text-customblack transition-all duration-300">
//               Contact Us
//             </button>
//           </Link>
//         </div>
//       </nav>

//       {/* Popup Box - Centered */}
//       {showPopup && (
//         <div className="absolute w-[40%] left-1/2 top-[7rem] transform -translate-x-1/2 bg-black text-white rounded-xl p-4 shadow-lg  text-center transition-all duration-300 flex flex-row justify-center items-center">
//           <div className="left w-1/2 flex flex-col justify-start items-start gap-2">
//             <h1 className="text-white text-lg w-full text-start font-medium">
//               Our Solutions
//             </h1>

//             <Link to="/solutions/1" className="text-gray-400 w-full text-md font-medium text-start " onClick={() => setShowPopup(false)}>
//               Manufacturing
//             </Link>

//             <Link to="/solutions/2" className="text-gray-400 w-full text-md font-medium text-start " onClick={() => setShowPopup(false)}>
//               Construction
//             </Link>

//             <Link to="/solutions/3" className="text-gray-400 w-full text-md font-medium text-start " onClick={() =>  setShowPopup(false)}>
//               Retail
//             </Link>

//             <Link to="/solutions/4" className="text-gray-400 w-full text-md font-medium text-start " onClick={() =>  setShowPopup(false)}>
//               Logistics and Supply Chain
//             </Link>

//             <Link to="/solutions/5" className="text-gray-400 w-full text-md font-medium text-start " onClick={() => setShowPopup(false)}>
//               Accounting
//             </Link>
//           </div>

//           <div className="w-1/2 flex bg-white rounded-xl justify-start items-center p-4 h-full" >
//             <img src="/image3.png" className="rounded-lg w-1/2 h-full object-cover" />

//             <p className="w-1/2 h-full text-xs text-black font-medium">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, quisquam culpa! Facere cumque dolorem enim nobis aliquid necessitatibus dicta similique optio unde nesciunt quod obcaecati aliquam, repellendus magni eligendi sapiente.
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Mobile Navbar */}
//       <nav className="w-full h-20 flex justify-between items-center p-4 lg:hidden shadow-sm border-b border-gray-400 bg-gray-100">
//         <img src="logo.png" className="h-6" />
//         <HiMenuAlt2
//           className="size-12 rotate-180 shadow-2xl rounded-full bg-white p-2"
//           onClick={() => setShowMobileNavbar(true)}
//         />

//         <div
//           className={`${
//             showMobileNavbar ? "flex" : "hidden"
//           } fixed top-0 right-0 left-0 menu w-full flex-col gap-4 bg-white text-white bg-opacity-90 backdrop-blur-sm z-50 h-[500px] opacity-0 animate-slide-down-fast animate-fill-mode-forwards`}
//         >
//           <nav className="w-full h-20 p-4 flex justify-between items-center lg:hidden shadow-sm bg-gray-100">
//             <img src="logo.png" className="h-6" />
//             <IoCloseSharp
//               className="size-12 rotate-180 shadow-2xl rounded-full bg-white text-customblack p-2"
//               onClick={() => setShowMobileNavbar(false)}
//             />
//           </nav>

//           <ul className="nav-items w-full flex flex-col justify-center items-center gap-2 py-2">
//             {navitems.map((item) => (
//               <Link
//                 key={item.id}
//                 to={item.path}
//                 className={
//                   location.pathname === item.path
//                     ? "text-customgray font-semibold text-xl"
//                     : "hover:text-customgray font-semibold text-xl text-customgrayhover"
//                 }
//                 onClick={() => setShowMobileNavbar(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </ul>

//           <Link
//             to="/contactus"
//             className="contacts flex gap-4 justify-center items-center"
//             onClick={() => setShowMobileNavbar(false)}
//           >
//             <button className="py-3 px-6 rounded-full bg-customgray text-white text-[14px] font-semibold hover:bg-customgreen hover:text-customblack transition-all duration-300">
//               Contact Us
//             </button>
//           </Link>

//           <div className="flex flex-col gap-2 justify-center items-center">
//             <p className="text-gray-400 font-semibold text-xl">Email:</p>
//             <h1 className="text-customblack text-xl font-semibold">
//               contact@emblocktech.com
//             </h1>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;









import { useLocation } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showMobileSolutions, setShowMobileSolutions] = useState(false);

  const solutionsItems = [
    { id: 1, name: "Manufacturing", path: "/solutions/1" },
    { id: 2, name: "Construction", path: "/solutions/2" },
    { id: 3, name: "Retail", path: "/solutions/3" },
    { id: 4, name: "Logistics and Supply Chain", path: "/solutions/4" },
    { id: 5, name: "Accounting", path: "/solutions/5" },
  ];

  const navitems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Solutions", path: "#" },
    { id: 3, name: "Our Products", path: "/ourproducts" },
    { id: 4, name: "About", path: "/about" },
    { id: 5, name: "Services", path: "/services" },
    { id: 6, name: "Careers", path: "/careers" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="opacity-0 translate-y-full w-full h-28 hidden lg:flex flex-row justify-between items-center px-12 border-b border-gray-300 shadow-sm animate-slide-down animate-fill-mode-forwards">
        <Link to="/" className="logo flex justify-center items-center gap-2 object-contain rounded-full">
          <img src="/logo.png" className="h-8 w-auto" alt="Logo" />
        </Link>

        <div className="flex justify-between items-center gap-24">
          <ul className="nav-items flex justify-center items-center gap-8">
            {navitems.map((item) => (
              <li
                key={item.id}
                className="relative"
                onClick={() => {
                  if (item.name === "Solutions") {
                    setShowPopup(!showPopup);
                  }
                }}
              >
                {item.name === "Solutions" ? (
                  <button
                    className={
                      "hover:text-customgray font-semibold text-sm 2xl:text-md text-customgrayhover"
                    }
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={
                      location.pathname === item.path
                        ? "text-customgray font-semibold text-sm 2xl:text-md"
                        : "hover:text-customgray font-semibold text-sm 2xl:text-md text-customgrayhover"
                    }
                    onClick={() => {
                      setShowPopup(false);
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link to="/contactus" className="contacts flex gap-4 justify-center items-center">
            <button className="py-3 px-6 rounded-full bg-customgray text-white text-[14px] font-semibold hover:bg-customgreen hover:text-customblack transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </nav>

      {/* Desktop Solutions Popup */}
      {showPopup && (
        <div className="absolute w-[40%] left-1/2 top-[7rem] transform -translate-x-1/2 bg-black text-white rounded-xl p-4 shadow-lg text-center transition-all duration-300 flex flex-row justify-center items-center z-50">
          <div className="left w-1/2 flex flex-col justify-start items-start gap-2">
            <h1 className="text-white text-lg w-full text-start font-medium">
              Our Solutions
            </h1>
            {solutionsItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="text-gray-400 w-full text-md font-medium text-start hover:text-white"
                onClick={() => setShowPopup(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="w-1/2 flex bg-white rounded-xl justify-start items-center p-4 h-full">
            <img src="/image3.png" className="rounded-lg w-1/2 h-full object-cover" alt="Solutions" />
            <p className="w-1/2 h-full text-xs text-black font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, quisquam culpa! Facere cumque dolorem enim nobis aliquid necessitatibus dicta similique optio unde nesciunt quod obcaecati aliquam, repellendus magni eligendi sapiente.
            </p>
          </div>
        </div>
      )}

      {/* Mobile Navbar */}
      <nav className="w-full h-20 flex justify-between items-center p-4 lg:hidden shadow-sm border-b border-gray-400 bg-gray-100">
        <img src="logo.png" className="h-6" alt="Logo" />
        <HiMenuAlt2
          className="size-12 rotate-180 shadow-2xl rounded-full bg-white p-2"
          onClick={() => setShowMobileNavbar(true)}
        />

        <div
          className={`${
            showMobileNavbar ? "flex" : "hidden"
          } fixed top-0 right-0 left-0 menu w-full flex-col gap-2 bg-white text-white bg-opacity-90 backdrop-blur-sm z-50 h-screen opacity-0 animate-slide-down-fast animate-fill-mode-forwards`}
        >
          <nav className="w-full h-20 p-4 flex justify-between items-center lg:hidden shadow-sm bg-gray-100">
            <img src="logo.png" className="h-6" alt="Logo" />
            <IoCloseSharp
              className="size-12 rotate-180 shadow-2xl rounded-full bg-white text-customblack p-2"
              onClick={() => setShowMobileNavbar(false)}
            />
          </nav>

          <ul className="nav-items w-full flex flex-col justify-center items-center gap-2 py-2">
            {navitems.map((item) => (
              <div key={item.id} className="w-full flex flex-col items-center">
                {item.name === "Solutions" ? (
                  <>
                    <button
                      className="hover:text-customgray font-semibold text-xl text-customgrayhover"
                      onClick={() => setShowMobileSolutions(!showMobileSolutions)}
                    >
                      Solutions
                    </button>
                    {showMobileSolutions && (
                      <div className="flex flex-col items-center gap-2 mt-1 mb-1">
                        {solutionsItems.map((solution) => (
                          <Link
                            key={solution.id}
                            to={solution.path}
                            className="text-gray-500 text-lg hover:text-customgray"
                            onClick={() => {
                              setShowMobileSolutions(false);
                              setShowMobileNavbar(false);
                            }}
                          >
                            {solution.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={
                      location.pathname === item.path
                        ? "text-customgray font-semibold text-xl"
                        : "hover:text-customgray font-semibold text-xl text-customgrayhover"
                    }
                    onClick={() => {
                      setShowMobileNavbar(false)
                      setShowPopup(false);
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </ul>

          <Link
            to="/contactus"
            className="contacts flex gap-4 justify-center items-center"
            onClick={() => setShowMobileNavbar(false)}
          >
            <button className="py-3 px-6 rounded-full bg-customgray text-white text-[14px] font-semibold hover:bg-customgreen hover:text-customblack transition-all duration-300">
              Contact Us
            </button>
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
  );
};

export default Navbar;