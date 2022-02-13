import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
// import Header from './components/Header'
// import Footer from './components/Footer'
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
