import './App.css';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experience />
      <Portfolio />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
