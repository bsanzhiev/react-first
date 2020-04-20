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

const dialogs = [ //Array of dialogs data
  { id: 1, name: 'Bator' },
  { id: 2, name: 'Irina' },
  { id: 3, name: 'Viktor' },
  { id: 4, name: 'Jason' },
  { id: 5, name: 'Abraham' }
];

const messages = [ //Array of messages data
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Yo' },
  { id: 3, message: 'Wasap! How your current React progress?' },
  { id: 4, message: 'Very low. Im just started learning)))' },
];

const posts = [ // arrays of Posts Data
  { id: 1, message: 'Hi. How are you?', likes: 13 },
  { id: 2, message: 'Its my first post!', likes: 17 },
  { id: 3, message: 'I like vaporwave', likes: 22 }
]

// This is JSX?
const App = () => { // эта функция и есть КОМПОНЕНТА
  return ( // скобки стоят потому что следующмй код перенесен на новую строку
    <BrowserRouter>
    <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' render={() => <Dialogs {dialogs} {messages}/>} />
          <Route exact path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>);
}

export default App;
