import { Contact, Profile, Projects, Work } from "../icons";

export const Navbar = () => {
  return (
    <header className="sticky top-5 w-max max-w-160 mx-auto mb-6 md:mb-16 md:pl-4 flex items-center justify-between md:gap-14 border border-gray-200 rounded-full drop-shadow-xl bg-linear-30/15 backdrop-blur-xs text-blue-500">
      <span className="text-sm font-medium font-mono hidden md:inline ">
        Mubarak.Work
      </span>

      <nav className="flex items-center justify-between gap-6 rounded-full p-4  expandable-nav  shadow-2xl bg-gray-100 backdrop-blur-sm">
        <a href="#about" title="about">
          <Profile className="text-black" />
        </a>
        <a href="#work" title="work">
          <Work />
        </a>
        <a href="#projects" title="projects">
          <Projects />
        </a>
        <a href="#contact" title="contact">
          <Contact />
        </a>
      </nav>
    </header>
  );
};
