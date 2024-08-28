import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 border-b border-[rgb(255,123,97)] md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur md:backdrop-blur-none -z-10 md:hidden"></div>
      <div className="container">
        <div className="relative flex justify-between items-center md:border border-[rgb(255,123,97)] md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div className="absolute inset-0 hidden md:block backdrop-blur -z-10 "></div>
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-[rgb(255,123,97)]">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a
                className="text-[rgb(255,123,97)]/70 hover:text-[rgb(255,123,97)] transition"
                href="#"
              >
                Features
              </a>
              <a
                className="text-[rgb(255,123,97)]/70 hover:text-[rgb(255,123,97)] transition"
                href="#"
              >
                Developers
              </a>
              <a
                className="text-[rgb(255,123,97)]/70 hover:text-[rgb(255,123,97)] transition"
                href="#"
              >
                Pricing
              </a>
              <a
                className="text-[rgb(255,123,97)]/70 hover:text-[rgb(255,123,97)] transition"
                href="#"
              >
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Join waitlist</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
