import React from "react";
import { H1 } from "./Components";
import { NavLink } from "react-router-dom";
/**
 * @author
 * @function Nav
 **/

export const Nav = (props) => {
  const nav = "m-2 p-2 border-2 rounded-full border-transparent hover:border-slate-400 duration-100";
  const active = "m-2 p-2 px-4 border-2 rounded-full border-slate-900";
  return (
    <div>
      <H1>🧮 Marvelous Calculator App</H1>
      <p className="-mt-6">No styling. Logic first.</p>
      <div className="m-4">
        <NavLink className={nav} activeClassName={active} to="/" exact>
          🏠 Home
        </NavLink>
        <NavLink className={nav} activeClassName={active} to="/health" exact>
          🏋️‍♂️ Health
        </NavLink>
        <NavLink className={nav} activeClassName={active} to="/math" exact>
          🔢 Math
        </NavLink>
        <NavLink className={nav} activeClassName={active} to="/date" exact>
          📆 Date
        </NavLink>
        <NavLink className={nav} activeClassName={active} to="/changelog" exact>
          🧬 Changelog
        </NavLink>
      </div>
    </div>
  );
};
