import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const contactLinks = [
      {
        id: 1,
        link: "Email",
        icon: faEnvelope,
        url: "",
      },
      {
        id: 2,
        link: "LinkedIn",
        icon: faLinkedin,
        url: "",
      },
      {
        id: 3,
        link: "GitHub",
        icon: faGithub,
        url: "https://github.com/MaulanaAhmadSulami",
      },
    ];
  
    return (
      <footer className="bg-neutral-900 p-4">
        <div className="container mx-auto flex justify-center items-center">
            {/* mobile */}
            <ul className="md:hidden flex flex-col space-y-2">
            {contactLinks.map(({ id, link, icon, url }) => (
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

          <ul className="hidden md:flex space-x-6">
            {contactLinks.map(({ id, link, icon, url }) => (
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