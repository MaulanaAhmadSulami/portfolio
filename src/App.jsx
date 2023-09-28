import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/NavbarTop";

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

        </div>
        
        <div className="contact-section">
          
        </div>
      </div>
    </>
  );
}

export default App;
