import React from "react"

// Header.js
function Header({ loggedIn, handleLoggedInClick }) {
    return (
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
    );
  }

  export default Header