import { useInView } from "react-intersection-observer";

const Title = ({ projectName, projectDescription }) => {
  const { ref: title, inView: titleInView } = useInView();
  const { ref: description, inView: descriptionInView } = useInView();
  const { ref: divider, inView: dividerInView } = useInView();

  return (
    <div className="flex flex-1 justify-center items-center lg:h-screen min-h-screen w-screen pt-10 md:pt-0">
      <div className="flex flex-col lg:flex-row h-full w-full lg:w-[70%] max-w-[120rem] justify-center lg:justify-around items-start lg:items-center px-8 lg:px-0">
        <h1
          ref={title}
          className={`text-left text-white font-alice text-[4rem] md:text-[6rem] pt-10 py-10 lg:w-[40%] ${
            titleInView ? "animate-textAnim" : "opacity-0"
          }`}
        >
          {projectName}
        </h1>
        <div
          ref={divider}
          className={`border-white border-t-4 lg:border-t-0 lg:border-r-4 w-[60%] lg:w-0 lg:h-[40%] rounded-full transition-all ease-in-out duration-700 ${
            dividerInView ? "scale-100 opacity-100" : "opacity-0 scale-0"
          }`}
        ></div>
        <p
          ref={description}
          className={`font-inter text-white sm:text-[1rem] text-[1.3rem] md:text-[1.5rem] lg:text-[1.3rem] py-10 lg:w-[40%] ${
            descriptionInView ? "animate-textAnim" : "opacity-0"
          }`}
        >
          {projectDescription}
        </p>
      </div>
    </div>
  );
};

export default Title;
