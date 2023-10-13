import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contacts from "./Contacts";
import { Link } from "react-scroll";
const Footer = () => {
    return (
      
      <footer className="bg-neutral-900 p-4">
        <div name="contact"
        >

        </div>
        <div className="container mx-auto flex justify-center items-center">
            {/* mobile */}
            <ul className="md:hidden flex flex-col space-y-2">
            {Contacts.map(({ id, link, icon, url }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold"
                >
                  <FontAwesomeIcon icon={icon} className="mr-2" />
                  <Link to={link} smooth duration={500}>{link}</Link>
                </a>
              </li>
            ))}
          </ul>

          <ul className="hidden md:flex space-x-6">
            {Contacts.map(({ id, link, icon, url }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold"
                >
                  <FontAwesomeIcon icon={icon} className="mr-2" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    );
  };
  


export default Footer;