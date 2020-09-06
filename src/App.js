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

// This is JSX? - Yes
const App = (props) => ( // скобки стоят потому что следующий код перенесен на новую строку:
  <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>

        <Route path='/profile' render={ () => <Profile 
        store={ props.store }
        profilePage={props.state.profilePage} 
        dispatch={props.dispatch} />} />

        <Route path='/dialogs' render={ () => <Dialogs 
        store={props.store} /> } />

        <Route exact path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
  </BrowserRouter>)

export default App;
