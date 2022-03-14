import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

function App() {
  const[timeStamp, setTimeStamp] = useState([])
  
  const onButtonClick = () => {
    setTimeStamp([...timeStamp, Date.now()])
  }
 
  return (
    <div>
      <ClickTimes onButtonClick={onButtonClick} />
      <TimestampsDisplay timestamps={timeStamp} />
    </div>
    )
}

export default App;