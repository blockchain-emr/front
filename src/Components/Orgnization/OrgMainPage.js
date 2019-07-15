import React, { Component } from 'react';
import Oheader from "./Oheader";
import AddUser from "./AddUser";
import '../../Style/User/UserMainPage.css';
import AddDoctor from './AddDoctor';
import OrgProfile from './OrgProfile';
import GetData from './GetData';
import Search from './Search';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';


export default class OrgMainPage extends Component {
  render() {
    return (
        <Router>
        <div>
             <Oheader/>
             
<div class="sidenav">
<br/><br/><br/><br/><br/>

  <Link to="/OrgProfile">Profile<i id="co" class="fas fa-hospital-alt" style={{fontSize:"20px",marginLeft:"51px"}}></i></Link>
  
  
  <hr style={{backgroundColor:"#f0f4f7"}} />
  <Link to="./AddDoctor">Add Doctor<i class="fas fa-user-md" style={{fontSize:"23px",marginLeft:"12px"}}></i></Link>
  
  <hr style={{backgroundColor:"#f0f4f7"}} />
  <Link to="./Search" >Search<i class="fas fa-search"style={{fontSize:"23px",marginLeft:"46px"}}></i></Link>
  
 
  <hr style={{backgroundColor:"#f0f4f7"}} />
  <Link to="./GetData" >Get Data<i class="fa fa-copy" style={{fontSize:"25px",marginLeft:"33px"}}></i></Link>
  <span style={{color:"Gold",fontSize:"15px",marginLeft:"5px",fontWeight:"bold"}}>(Special Feature)</span>
  
</div>

<br/><br/><br/><br/>  
<div className="container">
<div class="main">
  
  <Switch>
  <Route exact path="/" component={OrgProfile}/>
  <Route  path="/OrgProfile" component={OrgProfile}/>
  <Route  path="/AddUser" component={AddUser}/>
  <Route  path="/AddDoctor" component={AddDoctor}/>
  <Route  path="/GetData" component={GetData}/>
  <Route  path="/Search" component={Search}/>
  </Switch>
  
</div>
</div>
        </div>
        </Router>
    )
  }
}
