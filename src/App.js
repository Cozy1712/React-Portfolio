
import './App.css';
import Home from './component/Home';
import NavBar from './component/NavBar';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Experience from './component/Experience';
import Footer from './component/Footer'
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './component/Contact';
import Work from './component/Work';

function App() {
  return (
        <Router>
           <NavBar/>
           <Home/> 
           <About/>
           <Portfolio/>
           <Work/>
           <Experience/>
           <Contact/>
           <Footer/>
        </Router>

   
  );
}

export default App;
