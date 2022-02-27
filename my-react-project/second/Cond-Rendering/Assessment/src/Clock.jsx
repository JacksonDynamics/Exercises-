import React from "react";



function Clock() {
  const time = new Date().getHours()
  
switch ((time < 12 && time > 0 ) ? 0 :
        (time >= 12 && time <= 18) ? 1 : 2)
        
        
        {
          case 0:
            return <h1>Good Morning!</h1>;
          case 1:
            return <h1>Good Afternoon!</h1>;
          default:
            return <h1>Good Evening!</h1>;
  }
}

export default Clock;
