// import { useLocation } from "react-router-dom";
// import { HiMenuAlt2 } from "react-icons/hi";
// import { useState } from "react";
// import { IoCloseSharp } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation();
//   const [showMobileNavbar, setShowMobileNavbar] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [showMobileSolutions, setShowMobileSolutions] = useState(false);

//   const solutionsItems = [
//     { id: 1, name: "Manufacturing", path: "/solutions/1", image: "/manufacturing-image1.png", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, a?" },
//     { id: 2, name: "Construction", path: "/solutions/2" , image: "/construction-image1.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quis deleniti molestias accusantium dolore ex et eum nihil cumque error!"
//     },
//     { id: 3, name: "Oil and Gas", path: "/solutions/3", image: "/pipeline-manufacturing-image1.png", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, a?" },
//     { id: 4, name: "Logistics and Supply Chain", path: "/solutions/4", image: "/fleet-safety-image1.png", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quis deleniti molestias accusantium dolore ex et eum nihil cumque error!"},
//     { id: 5, name: "Accounting", path: "/solutions/5", image: "/gst-solution-image1.png", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, a?" },
//   ];

//   const navitems = [
//     { id: 1, name: "Home", path: "/" },
//     { id: 2, name: "Solutions", path: "#" },
//     { id: 3, name: "Our Products", path: "/ourproducts" },
//     { id: 4, name: "About", path: "/about" },
//     { id: 5, name: "Services", path: "/services" },
//     { id: 6, name: "Careers", path: "/careers" },
//   ];

//   return (
//     <>
//       {/* Desktop Navbar */}
//       <nav className="opacity-0 translate-y-full w-full h-28 hidden lg:flex flex-row justify-between items-center px-12 border-b border-gray-300 shadow-sm animate-slide-down-fast animate-fill-mode-forwards">
//         <Link to="/" className="logo flex justify-center items-center gap-2 object-contain rounded-full">
//           <img src="/logo.png" className="h-8 w-auto" alt="Logo" />
//         </Link>

//         <div className="flex justify-between items-center gap-24">
//           <ul className="nav-items flex justify-center items-center gap-8">
//             {navitems.map((item) => (
//               <li
//                 key={item.id}
//                 className="relative"
//                 onClick={() => {
//                   if (item.name === "Solutions") {
//                     setShowPopup(!showPopup);
//                   }
//                 }}
//               >
//                 {item.name === "Solutions" ? (
//                   <button
//                     className={
//                       "hover:text-customgray font-semibold text-sm 2xl:text-md text-customgrayhover"
//                     }
//                   >
//                     {item.name}
//                   </button>
//                 ) : (
//                   <Link
//                     to={item.path}
//                     className={
//                       location.pathname === item.path
//                         ? "text-customgray font-semibold text-sm 2xl:text-md"
//                         : "hover:text-customgray font-semibold text-sm 2xl:text-md text-customgrayhover"
//                     }
//                     onClick={() => {
//                       setShowPopup(false);
//                     }}
//                   >
//                     {item.name}
//                   </Link>
//                 )}
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

//       {/* Desktop Solutions Popup */}
//       {showPopup && (
//         <div className="absolute w-[50%] h-[400px] left-1/2 top-[7rem] transform -translate-x-1/2 bg-black text-white rounded-xl p-4 2xl:p-8 shadow-lg text-center transition-all duration-300 flex flex-row  justify-between items-center z-50">
//           <div className="left w-[40%] h-full flex flex-col justify-start items-start gap-2 2xl:gap-6">
//             <h1 className="text-white text-lg 2xl:text-2xl w-full text-start font-medium">
//               Our Solutions
//             </h1>
//             {solutionsItems.map((item) => (
//               <Link
//                 key={item.id}
//                 to={item.path}
//                 className="text-gray-400 w-full text-md 2xl:text-xl font-medium text-start hover:text-white"
//                 onClick={() => setShowPopup(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           <div className="w-[60%] flex bg-white rounded-xl justify-start items-center p-4 h-full gap-4">
//             <img src="/image3.png" className="rounded-lg w-1/2 h-full object-cover" alt="Solutions" />
//             <p className="w-1/2 h-full text-sm 2xl:text-md text-black font-medium text-start">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, quisquam culpa! Facere cumque dolorem enim nobis aliquid necessitatibus dicta similique optio unde nesciunt quod obcaecati aliquam, repellendus magni eligendi sapiente.
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Mobile Navbar */}
//       <nav className="w-full h-20 flex justify-between items-center p-4 lg:hidden shadow-sm border-b border-gray-400 bg-gray-100">
//         <img src="logo.png" className="h-6" alt="Logo" />
//         <HiMenuAlt2
//           className="size-12 rotate-180 shadow-2xl rounded-full bg-white p-2"
//           onClick={() => setShowMobileNavbar(true)}
//         />

//         <div
//           className={`${
//             showMobileNavbar ? "flex" : "hidden"
//           } fixed top-0 right-0 left-0 menu w-full flex-col gap-2 bg-white text-white bg-opacity-90 backdrop-blur-sm z-50 h-screen opacity-0 animate-slide-down-fast animate-fill-mode-forwards`}
//         >
//           <nav className="w-full h-20 p-4 flex justify-between items-center lg:hidden shadow-sm bg-gray-100">
//             <img src="/logo.png" className="h-6" alt="Logo" />
//             <IoCloseSharp
//               className="size-12 rotate-180 shadow-2xl rounded-full bg-white text-customblack p-2"
//               onClick={() => setShowMobileNavbar(false)}
//             />
//           </nav>

