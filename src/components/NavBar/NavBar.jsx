import React from "react";
import NavLogo from "./NavLogo";
import Button from "./Btn";
import imgLink from "../../assets/WhatsApp Image 2024-03-09 at 21.22.09_e5c747c4.jpg";
function NavBar(Props) {
  let btnprop = {
    BtnStyle: "btn-class text-lg font-bold py-2 px-4 bg-blue-500 rounded",
    btnText: "Get Started",
  };

  let navLogo = {
    navLink: imgLink,
    navText: "GeekFood",
    className: "rounded-full w-[2em] h-[2em] border border-2 shadow-md ",
  };

  return (
    <nav className="flex justify-between py-4 px-10 items-center  text-xl  shadow-md bg-gray-800 ">
      <NavLogo navLogo={navLogo} />
      <ul className="text-white flex gap-4 cursor-pointer ">
        {Props.navBarItems.map((item, index) => (
          <li key={index} className="hover:text-blue-500">
            {item}
          </li>
        ))}
      </ul>
      <Button BtnStyle={btnprop} />
    </nav>
  );
}

export default NavBar;
