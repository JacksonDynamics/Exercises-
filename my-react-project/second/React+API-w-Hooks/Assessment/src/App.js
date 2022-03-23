import React, { useState,useEffect } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  // Load data from https://jsonplaceholder.typicode.com/todos?userId=3
useEffect(()=> {
  const originalTitle=document.title
  document.title="Awesome Album App"
       
  const abortCont = new AbortController();
  
  async function loadUsers() {
    try {
        const response = await    fetch("https://jsonplaceholder.typicode.com/users", 
         {signal: abortCont.signal}
      );
    const toDoFromAPI = await response.json()
    setUsers(toDoFromAPI)
    }catch (error) {
      if(error.name !== "AbortError") {
        console.log(error)
      }
    }
  }
  loadUsers()
  
  return ()=>{
    document.title = originalTitle
    abortCont.abort()
  }
},[])

  return (
    <div className="App">
      <div className="left column">
        <UserList users={users} setCurrentUser={setCurrentUser} />
      </div>
      <div className="right column">
        <AlbumList user={currentUser} />
      </div>
    </div>
  );
}

export default App;