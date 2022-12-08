// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar";
import Projects from "./components/Projects/projects";
import Home from './components/Home/home';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content-container'>
        <div className='content-box'>
          <div className='contents'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/aboutme' element={<About />} />
          </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
