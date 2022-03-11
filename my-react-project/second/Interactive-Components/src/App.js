

function App() {
  const handleClick = (e) => {
      console.log(e.target)
    }
  return (
    <button onClick={handleClick}>Subscribe</button>
  )
}

export default App
