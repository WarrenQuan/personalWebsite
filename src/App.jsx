import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss"
import {useState} from "react";

function App() {
  // state for menu
  const[menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="sections">
      <Intro/>
      <About/>
      <div id="portfolioSection"><Portfolio/></div>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
