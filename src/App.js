import './Layout.css';
import './Theme.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import ScrollToTop from './Components/ScrollToTop.js';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Homepage from './Pages/Homepage.js'
import Projects from './Pages/Projects.js'
import Characters from './Pages/Characters.js'
import CharInfo from './Pages/CharInfo.js'
import ProjectSeaWeb from './Pages/ProjectSeaWeb.js'
import Story from './Pages/Story.js'
// import Commissions from './Pages/Commissions.js'
// import About from './Pages/About.js'
import AboutVesnea from './Pages/AboutVesnea.js'

function App() {
  const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : theme === "dark" ? "moon" : "light";
  //   setTheme(newTheme);
  //   document.documentElement.setAttribute("data-theme", newTheme);
  //   // localStorage.setItem("theme", newTheme);
  // };
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save the selected theme
  };

  return (
    <Router basename='/projectseaweb'>
      <ScrollToTop />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/Projects' exact element={<Projects />} />
        <Route path='/Characters' exact element={<Characters />} />
        <Route path='/CharInfo' exact element={<CharInfo />} />
        <Route path='/ProjectSeaWeb' exact element={<ProjectSeaWeb />} />
        <Route path='/Story' exact element={<Story />} />
        {/* <Route path='/Commissions' exact element={<Commissions />} /> */}
        {/* <Route path='/About' exact element={<About />} /> */}
        <Route path='/AboutVesnea' exact element={<AboutVesnea />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

export default App;
