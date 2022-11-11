import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  default as ContentWrapper,
  Goal,
  Images,
  ProcessChallanges,
} from "../../components/content";
import Header from "../../components/Header";
import Title from "../../components/title";

const Emdit = () => {
  const { ref: welcomeImg, inView: welcomeImgInView } = useInView();
  const { ref: mainImg, inView: mainImgInView } = useInView();

  return (
    <div>
      <video
        className="fixed left-0 top-0 h-screen w-full object-cover -z-10"
        autoPlay
        muted
        loop
        id="background video dark"
      >
        <source src="/BG_video_dark.mp4" type="video/mp4" />
      </video>
      <Header />
      <Title
        projectName={"Emdit"}
        projectDescription={
          "Emdit is simple React application allowing you to create, open and edit and finally save your markdown documents right in the browser. It supports multiple flavours of markdown styling such as CommonMark or GFM (GitHub Flavoured Markdown). The editor includes a preview window, so you can see your markdown text rendered live as you type."
        }
      />
      <ContentWrapper>
        <Goal>
          <div className="font-inter text-white text-[1.1rem]">
            This project started as my desire to sharpen my front end skills in
            ReactJS by following one of the challenges on the
            https://www.frontendmentor.io network. My goal at the start of the
            project was to make just the UI part of the challenge but after
            working on the problem for some time, I decided to attempt to make
            the project functional and add the real markdown editor
            functionality to the UI (at least to some extent). The idea was to
            create very simple but functional markdown editor, that would allow
            users to open markdown files from their local drive and edit them in
            the editor. The users can also create markdown files directly in th
            e editor and then save them to their computer.
          </div>
        </Goal>
        <Images>
          <div
            ref={welcomeImg}
            className={`w-full h-full lg:h-[40vw] lg:w-[40vw] max-w-[40rem] lg:absolute lg:top-[5em] lg:left-[15vw] transition-all duration-[1100ms] ease-out ${
              welcomeImgInView ? "scale-100 opacity-100" : " scale-90 opacity-0"
            }`}
          >
            <Image
              src="/emdit_welcome.png"
              alt="emdit-welcome-image"
              layout="responsive"
              width={160}
              height={100}
            />
          </div>
          <div
            ref={mainImg}
            className={`w-full h-full lg:w-[40vw] lg:h-[40vw] max-w-[40rem] lg:absolute lg:top-[31em] lg:right-[15vw] transition-all duration-[1100ms] ease-out ${
              mainImgInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <Image
              src="/emdit_main.png"
              alt="emdit-welcome-image"
              layout="responsive"
              width={160}
              height={100}
            />
          </div>
        </Images>

        <ProcessChallanges>
          <p className="font-inter text-white text-[1.1rem]">
            The design for this project comes from one of the
            https://www.frontendmentor.io/ challenges. When I decided to make
            this challenge, my primary goal was to improve my skills with
            ReactJS. I also wanted to try out CSS framework called TailwindCSS.
            The project is also built with NextJs React framework, which I chose
            because of its smart optimizations and even though I am not
            particularly using these optimizations in this project, I wanted to
            get my hands on it to familiarize with the framework at least a
            little bit.
          </p>
        </ProcessChallanges>
      </ContentWrapper>
    </div>
  );
};

export default Emdit;
