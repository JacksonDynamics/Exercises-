import React from "react";
import {useLocation} from "react-router-dom";

function NewUser () {
    const location = useLocation()
    
  return (
    <h1>
      Unable to create a new user<code>{location.pathname}</code></h1>
    )
}

export default NewUser