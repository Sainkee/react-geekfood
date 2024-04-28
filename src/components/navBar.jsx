import logo from "../assets/logo.svg";
import { navItems } from "../constants";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function NavBar() {
  const [windowOpen, setWindowOpen] = useState(false);
  const handleClick = () => {
    setWindowOpen(!windowOpen);
  };
  return (
    <div className="backdrop-blur-md sticky top-0 z-50  py-3 border-b border-neutral-700/65   ">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="NavLogo" className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight">GeekFood</span>
          </div>
          <div>
            <ul className="hidden  lg:flex ml-14 space-x-12 ">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  href={item.href}
                  className="hover:text-blue-500"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex items-center">
            <a href="#" className=" px-3 py-2 rounded-md bg-blue-500  hover:bg-blue-700 ">
              Get started
            </a>
          </div>
          <div className=" lg:hidden md:flex flex-col flex-end  ">
            <button onClick={handleClick}>
              {" "}
              {windowOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {windowOpen && (
          <div className=" top-20  w-full bg-neutral-800 shadow-lg fixed right-0 shadow-neutral-800 py-10 z-50  flex flex-col justify-center items-center lg:hidden">
            <ul >
              {navItems.map((item, index) => (
                <li
                  key={index}
                  href={item.href}
                  className="hover:text-blue-500 py-4"
                >
                  {item.label}
                </li>
              ))}
            </ul>
            <a href="#" className="py-2 px-3 bg-blue-500 hover:bg-blue-700 rounded-md">Get Strarted</a>
          </div>
        )}
      </div>
    </div>
  );
}
