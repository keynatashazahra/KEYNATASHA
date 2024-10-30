import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Seniman from './components/Seniman';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Seniman/>
      <Projects/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
