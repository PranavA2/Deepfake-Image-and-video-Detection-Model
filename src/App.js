import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Image from './components/image';
import Video from './components/video';
import Home from './components/home';
//import Navbar from './components/navbar';
import Navbar1 from './components/navbar1'
import About from './components/about'

const App = () => {
  return (
    <Router>
      <Navbar1/>
      <div className='text-center'>
        <Routes>
          <Route path='/about' element={<About/>}></Route>
          <Route path="/image" element={<Image />}>
          </Route>
          <Route path="/video" element={<Video />}>
          </Route>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
