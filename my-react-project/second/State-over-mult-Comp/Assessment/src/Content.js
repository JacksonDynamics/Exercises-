import React from "react";

function Content({ loggedIn, fontSize, contextSize }) {

  return  loggedIn && (
    <div>
      <br/>
      <hr/>
      <br/>
      <button onClick={contextSize}>Size Increase</button>
      <p  style={{fontSize: `${fontSize}px`}}>CONTENT</p>
    </div>
    )
}


export default Content;