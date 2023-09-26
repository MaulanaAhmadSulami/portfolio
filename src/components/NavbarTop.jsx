import React from "react";
import {faHouse, faKey, faHouseFire, faAddressCard} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="bg-neutral-900 p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-white text-2xl font-rubik-mono-one">
          Kaede
        </p>

        {/* Navigation Links */}
        <ul className="flex space-x-5">
          <li>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faHouse} className="mr-2" size='1x'/>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faKey} className="mr-2"/>
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faHouseFire} className="mr-2"/>
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faAddressCard} className="mr-2"/>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
