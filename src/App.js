import React from 'react'
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home'
import Forest from './components/pages/the-forest'
import CCFS from './components/pages/the-ccfs'
import Donate from './components/pages/donate'
import Contact from './components/pages/contact'
import Board from './components/pages/board'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/the-forest' exact element={<Forest />} />
        <Route path='/donate' exact element={<Donate />} />
        <Route path='/the-ccfs' exact element={<CCFS />} />
        <Route path='/board' exact element={<Board />} />
        <Route path='/contact' exact element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;