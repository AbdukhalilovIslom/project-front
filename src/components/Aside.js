import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as HomeSvg } from "../assets/images/home.svg";
import { ReactComponent as CollectionSvg } from "../assets/images/collection-fill.svg";
import { ReactComponent as ItemSvg } from "../assets/images/calendar3-fill.svg";
import { ReactComponent as Profile } from "../assets/images/profile-circle-svgrepo-com.svg";

export default function Aside() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 border"
      style={{ width: "280px", height: "100vh" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            aria-current="page"
          >
            <HomeSvg />
            <span style={{ marginLeft: "10px" }}>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="collections"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <CollectionSvg />
            <span style={{ marginLeft: "10px" }}>Collections</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/items"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <ItemSvg />
            <span style={{ marginLeft: "10px" }}>Items</span>
          </NavLink>
        </li>
      </ul>
      <hr />

      <Link
        to="/profile/collections"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Profile />
        <strong style={{ marginLeft: "7px" }}>Profile</strong>
      </Link>
    </div>
  );
}
