import CoinTossCounter from "./CoinTossCounter"
import React, {useState} from "react"

function App() {
  const [results, setResults] = useState([]);
  const [counts, setCounts] = useState({ H: 0, T: 0 });

  const handleClick = (value) => {
    setResults([...results, value]);
    setCounts({
      ...counts,
      [value]: counts[value] + 1,
    });
  };

  const handleDeleteLast = () => {
    const last = results[results.length - 1];
    const list = results.slice(0, -1);
  
    setResults(list);
    if (last) {
      setCounts({
        ...counts,
        [last]: counts[last] - 1,
      });
    }
  };

  return <CoinTossCounter handleClick={handleClick} 
                          results={results} 
                          counts={counts}
                          handleDeleteLast={handleDeleteLast} />

}

export default App;
