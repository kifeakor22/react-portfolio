import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Contact from './components/Contact';
import Home from './components/Home';
import Project from './components/Project';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element= {<Home/>}></Route>
          <Route path="/contact" element= {<Contact/>}></Route>
          <Route path="/project" element= {<Project/>}></Route>
        </Routes> 
      </div>
    </Router>

  );
}

export default App;
