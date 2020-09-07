import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
        <img alt='logo' src='./logo192.png'></img>
        </header>
    )
};

export default Header;