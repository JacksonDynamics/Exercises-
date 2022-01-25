import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [fontSize, setFontSize] = useState(12);
  
  const handleLoggedInClick = () => setLoggedIn(!loggedIn);
  const contextSize = () => setFontSize(fontSize + 2)
  
  return (
    <div>
      <Header loggedIn={loggedIn} 
              handleLoggedInClick={handleLoggedInClick} 
              contextSize={contextSize} />
      <Content loggedIn={loggedIn} 
               fontSize={fontSize} />
    </div>
  );
}

export default App;