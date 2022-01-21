
import WelcomeBack from "./WelcomeBack.js"
import Header from "./Header.js"
import Footer from "./Footer.js"

function App() {
  return (
    <>
      <Header />
      <WelcomeBack name="Joe" adjective="funny" />
      <WelcomeBack name="Anna" adjective="clever" />
      <WelcomeBack />
      <Footer />
    </>
  );
}

export default App;
