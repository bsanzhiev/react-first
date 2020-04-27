/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

// This is JSX?
const App = (props) => { // эта функция и есть КОМПОНЕНТА

  return ( // скобки стоят потому что следующмй код перенесен на новую строку
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>} />
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route exact path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
