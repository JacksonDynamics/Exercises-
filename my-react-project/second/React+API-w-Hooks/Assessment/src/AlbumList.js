import React, {useState,useEffect} from "react";


function AlbumList({ user = {} }) {
  const [albums, setAlbums] = useState([])
  
  useEffect(() => {
    async function loadAlbums(userId, signal) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`, {signal})
        const albums = await response.json();
        setAlbums(albums);
      } catch (error) {
        if(error.name !== "AbortError"){
        console.log(error)
        }
      }
    }
    
    if(user.id) {
      const abortCont = new AbortController();
      loadAlbums(user.id, abortCont.signal)
      return () =>{
        abortCont.abort();
      }
    }
  },[user])
  
  if(user.id) {
  return (
    <div className="albums">
      <h2>{user.name} Albums</h2>
      <ul className="album-list">
        {albums.map((album) => (
          <li key={album.id}>
            {album.id}-{album.title}
          </li>  
        ))}
      </ul>  
    </div>  
  )
  }
  return <p>Please click on a user name to the left</p>;
  
}

export default AlbumList;