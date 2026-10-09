import Home from "./screen/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CursorFollower from "./components/CursorFollower";
import EasterEgg from "./components/EasterEgg";

function App() {
  return (
    <div className="min-h-screen bg-ink text-neutral-100">
      <CursorFollower />
      <EasterEgg />
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
