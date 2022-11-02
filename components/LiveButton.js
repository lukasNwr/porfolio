import Link from "next/link";
import { FiPlay } from "react-icons/fi";

const LiveButton = (props) => {
  return (
    <div className="pt-8 hover:text-accent">
      <Link href={props.liveLink}>
        <button className="flex items-center min-w-[10rem] justify-center z-20 gap-2 font-inter px-2 py-1 border-[1px] md:border-[2px] border-white transition-all duration-200  hover:border-accent rounded-md h-10 md:h-12">
          <FiPlay className="h-[75%]" />
          <span className="text-[0.9rem] md:text-[1rem]">Live Project</span>
        </button>
      </Link>
    </div>
  );
};

export default LiveButton;
