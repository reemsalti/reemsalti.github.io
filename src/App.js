import './App.css';
import Navbar from './Components/Navbar';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './Components/HeroSection';
import AboutMe from './Components/Pages/AboutMe';
import Portfolio from './Components/Pages/Portfolio';
import Contact from './Components/Pages/Contact';
import { HashRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
        
        
            <Route path="/Aboutme"  element={<AboutMe/>} />
            <Route path="/" element={<HeroSection/>} />
            <Route path="/Portfolio" element={<Portfolio/>} />
            <Route path="/Contact" element={<Contact/>} />
            

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
