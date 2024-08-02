import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from './assets/Components/Navbar';
import Home from './assets/Components/Home';
import About from './assets/Components/About';
import Gallery from './assets/Components/Gallery';
import Contact from './assets/Components/Contact';
import Footer from './assets/Components/Footer';

import testimony_data from './assets/data/testimonies.json';
import about_data from './assets/data/about.json';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div class="App">
        <Routes>
          <Route path="/" element={<Home data={testimony_data}/>}></Route>
          <Route path="/about" element={<About data={about_data}/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
