
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import NoMatch from "./NoMatch"


function Home() {
  return <p>Home Sweet Home</p>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/">Home</Link>
        </div>
        {Array(10)
          .fill()
          .map((ignoredValue, index) => index + 1)
          .map((id) => (
            <div key={id}>
              <Link to={`/user/${id}`}>User {id}</Link>
            </div>
          ))}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:userId" element={<UserProfile/>} />
          <Route  path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;