import Home from "./screen/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CursorFollower from "./components/CursorFollower";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100">
      <CursorFollower />
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
