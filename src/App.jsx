import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from './assets/Components/Navbar';
import Home from './assets/Components/Home';
import About from './assets/Components/About';
import Gallery from './assets/Components/Gallery';
import Contact from './assets/Components/Contact';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
