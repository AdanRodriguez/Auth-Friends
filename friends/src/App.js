import React from 'react';
import './App.css';

import {Route, Link} from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <div className="App">
      <Link to ="/login">Login</Link>
      <Link to ="/friends">Friends</Link>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/friends" component={FriendsList} />
    </div>
  );
}

export default App;
