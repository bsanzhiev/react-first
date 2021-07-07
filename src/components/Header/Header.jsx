import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logo from "../../media/logo-react.png";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img alt="logo" src={logo}></img>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} <button onClick={props.logout}>Log Out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuth: PropTypes.bool,
  login: PropTypes.string,
  logout: PropTypes.object,
};

export default Header;
