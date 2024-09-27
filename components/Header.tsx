import Link from "next/link";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Wesley
            <span className="text-accent">.</span>
            <span className="text-4xl text-accent">Ch01</span>
          </h1>
        </Link>
        {/* Desktop nav */}
        <div className="hidden xl:flex">
          <Nav />
        </div>
        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
