import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h1 className="text-3xl font bold">Welcome to my fancy routing</h1>
      <nav className="grid gap-6 md:flex justify-center font-bold text-2xl">
        <Link to="/">Home</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Header;
