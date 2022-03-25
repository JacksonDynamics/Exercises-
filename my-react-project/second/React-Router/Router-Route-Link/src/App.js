
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NoMatch from "./NoMatch"

function Home() {
  return <p>Home</p>;
}

function About() {
  return <p>About</p>;
}

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route  path="*" element={<NoMatch />} />

      </Routes>
    </BrowserRouter>
  );
}



export default App;
