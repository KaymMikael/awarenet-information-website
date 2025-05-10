import { Link } from "react-router";
import MobileNavigationSheet from "./MobileNavigationSheet";
import PageLink from "./PageLink";

const PageHeader = () => {
  return (
    <header className="my-4 flex items-center justify-between bg-white border-b-2 py-2 px-4 rounded-full sticky top-2 z-10">
      <Link
        className="text-2xl font-bold bg-linear-to-r from-[#00ffff] via-[#00Bfff] to-[#1e90ff] bg-clip-text text-transparent"
        to="/"
      >
        AwareNet
      </Link>
      <MobileNavigationSheet />
      <ul className="hidden sm:flex sm:gap-4">
        <li>
          <PageLink text="Home" to="/" />
        </li>
        <li>
          <PageLink text="Survey" to="/survey" />
        </li>
        <li>
          <PageLink text="Feedback" to="/feedback" />
        </li>
        <li>
          <PageLink text="Tips" to="/tips" />
        </li>
        <li>
          <PageLink text="Contact" to="/contact" />
        </li>
      </ul>
    </header>
  );
};

export default PageHeader;
