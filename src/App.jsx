import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/NavbarTop";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <div className="App">
        <div className="navbar-section">
          <Navbar />
        </div>

        <div className="home-section">
            <Home />
        </div>

        <div className="about-section">

        </div>

        <div className="project-section">
          <Portfolio />
        </div>
        
        <div className="contact-section">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
