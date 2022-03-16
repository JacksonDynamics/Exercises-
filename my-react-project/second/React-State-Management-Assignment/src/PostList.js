import React from "react";
import Item from "./Item"

/**
 * Diplays a list of either text or image posts.
 *
 */
function PostList({posts, setPosts}) {
  
const results = posts.map((post, index) => {
  
    return <Item 
           key={index}
           posts={posts} 
           setPosts={setPosts} 
           index={index}
           post={post}
           />
})
 
  
  // TODO: Diplay the list of posts.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each post must have className="post" for the tests to work.
  // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="post-list">
      {results}
    </div>
  )
}

export default PostList;