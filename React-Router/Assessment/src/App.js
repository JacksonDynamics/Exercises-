import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {
  
  return (
<Router>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='*' element={<h1>404 Not Found</h1>} />
  </Routes>
</Router>
  );
}

export default App;
