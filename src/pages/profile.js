import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div className="">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-navlink" : "navlink"
            }
            to="/profile/collections"
          >
            My collections
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-navlink" : "navlink"
            }
            to="/profile/users"
          >
            Users
          </NavLink>
        </div>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-danger me-2">
            Logout
          </button>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
