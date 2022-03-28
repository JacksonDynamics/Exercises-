import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home"
import UserProfile from "./UserProfile"
import NewUser from "./NewUser"
import NoMatch from "./NoMatch"

function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
      <Link to="/user/new">New User</Link>
      {Array(10)
        .fill()
        .map((ignoredValue, index) => index + 1)
        .map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`} data-testid={`user-${id}`}>
              User{id}
            </Link>
            
          </div>
        ))}

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/new" element={<NewUser/>} />
          <Route path="/user/:userId" element={<UserProfile/>} />
          <Route  path="*" element={<NoMatch />} />
        </Routes>
    </div>
  );
}

export default App;