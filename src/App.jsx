
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";
import ContactMe from "./components/ContactMe/ContactMe";
import Projects from "./components/Projects/Projects";

import './App.scss'


function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Hero />
        <Projects />
        <ContactMe />                 
      </div>
      
    </div>
  );
}

export default App;
