import Link from "next/link";
import { FiGithub } from "react-icons/fi";

const sayHello = () => {
  console.log("hello");
};

const GitButton = (props) => {
  return (
    <div className="pt-8 hover:text-accent">
      <Link href={props.repoLink}>
        <button
          className="flex items-center justify-center z-20 gap-2 font-inter px-2 py-1 border-[1px] md:border-[2px] border-white transition-all duration-200  hover:border-accent rounded-md h-10 md:h-12"
          onClick={() => sayHello()}
        >
          <FiGithub className="h-[75%] " />
          <span className="text-[0.9rem] md:text-[1rem] ">GitHub</span>
        </button>
      </Link>
    </div>
  );
};

export default GitButton;