//           <ul className="nav-items w-full flex flex-col justify-center items-center gap-2 py-2">
//             {navitems.map((item) => (
//               <div key={item.id} className="w-full flex flex-col items-center">
//                 {item.name === "Solutions" ? (
//                   <>
//                     <button
//                       className="hover:text-customgray font-semibold text-xl text-customgrayhover"
//                       onClick={() => setShowMobileSolutions(!showMobileSolutions)}
//                     >
//                       Solutions
//                     </button>
//                     {showMobileSolutions && (
//                       <div className="flex flex-col items-center gap-2 mt-1 mb-1">
//                         {solutionsItems.map((solution) => (
//                           <Link
//                             key={solution.id}
//                             to={solution.path}
//                             className="text-gray-500 text-lg hover:text-customgray"
//                             onClick={() => {
//                               setShowMobileSolutions(false);
//                               setShowMobileNavbar(false);
//                             }}
//                           >
//                             {solution.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     to={item.path}
//                     className={
//                       location.pathname === item.path
//                         ? "text-customgray font-semibold text-xl"
//                         : "hover:text-customgray font-semibold text-xl text-customgrayhover"
//                     }
//                     onClick={() => {
//                       setShowMobileNavbar(false)
//                       setShowPopup(false);
//                     }}
//                   >
//                     {item.name}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </ul>

//           <Link
//             to="/contactus"
//             className="contacts flex gap-4 justify-center items-center"
//             onClick={() => setShowMobileNavbar(false)}
//           >
//             <Link to="/contactus" className="py-3 px-6 rounded-full bg-customgray text-white text-[14px] font-semibold hover:bg-customgreen hover:text-customblack transition-all duration-300" onClick={() => setShowMobileNavbar(false)}>
//               Contact Us
//             </Link>
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
import { useState, useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showMobileSolutions, setShowMobileSolutions] = useState(false);
  const [activeSolution, setActiveSolution] = useState(null);
  const popupRef = useRef(null);

  const solutionsItems = [
    { id: 1, name: "Manufacturing", path: "/solutions/1", image: "/manufacturing-image1.png", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, a?" },
    { id: 2, name: "Construction", path: "/solutions/2", image: "/construction-image1.webp", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quis deleniti molestias accusantium dolore ex et eum nihil cumque error!" },
    { id: 3, name: "Oil and Gas", path: "/solutions/3", image: "/pipeline-monitoring-image1.png", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, a?" },
    { id: 4, name: "Logistics and Supply Chain", path: "/solutions/4", image: "/fleet-safety-image1.png", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quis deleniti molestias accusantium dolore ex et eum nihil cumque error!" },
    { id: 5, name: "Accounting", path: "/solutions/5", image: "/gst-solution-image1.png", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, a?" },
  ];

  const navitems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Solutions", path: "#" },
    { id: 3, name: "Our Products", path: "/ourproducts" },
    { id: 4, name: "About", path: "/about" },
    { id: 5, name: "Services", path: "/services" },
    { id: 6, name: "Careers", path: "/careers" },
  ];

  // Set initial active solution
  useEffect(() => {
    if (solutionsItems.length > 0) {
      setActiveSolution(solutionsItems[0]);
    }
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="opacity-0 translate-y-full w-full h-28 hidden lg:flex flex-row justify-between items-center px-12 border-b border-gray-300 shadow-sm animate-slide-down-fast animate-fill-mode-forwards">
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
                    className="hover:text-customgray font-semibold text-sm 2xl:text-md text-customgrayhover"
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
        <div ref={popupRef} className="absolute w-[50%] h-[400px] left-1/2 top-[7rem] transform -translate-x-1/2 bg-black text-white rounded-xl p-4 2xl:p-8 shadow-lg text-center transition-all duration-300 flex flex-row justify-between items-center z-50">
          <div className="left w-[40%] h-full flex flex-col justify-start items-start gap-2 2xl:gap-6">
            <h1 className="text-white text-lg 2xl:text-2xl w-full text-start font-medium">
              Our Solutions
            </h1>
            {solutionsItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="text-gray-400 w-full text-md 2xl:text-xl font-medium text-start hover:text-white"
                onMouseEnter={() => setActiveSolution(item)}
                onClick={() => setShowPopup(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="w-[60%] flex bg-white rounded-xl justify-start items-center p-4 h-full gap-4">
            {activeSolution && (
              <>
                <img 
                  src={activeSolution.image} 
                  className="rounded-lg w-1/2 h-full object-cover" 
                  alt={activeSolution.name} 
                />
                <p className="w-1/2 h-full text-sm 2xl:text-md text-black font-medium text-start">
                  {activeSolution.text}
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* Mobile Navbar */}
      <nav className="w-full h-20 flex justify-between items-center p-4 lg:hidden shadow-sm border-b border-gray-400 bg-gray-100">
        <img src="/logo.png" className="h-6" alt="Logo" />
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
            <img src="/logo.png" className="h-6" alt="Logo" />
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
                      setShowMobileNavbar(false);
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