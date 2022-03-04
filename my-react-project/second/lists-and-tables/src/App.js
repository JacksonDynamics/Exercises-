import GroceryList from "./GroceryList"


const groceryItems = ["Bananas", "Apples", "Oranges"];

function App() {
  return (
    <GroceryList items={groceryItems}/>
  );
}

export default App;
