import {useLocation} from "react-router-dom"
import React from "react"

function NoMatch() {
   const location=useLocation()
  
  return (
    <h3>
      404 Not Found<code>{location.pathname}</code>
    </h3>
  )
}

export default NoMatch