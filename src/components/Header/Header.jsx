import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png'></img>
        </header>
    )
};

export default Header;