import React from "react";


function Header ({image, name, birthday}) {  
  return (
    <section style={{display:"flex", justifyContent: "space-evenly", 
            alignItems: "center"}}>     
      <div>
        <img src={image} style={{width:"400px" }} />
      </div>
      <div style={{textAlign: "center", fontSize: "25px", 
            fontFamily: "monospace" }}>
        <h1 style={{fontSize: "50px"}}>{name}</h1>
        <h2>Birthday: {birthday}</h2>
      </div> 
    </section>
  )
}

export default Header;
