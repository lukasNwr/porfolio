import { useContext, useRef } from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { ScrollContext } from "../utils/scroll-observer";
import Link from 'next/link'

const Mailto = ({ email, subject, body, children }) => {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {children}
    </a>
  )
}

const Contact = () => {
  const { ref: contactContentRef, inView: contactContentInView } = useInView();
  const { ref: contactTitleRef, inView: contactTitleInView } = useInView();
  const { scrollY } = useContext(ScrollContext);
  const contactSectionRef = useRef(null);
  let progress = 0;

  if (contactSectionRef.current) {
    progress = Math.min(
      1,
      (scrollY - window.innerHeight * 3) /
      contactSectionRef.current.clientHeight
    );
  }

  return (
    <section
      id="contact"
      ref={contactSectionRef}
      className="relative h-[80vh] w-screen"
    >
      <div className="flex flex-col h-[70%] px-8 items-start md:items-center">
        {/* Small Titile */}
        <div
          ref={contactTitleRef}
          className={`md:hidden font-alice text-white text-[3rem] pb-10 ${contactTitleInView ? "animate-textAnim" : "opacity-0"
            }`}
        >
          Contact
        </div>
        {/* Big Title */}
        <div
          className="absolute hidden md:block font-alice text-white/20 text-[12rem] lg:text-[14rem] top-[-2rem] lg:top-[-5rem] pb-10 right-[-3.8em] lg:right-[-4em] -z-10"
          style={{
            transform: `translateX(-${progress * 100}vw)`,
            opacity: `${progress}`,
          }}
        >
          Contact
        </div>
        <div
          ref={contactContentRef}
          className={`flex flex-col gap-6 md:flex-row h-full w-full  md:justify-center ${contactContentInView ? "animate-textAnim" : "opacity-0"
            }`}
        >
          <Mailto email={"lukas.novorolnik@gmail.com"} subject={"Portfolio response"}>
            <div className="flex flex-row items-center  gap-5 text-white font-inter  cursor-pointer md:p-3 transition-all md:hover:scale-105 hover:text-accent">
              <MdMail className="h-[2rem] w-auto md:h-auto md:w-[10rem] lg:w-[12.5rem] " />
              <span className="md:hidden text-2xl ">e-mail</span>
            </div>
          </Mailto>
          <Link href="https://www.linkedin.com/in/lukas-novorolnik-4575121aa/">
            <div className="flex flex-row h-auto items-center gap-5 text-white font-inter  cursor-pointer md:p-3 transition-all md:hover:scale-105 hover:text-accent">
              <FaLinkedin className="h-[2rem] w-auto md:h-auto md:w-[8rem] lg:w-[10rem] " />
              <span className="md:hidden text-2xl ">LinkedIn</span>
            </div>
          </Link>
          <Link href='https://www.facebook.com/lukas.novorolnik'>
            <div className="flex flex-row h-auto items-center gap-5 text-white font-inter  cursor-pointer md:p-3 transition-all md:hover:scale-105 hover:text-accent">
              <FaFacebookSquare className="h-[2rem] w-auto md:h-auto md:w-[8rem] lg:w-[10rem] " />
              <span className="md:hidden text-2xl ">Facebook</span>
            </div>
          </Link>
          <Link href='https://github.com/lukasNwr'>
            <div className="flex flex-row h-auto items-center gap-5 text-white font-inter cursor-pointer md:p-3 transition-all md:hover:scale-105 hover:text-accent">
              <FaGithubSquare className="h-[2rem] w-auto md:h-auto md:w-[8rem] lg:w-[10rem] " />
              <span className="md:hidden text-2xl ">GitHub</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
