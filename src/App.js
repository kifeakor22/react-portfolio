import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Contact from './components/Contact';
import Home from './components/Home';
import ProjectCard from './components/Project';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/projectCard" element={<ProjectCard/>}></Route>
        </Routes> 
      </div>
    </Router>

  );
}

export default App;
