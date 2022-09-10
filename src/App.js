import './App.css';
import Experience from './components/Experience/Experience';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experience />
    </div>
  );
}

export default App;
