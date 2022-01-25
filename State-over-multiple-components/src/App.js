import React, {useState} from "react"
import Header from "./Header.js"
import Content from "./Content.js"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  
  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} />
      <Content loggedIn={loggedIn} text="My content." />
    </div>
  );
}


export default App;
