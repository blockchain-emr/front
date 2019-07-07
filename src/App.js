import React, { Component,Fragment } from 'react';
import Gheader from "./Components/Home/Gheader";
import Features from "./Components/Home/Features";
import Banner from "./Components/Home/Banner";
import About from "./Components/Home/About";
import Departments from './Components/Home/Departments';
import Contact from "./Components/Home/Contact";
import Footer from "./Components/Home/Footer";
import Signup from "./Components/Home/Signup.js";
import './App.css';
import Uheader from "./Components/User/Uheader.js"
import Login from './Components/Home/Login';
import Profile from "./Components/User/Profile"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import UserMainPage from "./Components/User/UserMainPage.js";
import Lists from './Components/User/Lists';
import LoginUser from './Components/User/LoginUser';
import All from './Components/Home/All';
import OrgMainPage from './Components/Orgnization/OrgMainPage';
import Search from './Components/Orgnization/Search';
import Notfound from './Components/Home/Notfound';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/" component={All}/>
      <Route path="/All" component={All}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Signup" component={Signup}/>
      <Route path="/Profile" component={UserMainPage}/>
      <Route path="/OrgProfile" component={OrgMainPage}/> 
      
     
      
      </div>
      </Router>
     
    );
  }
}

export default App;
