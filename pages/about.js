import { useContext, useRef } from "react";
import { FaWindows } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { ScrollContext } from "../utils/scroll-observer";

const About = () => {
  const { scrollY } = useContext(ScrollContext);
  const { ref: titleRef, inView: titleIsVisible } = useInView();
  const { ref: contentRef, inView: contentIsVisible } = useInView();

  let progress = 0;
  const aboutSectionRef = useRef(null);

  if (aboutSectionRef.current) {
    progress = Math.min(1, scrollY / aboutSectionRef.current.clientHeight);
    // console.log("section height " + aboutSectionRef.current.clientHeight);
    // console.log("window height " + window.innerHeight);
    // console.log("scrollY " + scrollY);
    // console.log("progress " + progress);
  }

  return (
    <section
      id="about"
      ref={aboutSectionRef}
      className="min-h-screen w-screen flex items-center"
    >
      <div className="flex flex-col px-10 items-start lg:items-center h-full justify-end  py-10 md:py-10 pt-10">
        <div className="flex flex-col lg:items-center relative md:px-20 lg:px-0">
          {/* Small screen title */}
          <span
            ref={titleRef}
            className={`text-white text-[3rem] font-alice py-5 ${titleIsVisible
                ? "animate-textAnim  lg:hidden"
                : "lg:hidden opacity-0"
              }`}
          >
            About me
          </span>
          {/* Big screen title (with paralax effext) */}
          <span
            className={`hidden lg:block text-white font-alice py-10 text-[10rem] lg:py-0 lg:absolute lg:top-[-11rem] lg:-z-10 lg:text-white/20 lg:right-[-70rem]`}
            style={{
              transform: `translateX(-${progress * 120}vw)`,
              opacity: `${progress}`,
            }}
          >
            About me
          </span>
          <p
            ref={contentRef}
            className={`text-white text-[1.1rem] font-inter pb-10 lg:w-[60%] lg:px-0 md:z-20 ${contentIsVisible ? "animate-textAnim" : "opacity-0"
              }

        `}
          >
            Hi there! I am Lukas. I am passionate and slightly introverted
            person, who loves building things. When I was little, I loved
            building things with lego (and to be honest I still kinda do),
            because it allowed me to express my imagination and transform it
            into objects in real world. Later music took my full focus and I
            wanted to be a rock star, so I learned to play various musical
            instruments. These days, even though music is still deeply in my
            heart, after I saw couple of episodes of Mr. Robot, I realised that
            I want to learn to code and express myself in that way.
            <br />
            <br />I obtained my Bachelor’s degree in computer science and
            recently started my Master’s degree studies at the University of
            Southern Denmark in Computer Science. I am seeking for a developer
            role, where I could help a company to achieve their goals and
            perfect my skills as a developer and also as a person.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
