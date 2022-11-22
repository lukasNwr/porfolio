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

const ProjectEllen = () => {
  const { ref: mainImg, inView: mainImgInView } = useInView();
  const { ref: tileEditImg, inView: tileEditImgInView } = useInView();

  return (
    <div>
      <video
        className="fixed left-0 top-0 h-screen w-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
        id="background video dark"
      >
        <source src="/BG_video_dark.mp4" type="video/mp4" />
      </video>
      <Header />
      <Title
        projectName={"Project Ellen"}
        projectDescription={
          "Project Ellen is a 2D action game that uses sprites and tile-sheets from the old Alien Breed games. The project focuses on implementation and experimentation with object-oriented programming and allows you to play through one level, which contains multiple enemy types, saving feature, level up/gear up feature and some riddle as well."
        }
      />
      <ContentWrapper>
        <Goal>
          <div className="font-inter text-white text-[1.1rem]">
            This project was made as assignment for one of my classes while I
            was in school. The class focused on object-oriented programming and
            this assignment was supposed to test the knowledge that we have
            learned throughout the course. The project focuses on implementation
            of some key features of OOP such as inheritance, abstraction,
            polymorphism and encapsulation, design patterns… The result was
            supposed to be one fully playable game level that is finishable and
            contains multiple different types of enemies, interactive elements,
            some progress features and of course ability to successfully finish
            the level with some action.
          </div>
        </Goal>
        <Images>
          <div
            ref={mainImg}
            className={`w-full h-full lg:h-[40vw] lg:w-[40vw] max-w-[40rem] lg:absolute lg:top-[5em] lg:left-[15vw] transition-all duration-[1100ms] ease-out ${mainImgInView ? "scale-100 opacity-100" : " scale-90 opacity-0"
              }`}
          >
            <Image
              src="/project-ellen-main-big.png"
              alt="project-ellen picture"
              layout="responsive"
              width={160}
              height={100}
            />
          </div>
          <div
            ref={tileEditImg}
            className={`w-full h-full lg:w-[40vw] lg:h-[40vw] max-w-[40rem] lg:absolute lg:top-[31em] lg:right-[15vw] transition-all duration-[1100ms] ease-out ${tileEditImgInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
          >
            <Image
              src="/project-ellen-tileEdit-big.png"
              alt="emdit-welcome-image"
              layout="responsive"
              width={160}
              height={100}
            />
          </div>
        </Images>

        <ProcessChallanges>
          <p className="font-inter text-[1.1rem] text-white">
            The game was developed on top of a GameLib library using Java
            language. The decision to use Java was made by school but it allowed
            me to utilize full power of object oriented programming, since Java
            supports all of the core principles of OOP. The key point of this
            project was to learn basics of OOP, therefore the whole architecture
            of the project follows this mindset. In the project, I have used
            multiple design patterns such as Facade, Memento, Prototype and
            others. <br />
            <br />
            While I was developing this project, I also tried my best to comply
            with the main rules of OOP, meaning using data encapsulation, class
            hierarchy, interfaces, composition and polymorphism. I also strived
            to use as least member variables as I could with useful and
            understandable APIs in form of public methods.
            <br />
            <br />
            Since this project was relatively big and my knowledge of OOP at
            that time was pretty much non existent, I was struggling mainly with
            successful implementation the design patterns and concepts such as
            polymorphism in practical form. That being said, I am confident,
            that by completing this project I have learned a lot about OOP and
            its principles and I enjoyed working on it a lot, because, hey,
            working on a game is always fun right?
          </p>
        </ProcessChallanges>
      </ContentWrapper>
    </div>
  );
};

export default ProjectEllen;
