import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Homepage from './Pages/Homepage.js'
import Projects from './Pages/Projects.js'
import Commissions from './Pages/Commissions.js'
import About from './Pages/About.js'

function App() {
  return (
    <BrowserRouter basename='/projectseaweb'>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Homepage />} />
          <Route path='/Projects' exact element={<Projects />} />
          <Route path='/Commissions' exact element={<Commissions />} />
          <Route path='/About' exact element={<About />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
