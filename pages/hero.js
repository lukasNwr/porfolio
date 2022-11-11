import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref: heroTextRef, inView: heroTextInView } = useInView();

  return (
    <div className="flex justify-center h-screen w-screen">
      <section className="flex flex-col gap-5 h-full w-full md:w-[60%] justify-center items-start px-10  md:px-8">
        <div ref={heroTextRef}>
          <span
            id="hero-name"
            className={`flex  text-white font-alice text-[3rem] sm:text-[4rem] leading-tight transition-all duration-[1100ms] ${
              heroTextInView ? "opacity-1" : "opacity-0"
            }`}
          >
            Hi, I am <br /> Lukas Novorolnik
          </span>
          <p
            className={`flex text-white font-inter text-[1rem] sm:text-[1.5rem] transition-all duration-[1100ms] ${
              heroTextInView ? "opacity-1" : "opacity-0 -translate-y-2"
            }`}
          >
            Software engineer, student and lover of refined simplicity
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
