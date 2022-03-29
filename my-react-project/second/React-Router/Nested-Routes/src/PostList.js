import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";

function PostList() {
  const { url } = useMatch();

  return (
    <div>
      <Routes>
        <Route path={url} element={<p>Current matched url is {url}</p>} />
      </Routes>
    </div>
  );
};

export default PostList;