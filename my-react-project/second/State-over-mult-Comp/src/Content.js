function Content({loggedIn, text}) {
    // TODO: define loggedIn
    return loggedIn && <p>{text}</p>;
  }

  export default Content