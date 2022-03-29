import {  
  BrowserRouter as Router,  
  Routes, Route, Link } from "react-router-dom"
import NoMatch from "./NoMatch";
import User from './User';


function Home() {
  return <p>Home</p>;
}

function About() {
  return <p>About</p>;
}

function App() {

  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId" element={<User />} />
        <Route element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;