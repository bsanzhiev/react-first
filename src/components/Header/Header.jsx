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
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuth: PropTypes.bool,
  login: PropTypes.string,
};

export default Header;
