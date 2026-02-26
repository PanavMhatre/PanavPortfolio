import { Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import Resume from "./screen/Resume";
import Projects from "./screen/Projects";
import Blog from "./screen/Blog";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1a1a1a] transition-colors">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume/" element={<Resume />} />
        <Route path="/projects/" element={<Projects />} />
        <Route path="/blog/" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
