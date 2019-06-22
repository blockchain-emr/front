import React, { Component } from 'react'
import Notifications from "./Notifications";
import Uheader from "./Uheader";
import Lists from "./Lists.js";
import '../../Style/User/UserMainPage.css';
import ContactDr from './ContactDr';
import Profile from './Profile';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

export default class UserMainPage extends Component {
  render() {
    return (
        <Router>
        <div>
             <Uheader/>
             
<div class="sidenav">
<br/><br/><br/><br/><br/>

  <Link to="/Profile">Profile<i id="co" class="fas fa-user-tie" style={{fontSize:"25px",marginLeft:"60px"}}></i></Link>
  
  <hr style={{backgroundColor:"#f0f4f7"}} />
  <Link to="/Lists">Services<i class="fas fa-file-medical-alt"style={{fontSize:"25px",marginLeft:"40px"}}></i></Link>
  
  <hr style={{backgroundColor:"#f0f4f7"}} />
  <Link to="./Notifications">Notifications<i class="fas fa-bell" style={{fontSize:"25px",marginLeft:"7px"}}></i></Link>
  
  <hr style={{backgroundColor:"#f0f4f7"}} />
  <Link to="./ContactDr">Contact<i class="fa fa-envelope" style={{fontSize:"25px",marginLeft:"45px"}}></i></Link>
  
</div>

<br/><br/><br/><br/>  
<div className="container">
<div class="main">
  
  <Switch>
  <Route exact path="/" component={Profile}/>
  <Route  path="/Profile" component={Profile}/>
  <Route  path="/Lists" component={Lists}/>
  <Route  path="/Notifications" component={Notifications}/>
  <Route  path="/ContactDr" component={ContactDr}/>
  </Switch>
  
</div>
</div>
        </div>
        </Router>
    )
  }
}
