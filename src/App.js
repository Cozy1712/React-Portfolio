
import './App.css';
import Home from './component/Home';
import NavBar from './component/NavBar';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Experience from './component/Experience';
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './component/Contact';

function App() {
  return (
        <Router>
           <NavBar/>
           <Home/> 
           <About/>
           <Portfolio/>

           <Experience/>
           <Contact/>
        </Router>

   
  );
}

export default App;
