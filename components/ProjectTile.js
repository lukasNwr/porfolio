import Image from "next/image";
import React from "react";
import ProjectLineIndicator from "./project-line-enumerator";

const ProjectTile = ({ name, description, children, numOfPages }) => {
  return (
    <>
      <div className="flex items-center justify-center pt-20 -z-10">
        <div className="flex flex-col md:flex-row  items-center md:items-start  min-h-[85vh] md:min-h-[50vh]  w-[90vw] md:w-[95vw]  bg-zinc-700/40 backdrop-blur-md border border-b-0 border-r-0 border-white/10 shadow-xl rounded-[1.25rem] p-5 mb-10 ">
          <div className="relative w-full md:min-h-full md:max-w-[50%]">
            <Image
              src="/emdit_main.png"
              alt="project-image"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>

          <div className="flex flex-col flex-grow items-start justify-center md:px-5">
            <span className=" text-white text-[2.25rem] md:text-[4rem] font-alice py-5">
              {name}
            </span>
            <p className=" text-white text-[1rem] md:text-[1.125rem] font-inter">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTile;
