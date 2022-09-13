import './App.css';
import Contact from './components/Contact/Contact';
import Skill from './components/Skill/Skill';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Portfolio />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
