function WelcomeBack({ name = "Valued Customer", adjective = "loyal" }) {
    return (
      <p>
        Welcome back, {adjective} {name}!
      </p>
    );
  }

  export default WelcomeBack