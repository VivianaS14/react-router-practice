import React from "react";
import { Link, Outlet } from "react-router-dom";
import config from "../config";
/* Outlet -> Conecta el navbar con el elemento que esta renderizando */

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={config.routes.HOME}>
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={config.routes.PLANETS}>
                  PLANETS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
