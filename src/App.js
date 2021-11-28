import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';
import FetchAPI from './Pages/FetchApi';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/more"  element={<FetchAPI/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
