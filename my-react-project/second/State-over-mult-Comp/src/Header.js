function Header({ loggedIn, toggleLoggedInClick }) {
    return (
      <button onClick={toggleLoggedInClick}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
    );
  }

  export default Header