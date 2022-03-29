import { BrowserRouter, Link } from "react-router-dom";
import Home from "./Home"
import MyComponent from "./MyComponent"
import BackButton from "./BackButton"
import ForwardButton from "./ForwardButton"

function App() {

  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <MyComponent />
      <Home />
      <BackButton />
      <ForwardButton />
    </BrowserRouter>
  );
}

export default App;

