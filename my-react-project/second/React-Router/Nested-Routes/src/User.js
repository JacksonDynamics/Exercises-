import React from "react";
import { Route, Routes } from "react-router-dom";
import PostList from "./PostList";
import UserProfile from "./UserProfile"

const User = () => {
  return (
      <Routes>
        <Route path={"/users/:userId/posts"} element={<PostList />} />
        <Route path={"/users/:userId"} element={<UserProfile />} />
      </Routes>
  );
};

export default User;
