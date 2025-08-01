import './Layout.css';
import './Theme.css';
import './css/navbar.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
// import Navbar from './Components/Navbar.js';
import Navbar2 from './Components/Navbar2.js';
import Footer from './Components/Footer.js';
import ScrollToTop from './Components/ScrollToTop.js';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Homepage from './Pages/Homepage.js'
import Projects from './Pages/Projects.js'
import Characters from './Pages/Characters.js'
import CharInfo from './Pages/CharInfo.js'
import ProjectSeaWeb from './Pages/ProjectSeaWeb.js'
import Story from './Pages/Story.js'
import Poem from './Pages/Poem.js'
// import Commissions from './Pages/Commissions.js'
// import About from './Pages/About.js'
import AboutVesnea from './Pages/AboutVesnea.js'
import Tools from './Tools/TextToHtmlConverter.js'
import TestComponent from './Tools/HighlightMessage.js';
import YCHStory from './Tools/StoryYCH/YCHStory.js';
import NotFound from './Pages/NotFound.js';

// Games
import GamePage from './Pages/GamePage.js'
import TicTacToe from './Pages/Games/TicTacToePage.js'

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save the selected theme
  };

  return (
    <Router>
      <ScrollToTop />
      {/* <Navbar theme={theme} toggleTheme={toggleTheme} /> */}
      <Navbar2 theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/Projects' exact element={<Projects />} />
        <Route path='/Characters' exact element={<Characters />} />
        <Route path='/CharInfo' exact element={<CharInfo />} />
        <Route path='/ProjectSeaWeb' exact element={<ProjectSeaWeb />} />
        <Route path='/Story' exact element={<Story />} />
        <Route path='/Poem' exact element={<Poem />} />
        {/* <Route path='/Commissions' exact element={<Commissions />} /> */}
        {/* <Route path='/About' exact element={<About />} /> */}
        <Route path='/AboutVesnea' exact element={<AboutVesnea />} />
        <Route path='/Tools' exact element={<Tools />} />
        <Route path='/Test' exact element={<TestComponent />} />
        <Route path='/YCHStory' exact element={<YCHStory />} />

        {/* Games */}
        <Route path='/GamePage' exact element={<GamePage />} />
        <Route path='/Game/TicTacToe' exact element={<TicTacToe />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

export default App;
