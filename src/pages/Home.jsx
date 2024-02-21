import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);
  return (<div>
    <h2>Hello {user?.name}</h2>
    <p>Welcome to the home page</p>
    <p>{user.isLoggedIn ? "You are logged in" : "You are not logged in"}</p>
  </div>);
};

export default Home;
