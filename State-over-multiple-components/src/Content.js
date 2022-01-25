import React from "react"

// Content.js
function Content({ loggedIn, text }) {
    
    return loggedIn && <p>{text}</p>;
  }

  export default Content