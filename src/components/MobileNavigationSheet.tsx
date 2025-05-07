import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router";

const MobileNavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer sm:hidden">
        <Menu aria-label="Mobile navigation trigger" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            Easily explore different sections of the website
          </SheetDescription>
        </SheetHeader>
        <ul className="pl-4 grid gap-2">
          <li>
            <Link
              to="/"
              className="underline underline-offset-4 decoration-[#00Bfff]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/survey"
              className="underline underline-offset-4 decoration-[#00Bfff]"
            >
              Survey
            </Link>
          </li>
          <li>
            <Link
              to="/feedback"
              className="underline underline-offset-4 decoration-[#00Bfff]"
            >
              Feedback
            </Link>
          </li>
          <li>
            <Link
              to="/tips"
              className="underline underline-offset-4 decoration-[#00Bfff]"
            >
              Tips
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="underline underline-offset-4 decoration-[#00Bfff]"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigationSheet;
