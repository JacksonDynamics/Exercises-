
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";

function Home() {
  return <p>Home</p>;
}

function App() {
  return (
    <Router>
          <Link to="/">Home</Link>
        {Array(10)
          .fill()
          .map((ignoredValue, index) => index + 1)
          .map((id) => (
            <div key={id}>
              <Link to={`/user/${id}`}>User {id}</Link>
            </div>
          ))}
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<UserProfile />} />  
        <Route
          path="*"
          element={
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