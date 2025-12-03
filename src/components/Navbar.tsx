import { Contact, Profile, Projects, Work } from "../icons";

export const Navbar = () => {
  return (
    <header className="sticky top-5 w-max max-w-160 mx-auto mb-16 pl-4 flex items-center justify-between gap-14 border rounded-full drop-shadow-2xl bg-linear-30/15 backdrop-blur-xl">
      <span className="text-sm font-medium font-mono">Mubarak.Work</span>

      <nav className="flex items-center justify-between gap-6 rounded-full p-4  expandable-nav  shadow-2xl bg-gray-200 backdrop-blur-sm">
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
