import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Cursor from './Cursor';
import Work from './Work';
import Workone from './Workone';
import Worktwo from './Worktwo';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from './ScrollToTop';


function App() {
  return (

          <Router>
                <ScrollToTop />
                <div className="App">
                 <div className='cursor'><Cursor /></div> 
                  <Routes>

                    <Route path='/' element={[ <Header />, <Home />, <About />, <Skills />, <Work />, <Contact />]} />
                    <Route path='/workone' element={[ <Header />, <Workone />]} />
                    <Route path='/worktwo' element={[ <Header />, <Worktwo />]} />

                  </Routes>
                </div>
            </Router>
   
  );
}

export default App;
