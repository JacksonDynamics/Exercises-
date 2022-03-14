

function CoinTossCounter({handleClick, handleDeleteLast, results, counts}) {


    const lis = results.map((result, index) => (
        <li key={`toss-${index}`}>{result === "H" ? "Heads" : "Tails"}</li>
      ));
    

    return (
      <section>
        <div>
        <ul>
            <li>Heads: {counts["H"]}</li>
            <li>Tails: {counts["T"]}</li>
        </ul>

          <button onClick={() => handleClick("H")}>Heads</button>
          <button onClick={() => handleClick("T")}>Tails</button>
          <button onClick={handleDeleteLast}>Delete Last</button>
        </div>
        <ul>{lis}</ul>
      </section>
    );
  }

export default CoinTossCounter