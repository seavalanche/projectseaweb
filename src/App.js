import './Layout.css';
import './Theme.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Homepage from './Pages/Homepage.js'
import Projects from './Pages/Projects.js'
import ProjectSeaWeb from './Pages/ProjectSeaWeb.js'
import Commissions from './Pages/Commissions.js'
import About from './Pages/About.js'

function App() {
  return (
    <Router basename='/projectseaweb'>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/Projects' exact element={<Projects />} />
        <Route path='/ProjectSeaWeb' exact element={<ProjectSeaWeb />} />
        <Route path='/Commissions' exact element={<Commissions />} />
        <Route path='/About' exact element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
