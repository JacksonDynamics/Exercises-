
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import NoMatch from "./NoMatch"


function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <br/>
      <Link to="about">About</Link>
      <br/>
      <Link to="contact">Contact</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route  path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
