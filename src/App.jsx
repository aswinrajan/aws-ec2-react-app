
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import ContactMe from "./components/ContactMe/ContactMe";
import Projects from "./components/Projects/Projects";

import './App.scss'


function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Home />
        <Projects />
        <ContactMe />                 
      </div>
      
    </div>
  );
}

export default App;
