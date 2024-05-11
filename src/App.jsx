import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Locations from "./Components/Locations";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Facilities from "./Components/Facilities";
import GetInTouch from "./Components/GetInTouch";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Locations />
      <About />
      <Facilities />
      <Gallery />
      <GetInTouch />
    </>
  );
}

export default App;
