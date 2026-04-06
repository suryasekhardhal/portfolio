import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";

import Home from "./pages/Home";
import Featured from "./pages/Featured";
import About from "./pages/About";
import Projects from "./pages/Project";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      {/* <Cursor /> */}
      <Navbar />

      <Home />
      <Featured />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}