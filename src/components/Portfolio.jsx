import React from "react";
import WorkLists from "./WorkLists";

const Portfolio = () => {

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="font-rubik-mono-one text-2xl sm:text-3xl text-center underline border-p-2 ">
            My Works
          </p>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia odio temporibus aperiam voluptatibus, doloribus est excepturi labore doloremque necessitatibus?</p> */}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {
            // FOR IMAGES USE W-825 AND HEIGHT-755
            WorkLists.map(({ id, src, name, links }) => (
              <div key={id} className="">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
