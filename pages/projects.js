import Image from "next/image";
import Link from "next/link";
import GitButton from "../components/GitButton";
import LiveButton from "../components/LiveButton";

import {
  ProjectContainer,
  ProjectLeft,
  ProjectRight,
  WorkBackground,
} from "../components/Project";
import {
  Tile,
  TileBackground,
  TileContent,
  TileWrapper,
} from "../components/Tile";

const Projects = () => (
  <section id="work">
    <TileWrapper numOfPages={2}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <ProjectContainer>
              <ProjectLeft progress={progress}>
                <div className="font-alice py-5 text-[2rem] lg:text-[4rem]">
                  <Link href="/emdit/emdit">Emdit</Link>
                </div>
                <div className="font-inter text-sm lg:text-xl">
                  Simple web editor, allowing you to create, load and save
                  markdown files, with live preview
                </div>
                <div className="flex items-center gap-4">
                  <GitButton repoLink="https://github.com/lukasNwr/markdown-editor" />
                  <LiveButton liveLink="https://markdown-editor-lukasnwr.vercel.app"/>
                </div>
              </ProjectLeft>
              <ProjectRight>
                <Image
                  src="/emdit_main.png"
                  alt="emdit-project-image"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </ProjectRight>
            </ProjectContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <ProjectContainer>
              <ProjectLeft progress={progress}>
                <div className="font-alice py-5 text-[2rem] lg:text-[4rem]">
                  <Link href="/project-ellen/project-ellen">Project Ellen</Link>
                </div>
                <div className="font-inter text-sm lg:text-xl">
                  2D action game in the style of old Alien Breed games. You are
                  on the adventure where you have to solve the riddle to get
                  access to the command room and kill the boss and his servants
                  to save the station!
                </div>
                <GitButton repoLink={"/"} />
              </ProjectLeft>
              <ProjectRight>
                <Image
                  src="/project_ellen.png"
                  alt="projectEllen-main-image"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </ProjectRight>
            </ProjectContainer>
          )}
        ></Tile>
      </TileContent>
    </TileWrapper>
  </section>
);

export default Projects;
