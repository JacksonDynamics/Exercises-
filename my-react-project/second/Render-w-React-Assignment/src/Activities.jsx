import React from "react"

function Activities ({dailyActivities}){
   const list = dailyActivities.map(({time,description}, index) => (
     <tr key={index}>
       <td>{time}</td>
       <td>{description}</td>
     </tr>
   ))
              
  return (
    <table style={{fontSize: "20px", border: "2px solid black", width: "50%"}}>
      <tbody>{list}</tbody>
    </table>
  )
}

export default Activities

