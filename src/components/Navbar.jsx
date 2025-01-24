import { useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  // console.log("location:", location);

  const navitems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Our Work",
      path: "/ourwork",
    },
    {
      id: 3,
      name: "Our Projects",
      path: "/ourprojects",
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
    {
      id: 7,
      name: "Contact Us",
      path: "/contactus",
    },

  ]


  return (
    <nav className="opacity-0 translate-y-full w-full h-28 flex flex-row justify-between items-center px-12 border-b border-gray-300 shadow-sm animate-slide-down animate-fill-mode-forwards">

        <div className="logo flex justify-center items-center gap-2 object-contain rounded-full">
          <img src="/logo.png" className="h-8 w-auto rounded-full transition-all duration-300" />
        </div>

        <div className="flex justify-between items-center gap-24">

          <ul className="nav-items flex justify-center items-center gap-8">
            {navitems.map((item) => (
              <a key={item.id} href={item.path} className={
              location.pathname === item.path
                ? "text-customgray font-semibold text-sm"
                : "hover:text-customgray font-semibold text-sm text-customgrayhover"
                }>{item.name}</a>
            ))}
          </ul>

          <div className="contacts flex gap-4 justify-center items-center">
            <button className="py-3 px-6 rounded-full bg-customgray text-white text-[14px]  font-semibold hover:bg-customgreen hover:text-customblack transition-all duration-300">Contact me</button>
          </div>

        </div>

    </nav>
  )
}

export default Navbar
