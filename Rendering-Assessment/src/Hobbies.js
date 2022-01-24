import React from "react"
      
function Hobbies({hobbies}) {
    const list = hobbies.map((item, index) => <li key={index}>{item}</li>)
              
  return (
    <div>
      <h1>Hobbies</h1>
      <ul style={{fontSize: "30px"}}>{list}</ul>
    </div>
  )
  
}

export default Hobbies