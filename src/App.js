import './layout.css';
import './theme.css';
import './styles/Navbar.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
// import Navbar from './Components/navbar.js';
import Navbar2 from './components/Navbar2.js';
import Footer from './components/Footer.js';
import ScrollToTop from './components/ScrollToTop.js';
import ScrollToTopButton from './components/ScrollToTopButton.js';
import Homepage from './pages/Homepage.js'
import Projects from './pages/Projects.js'
import Characters from './pages/Characters.js'
import AttributePage from './pages/AttributePage.js'
import CharInfo from './pages/CharInfo.js'
import ProjectSeaWeb from './pages/ProjectSeaWeb.js'
// import Commissions from './Pages/commissions.js'
// import About from './Pages/About.js'
import AboutVesnea from './pages/AboutVesnea.js'
import Tools from './Tools/texttohtmlconverter.js'
import TestComponent from './Tools/highlightmessage.js';
import YCHStory from './Tools/StoryYCH/ychstory.js';
import NotFound from './components/NotFound.js';
import SeaWebTree from './pages/SeaWebTree.js';

// Art Pages
import ArtPage from './pages/ArtPage.js'
import Story from './pages/Story.js'
import Poem from './pages/Poem.js'
import VesneaThemes from './pages/VesneaThemes.js'
import VesneaMerch from './pages/VesneaMerch.js'
// import UmbreonJourney from './Pages/umbreonjourney.js'
import UmbreonJourney from './pages/PoemBook.js'

// Game Pages
import GamePage from './pages/GamePage.js'
import TicTacToe from './pages/games/TicTacToePage.js'

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
        <Route path='/SeaWebTree' exact element={<SeaWebTree />} />

        {/* Art Page */}
        <Route path='/Characters' exact element={<Characters />} />
        <Route path='/CharInfo' exact element={<CharInfo />} />
        <Route path='/Attributes' exact element={<AttributePage />} />
        <Route path='/Art' exact element={<ArtPage />} />
        <Route path='/Story' exact element={<Story />} />
        <Route path='/Poem' exact element={<Poem />} />
        <Route path='/Poem/UmbreonJourney' exact element={<UmbreonJourney />} />
        <Route path='/Themes' exact element={<VesneaThemes />} />
        <Route path='/Merch' exact element={<VesneaMerch />} />

        {/* About Page */}
        <Route path='/AboutVesnea' exact element={<AboutVesnea />} />
        <Route path='/ProjectSeaWeb' exact element={<ProjectSeaWeb />} />

        {/* Game Page */}
        <Route path='/GamePage' exact element={<GamePage />} />
        <Route path='/Game/TicTacToe' exact element={<TicTacToe />} />

        <Route path="*" element={<NotFound />} />

        <Route path='/Projects' exact element={<Projects />} />
        <Route path='/Tools' exact element={<Tools />} />
        <Route path='/Test' exact element={<TestComponent />} />
        <Route path='/YCHStory' exact element={<YCHStory />} />
        {/* <Route path='/Commissions' exact element={<Commissions />} /> */}
        {/* <Route path='/About' exact element={<About />} /> */}
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

export default App;
