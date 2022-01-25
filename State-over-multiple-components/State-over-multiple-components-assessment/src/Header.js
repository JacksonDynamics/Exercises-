import React from "react";

function Header({loggedIn,handleLoggedInClick,contextSize}) {
  
  return (
    <div>
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
      <button onClick={contextSize}>
        Size Increase
      </button>
    </div>
  );
}

export default Header;
