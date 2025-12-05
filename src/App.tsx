import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Work } from "./sections/work";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <article
        className="max-w-prose mx-auto text-lg font-jb-mono p-4 h-screen md:border-l border-l-gray-200"
        id="about"
      >
        <h2 className="font-semibold text-2xl font-jb-mono mb-5 text-blue-400">
          About Me
        </h2>
        <p className="text-justify text-lg font-light">
          Hi! I'm Mubarak, a frontend dev trying to become fullstack. I started
          building for the web about 4 years ago in 2021 and I've since worked
          on a number of interesting (and frustrating) projects. I'm now looking
          to get my hands dirty with something challenging, so if you think
          you've got that for me, please contact me and let's get cooking ;)
        </p>
      </article>

      <Work />
      <Footer />
    </div>
  );
}

export default App;
