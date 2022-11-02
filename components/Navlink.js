import Link from "next/link";

const Navlink = ({ link, openCloseMenu, children }) => {
  return (
    <Link href={link}>
      <div className="cursor-pointer transition-color duration-300 hover:text-accent">
        <a
          onClick={() => {
            openCloseMenu(false);
          }}
        >
          {children}
        </a>
      </div>
    </Link>
  );
};

export default Navlink;
