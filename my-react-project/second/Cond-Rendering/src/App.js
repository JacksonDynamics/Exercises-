
function Notifications({ notifications }) {
  return (
    notifications.length > 0 && (
      <p>You have {notifications.length} notifications today!</p>
    )
  );
}


function App() {
  const notifications = ["You received a package", "The weather is sunny"];
  return <Notifications notifications={notifications} />;
}

export default App;
