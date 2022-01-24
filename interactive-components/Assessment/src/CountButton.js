import React, { useState } from "react";

function CountButton () {
  const [countButton, setCountButton] = useState(0);
  
  return(
    <div>
      <button onClick={() => setCountButton(countButton + 1)}>
        Click Count: {countButton} 
      </button>
    </div>
  )

}

export default CountButton;