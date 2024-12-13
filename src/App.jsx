import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Videos from './pages/Videos';
import Objective from './pages/Objective';
import Motivation from './pages/Motivation';
import Challenges from './pages/Challenges';
import WhyUs from './pages/WhyUs';
import SourceCode from './pages/SourceCode';
import About from './pages/About';
import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/objective" element={<Objective />} />
            <Route path="/motivation" element={<Motivation />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/source-code" element={<SourceCode />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;