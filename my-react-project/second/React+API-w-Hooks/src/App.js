import React, {useState, useEffect} from "react"

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only rerun the effect if `count` changes
  return (
    <div>Hi</div>
  );
}

export default App;
