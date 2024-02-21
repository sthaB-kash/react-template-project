import React from "react";
import { NavLink } from "react-router-dom";

const UnAuthenticatedPage = () => {
  return (
    <div className="unauthenticated-page">
      <h2>
        you are not logged in please login first!
        <NavLink
          to="/Login"
          className={({ isActive, isPending }) =>
            `${isActive ? "active" : isPending ? "pending" : ""} nav-link`
          }
        >
          Login
        </NavLink>
      </h2>
    </div>
  );
};

export default UnAuthenticatedPage;
