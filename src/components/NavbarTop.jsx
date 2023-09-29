import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleUser,
  faBriefcaseClock,
  faAddressBook,
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [MobileOpen, setMobileOpen] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
      icon: faHouse,
    },
    {
      id: 2,
      link: "about",
      icon: faCircleUser,
    },
    {
      id: 3,
      link: "portfolio",
      icon: faBriefcaseClock
    },
    {
      id: 4,
      link: "contact",
      icon: faAddressBook
    },
  ];

  return (
    <nav className="bg-neutral-900 p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-white text-2xl font-rubik-mono-one">Kaede</p>

        <div
          className="md:hidden cursor-pointer text-gray-500"
          onClick={() => setMobileOpen(!MobileOpen)}
        >
          <FontAwesomeIcon icon={MobileOpen ? faTimes : faBars} size="lg" />
        </div>

        {/* Tablet : MD*/}
        {MobileOpen && (
          <ul className="md:hidden flex flex-col absolute top-full left-0 bg-neutral-900 text-white w-full py-2 px-4">
            {links.map(({ id, link, icon }) => (
              <li
                key={id}
                className="mb-2 cursor-pointer capitalize font-dm-mono text-gray-500 hover:text-navtop"
                onClick={() => setMobileOpen(false)}
              >
                {/* Align text and icon in mobile display */}
                <FontAwesomeIcon icon={icon} className="mr-2 min-w-[20px]" />
                {link}
              </li>
            ))}
          </ul>
        )}

        <ul className="hidden md:flex">
          {links.map(({ id, link, icon }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-dm-mono text-gray-500 hover:scale-105 duration-200 hover:text-navtop"
            >
              <FontAwesomeIcon icon={icon} className="mr-2" />
              {link}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
