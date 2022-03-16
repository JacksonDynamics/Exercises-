import React from "react"

function Item ({posts,setPosts, index, post}) {
   
  const handleDelete = () => {
      const newList = posts.filter((post, i) => i !== index)
      setPosts(newList)   
  }

  
    return post.includes("http") ?  
    (<div className="post" >
        <img src={post} style={{width:"300px"}} alt="This is fun" />
        <br />
        <button 
          onClick={handleDelete}
          name="delete">Delete</button>    
     </div>   ) :
    
    ( <div className="post">
        <p >{post}</p>
        <button 
          onClick={handleDelete}
          name="delete">Delete</button>
      </div>  )
}


export default Item