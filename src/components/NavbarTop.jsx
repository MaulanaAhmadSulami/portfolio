import React, { Component, useRef } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleUser,
  faBriefcaseClock,
  faAddressBook,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ReactTypingEffect from "react-typing-effect";
import { useEffect } from "react";

import { Link } from "react-scroll";

const Navbar = () => {
  const [MobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef(null);
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
      icon: faBriefcaseClock,
    },
    {
      id: 4,
      link: "contact",
      icon: faAddressBook,
    },
  ];

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (
        MobileOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    };

    const handleScroll = () => {
      if (MobileOpen) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("scroll", handleScroll);

    //   // return () => {
    //   //   document.removeEventListener("click", handleDocumentClick);
    //   //   // document.removeEventListener("scroll", handleScroll);
    //   // };
  }, [MobileOpen]);

  return (
    <nav className="bg-neutral-900 p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <p className="text-white text-2xl font-rubik-mono-one">Kaede</p>
          <div className="text-white text-2xl sm:text-xl ml-3">
            <ReactTypingEffect
              text={["こんにちは!", "안녕하세요!"]}
              cursorRenderer={(cursor) => <h1>{cursor}</h1>}
              displayTextRenderer={(text, i) => {
                return (
                  <h1>
                    {text.split("").map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span
                          key={key}
                          style={i % 2 === 0 ? { color: "" } : {}}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </h1>
                );
              }}
            />
          </div>
        </div>

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
                <Link to={link} smooth duration={500}>
                  <FontAwesomeIcon icon={icon} className="mr-2" />
                </Link>
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
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
              <Link to={link} smooth duration={500}>
                <FontAwesomeIcon icon={icon} className="mr-2" />
              </Link>

              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
