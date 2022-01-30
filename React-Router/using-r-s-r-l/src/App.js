import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";



function Home() {
  return <p>Home</p>;
}

function About() {
  return <p>About</p>;
}

function App() {
  
  return (
    <Router>
      
      <Link to='/'>Home</Link>
      <br/>
      <Link to='/about'>About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
    />
      </Routes>
    </Router>
  );
}

export default App;
