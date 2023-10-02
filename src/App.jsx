import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/NavbarTop";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <Home />

        {/* <About /> */}

        <Portfolio />

        <Footer />
      </div>
    </>
  );
}

export default App;
