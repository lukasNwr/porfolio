import { useContext, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { ScrollContext } from "../utils/scroll-observer";

const ContentWrapper = ({ children }) => {
  const { scrollY } = useContext(ScrollContext);
  const contentBgRef = useRef(null);
  let progress = 0.9;
  let tempProgress = 0;

  if (contentBgRef.current) {
    tempProgress = Math.min(
      1,
      scrollY / contentBgRef.current.clientHeight + 0.7
    );

    if (tempProgress > 0.9) {
      progress = tempProgress;
    }
    console.log("progress: " + progress);
  }

  return (
    <div className="flex flex-1 justify-center">
      <div className="flex flex-1 justify-center h-full w-screen lg:max-w-[120rem]">
        <div
          ref={contentBgRef}
          className="flex flex-col flex-1 gap-10 w-full bg-black/40  h-full border-t-[2px] border-r-[1px] border-l-[1px] border-gray-500/30 backdrop-blur-xl  items-start lg:items-center pt-20 justify-start rounded-3xl px-8 z-30 py-10 lg:py-20"
          style={{ transform: `scale(${progress})` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentWrapper;

export const Goal = ({ children }) => {
  const { ref: goal, inView: goalInView } = useInView();

  return (
    <div
      ref={goal}
      className="flex flex-col h-auto justify-start lg:max-w-[60%]"
    >
      <h2
        className={`font-alice text-white text-[2.5rem] lg:text-[4rem] pb-10 lg:py-16 ${
          goalInView ? "animate-textAnim" : "opacity-0"
        }`}
      >
        Project Goal
      </h2>
      <div className={`${goalInView ? "animate-textAnim" : "opacity-0"}`}>
        {children}
      </div>
    </div>
  );
};

export const Images = ({ children }) => {
  return (
    <div className="flex flex-col h-full gap-10 py-10  justify-center lg:min-h-[60rem] lg:max-h-[65rem] w-full md:relative">
      {children}
    </div>
  );
};

export const ProcessChallanges = ({ children }) => {
  const { ref: process, inView: processInView } = useInView();

  return (
    <div
      ref={process}
      className="flex flex-col justify-center h-auto lg:w-[60%]"
    >
      <h2
        className={`font-alice text-white text-[2.5rem] pb-10 lg:text-[4rem] lg:py-16 leading-tight ${
          processInView ? "animate-textAnim" : "opacity-0"
        }`}
      >
        Thought process and challenges
      </h2>
      <div className={`${processInView ? "animate-textAnim" : "opacity-0"}`}>
        {children}
      </div>
    </div>
  );
};
