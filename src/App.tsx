import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <article className="max-w-prose mx-auto">
        <h2>FullStack developer</h2>
        <p className="text-justify text-lg">Content</p>
      </article>
      <Footer />
    </div>
  );
}

export default App;
