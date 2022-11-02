import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Navlink from "../components/Navlink";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Side menu */}
      <aside
        className={`fixed w-screen h-screen bg-black transition-all ease-in-out duration-[750ms] ${
          isMenuOpen ? "right-0 " : "right-[-100vw]"
        } z-30`}
      >
        <div className="flex justify-end w-full h-14 p-4 ">
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              <IoClose className="h-8 w-8" />
            </button>
          </div>
        </div>

        <div
          className={`flex flex-col items-center justify-start w-full h-full p-8 gap-7 text-2xl font-bold font-inter text-white z-40`}
        >
          <Navlink link="/" openCloseMenu={setMenuOpen}>
            Home
          </Navlink>
          <Navlink link="/#about" openCloseMenu={setMenuOpen}>
            About
          </Navlink>
          <Navlink link="/#work" openCloseMenu={setMenuOpen}>
            Work
          </Navlink>
          <Navlink link="/#contact" openCloseMenu={setMenuOpen}>
            Contact
          </Navlink>
          {/* <Link href={"/"}> */}
          {/*   <div className="cursor-pointer"> */}
          {/*     <a */}
          {/*       onClick={() => { */}
          {/*         setMenuOpen(false); */}
          {/*       }} */}
          {/*     > */}
          {/*       Home */}
          {/*     </a> */}
          {/*   </div> */}
          {/* </Link> */}
          {/* <Link href={"/#about"}> */}
          {/*   <div className="cursor-pointer"> */}
          {/*     <a */}
          {/*       onClick={() => { */}
          {/*         setMenuOpen(false); */}
          {/*       }} */}
          {/*     > */}
          {/*       About */}
          {/*     </a> */}
          {/*   </div> */}
          {/* </Link> */}
        </div>
      </aside>

      {/* Main navbar menu */}
      <nav
        className={`flex fixed md:px-10 justify-between w-screen h-14 p-3 bg-zinc-900/30 backdrop-blur-xl transition-all duration-[750ms] ease-in-out ${
          isMenuOpen ? "left-[-100vw]" : "left-0"
        } z-40`}
      >
        <Link href="/">
          <div className="flex justify-center items-center gap-4 h-auto p-1 cursor-pointer">
            <Image
              src="/logo.png"
              alt="logo"
              height={30}
              width={25}
              layout="intrinsic"
            />
            <span className="hidden md:block font-inter text-[1.2rem] text-white">
              Lukas Novorolnik
            </span>
          </div>
        </Link>
        <div className="sm:flex hidden gap-4 text-white">
          <Navlink link="/" openCloseMenu={setMenuOpen}>
            Home
          </Navlink>
          <Navlink link="/#about" openCloseMenu={setMenuOpen}>
            About
          </Navlink>
          <Navlink link="/#work" openCloseMenu={setMenuOpen}>
            Work
          </Navlink>
          <Navlink link="/#contact" openCloseMenu={setMenuOpen}>
            Contact
          </Navlink>
        </div>
        <div className="sm:hidden ">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <IoMenu className="h-8 w-8" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
