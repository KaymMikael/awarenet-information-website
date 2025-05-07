import { Link } from "react-router";

interface PageLinkProps {
  text: string;
  to: string;
}

const PageLink = ({ text, to }: PageLinkProps) => {
  return (
    <Link
      to={to}
      className="relative underline-offset-4 before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:bg-[#00Bfff] before:transition-all before:duration-300 hover:before:w-full"
    >
      {text}
    </Link>
  );
};

export default PageLink;
