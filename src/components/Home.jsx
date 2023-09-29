import React from "react";
import mockProfile from "../assets/MockProfile.png";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-700"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full max-w-md">
          <h2 className="font-rubik-mono-one text-2xl sm:text-3xl font-bold text-white mr-10">
            Hi i'm Kaede
          </h2>
          <p className="font-momomaniac-one text-gray-300 py-4 max-w-md">
            Welcome to my personal website!
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-fuchsia-500 to-purple-500 cursor-pointer">
              Portfolio&nbsp;
              <span className="group-hover:rotate-90 duration-300">
                <FontAwesomeIcon className="text-1xl ml-1" icon={faArrowRight} />
              </span>
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={mockProfile}
            alt="Mock Profile"
            className="rounded-2xl mx-auto w-3/4 md:w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
