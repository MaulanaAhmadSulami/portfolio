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
            Portfolio
          </p>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia odio temporibus aperiam voluptatibus, doloribus est excepturi labore doloremque necessitatibus?</p> */}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {
            // FOR IMAGES USE W-825 AND HEIGHT-755
            WorkLists.map(({ id, src, name, links }) => (
              <div key={id}>
                <div className="relative group">
                  <img
                    src={src}
                    alt=""
                    className="block w-full rounded-md object-cover duration-200 group-hover:scale-110 group-hover:opacity-20"
                  />
                  {/* line-clamp-5 (to make ... text effect) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:bg-opacity-10 group-hover:bg-gray-500 transition ease-in-out group-hover:opacity-100 duration-300">
                    <a href={links} target="blank" className="text-white font-bold">
                      <p className="font-momomaniac-one">{name}</p>
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
