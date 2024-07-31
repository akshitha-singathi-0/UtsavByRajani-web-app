import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Home from './assets/components/Home';
import About from './assets/components/About';
import Gallery from './assets/components/Gallery';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';

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
      <Footer></Footer>
    </div>
  );
}

export default App;
