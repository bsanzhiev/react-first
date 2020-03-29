import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


// This is JSX?
const App = () => { // эта функция и есть КОМПОНЕНТА
  return ( // скобки стоят потому что следующмй код перенесен на новую строку
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>);
}

export default App;
