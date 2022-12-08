// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar";
import projects from './components/Projects/projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/projects' element={<projects />} />
      </Routes>
    </div>
  );
}

export default App;
