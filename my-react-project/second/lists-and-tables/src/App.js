import React from "react";
import GroceryList from "./GroceryList"

const todos = [
  "Finish the Lists & Tables checkpoint",
  "Clean my desk",
  "Make lunch",
];

function App() {
  const listItems = todos.map((todo, index) => <li key={index}>{todo}</li>);
  return (
  <>
  <ul>{listItems}</ul>
  <GroceryList />
  </>
  )
}

export default App;
