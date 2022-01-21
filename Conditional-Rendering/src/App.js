import Greeting from "./Greeting.js"
import Notifications from "./Notifications.js"

// App.js
function App() {
  const notifications = ["You received a package", "The weather is sunny"];

  return (
    <div>
      <Greeting language="es" />
      <Greeting language="fr" />
      <Greeting />
      <br/>
      <hr/>
      <br/>
      <Notifications notifications={notifications} />
      <br/>
      <hr/>
      <br/>
      <Notifications notifications={notifications} />

    </div>
  );
}


export default App;
