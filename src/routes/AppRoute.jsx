import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
function AppRoute() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Project />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default AppRoute;