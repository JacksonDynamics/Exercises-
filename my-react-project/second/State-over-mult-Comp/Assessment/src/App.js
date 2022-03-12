
import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  
  const [fontSize, setFontSize] = useState(12)
  const contextSize = () => setFontSize(fontSize + 2)
  
 
  return (
    <div>
      <Header 
        loggedIn={loggedIn} 
        handleLoggedInClick={toggleLoggedIn} 
        />
      <Content 
        loggedIn={loggedIn} 
        fontSize={fontSize}
        contextSize={contextSize} />
    </div>
  );
}

export default App;