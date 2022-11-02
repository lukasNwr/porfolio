import Link from "next/link";
import { useContext, useRef } from "react";
import {
  FaEnvelopeSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { ScrollContext } from "../utils/scroll-observer";

const Mailto = ({ email, subject, body, children }) => {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {children}
    </a>
  );
};

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
      className="h-screen w-screen px-10"
    >
      <div className="flex flex-col h-full px-8 items-start justify-center md:px-20 lg:px-0 lg:justify-center lg:items-center">
        {/* Small Titile */}
        <div
          ref={contactTitleRef}
          className={`lg:hidden font-alice text-white text-[3rem] pb-10 ${
            contactTitleInView ? "animate-textAnim" : "opacity-0"
          }`}
        >
          Contact
        </div>
        <div className={"  w-full  relative"}>
          {/* Big Title */}
          <div
            className="absolute hidden lg:block font-alice text-white/20 text-[14rem] top-[-14rem] pb-10 right-[-4em] -z-10"
            style={{
              transform: `translateX(-${progress * 100}vw)`,
              opacity: `${progress}`,
            }}
          >
            Contact
          </div>
          <div
            ref={contactContentRef}
            className={` lg:justify-center flex flex-col gap-6 lg:flex-row ${
              contactContentInView ? "animate-textAnim" : "opacity-0"
            }`}
          >
            <div className="h-auto items-center text-white font-inter lg:p-3 ">
              <Mailto
                email={"lukas.novorolnik@gmail.com"}
                subject={"Portfolio response"}
              >
                <div className="flex flex-row gap-5 transition-all lg:hover:scale-105 hover:text-accent cursor-pointer">
                  <FaEnvelopeSquare className="h-[2rem] w-auto lg:h-auto lg:w-[10rem] " />
                  <span className="lg:hidden text-2xl ">e-mail</span>
                </div>
              </Mailto>
            </div>

            <div className="h-auto items-center text-white font-inter lg:p-3 ">
              <Link href="https://www.linkedin.com/in/lukas-novorolnik-4575121aa/">
                <div className="flex flex-row gap-5 transition-all lg:hover:scale-105 hover:text-accent cursor-pointer">
                  <FaLinkedin className="h-[2rem] w-auto lg:h-auto lg:w-[10rem] " />
                  <span className="lg:hidden text-2xl ">LinkedIn</span>
                </div>
              </Link>
            </div>

            <div className="h-auto items-center text-white font-inter lg:p-3 ">
              <Link href="https://www.facebook.com/lukas.novorolnik">
                <div className="flex flex-row gap-5 transition-all lg:hover:scale-105 hover:text-accent cursor-pointer">
                  <FaFacebookSquare className="h-[2rem] w-auto lg:h-auto lg:w-[10rem] " />
                  <span className="lg:hidden text-2xl ">Facebook</span>
                </div>
              </Link>
            </div>

            <div className="h-auto items-center text-white font-inter lg:p-3 ">
              <Link href="https://github.com/lukasNwr">
                <div className="flex flex-row gap-5 transition-all lg:hover:scale-105 hover:text-accent cursor-pointer">
                  <FaGithubSquare className="h-[2rem] w-auto lg:h-auto lg:w-[10rem] " />
                  <span className="lg:hidden text-2xl ">GitHub</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
