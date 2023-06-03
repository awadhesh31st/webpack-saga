import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="left">
        <Link to="/">Home</Link>
        <Link to="/posts">Post</Link>
      </div>
      <div className="right">
        <span>Login</span>
      </div>
    </div>
  );
};

export default HeaderComponent;
