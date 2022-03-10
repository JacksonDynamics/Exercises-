import React from "react";

function Header({image, name, birthday}) {
    const userName = {
    textAlign: "center",
    padding: "2px 4px",
    marginRight: "2px",
    color: "blue",
    borderRadius: "4px",
    fontSize: "35px",
    fontFamily: "cursive"
  };
  
  return (
    <section style={{display:"flex", justifyContent: "space-evenly", 
            alignItems: "center"}}>     
      <img src={image} alt="Kitty Cat" style={{width:"350px" }} />
      <div>
        <h1 style={userName}>{name}</h1>
        <h2 style={userName}>Birthday: {birthday}</h2>
      </div>
    </section>
  )
}

export default Header;
