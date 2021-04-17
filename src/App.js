// Входная точка в приложение

/* eslint-disable react/prop-types */
import React from "react";
/* Подключили роутинг */
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

// This is JSX? - Yes
const App = () => (
  /* Cкобки после стрелки стоят потому что код перенесен на новую строку:
   Подключили роутинг*/
  <BrowserRouter>
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

        <Route path="/dialogs" render={() => <DialogsContainer />} />

        <Route path="/users" render={() => <UsersContainer />} />

        <Route path="/login" render={() => <LoginPage />} />

        <Route exact path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
