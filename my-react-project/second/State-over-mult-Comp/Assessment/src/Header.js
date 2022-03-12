import React from "react";

function Header({ loggedIn, handleLoggedInClick }) {
  
  return (
    <div>
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}

export default Header;