import React from "react";
import GroceryList from "./GroceryList"

const todos = [
  { completed: false, description: "Finish the Lists & Tables checkpoint" },
  { completed: false, description: "Clean my desk" },
  { completed: false, description: "Make lunch" },
];

function App() {
  return (
  <>
  <GroceryList items={todos} />
  </>
  )
}

export default App;
