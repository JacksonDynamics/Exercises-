import React from "react";
import {useLocation} from "react-router-dom";


function NoMatch () {
    const location = useLocation();

  return (
    <h2>404 Not Found
    <code>{location.pathname}</code>
    </h2>
    )
}

export default NoMatch