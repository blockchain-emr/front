import React, { Component } from 'react'
import {Badge,Icon} from "react-mdl";
import {Link,Redirect,BrowserRouter as Router} from "react-router-dom"
export default class Uheader extends Component {
  
    onClick()
    {
      localStorage.removeItem('token');
      
      return(
        
        <Link to="./All"></Link>
      )
    }
    componentWillMount(){
      let email = '';
      if (localStorage && localStorage.getItem('email')) {
         email = JSON.parse(localStorage.getItem('email'));
        }
       this.setState({email: email})
     
       
    }
  render() {
    
    return (
      
      <div>
        
<nav class="navbar navbar-default bg-white fixed-top " >
  <a class="navbar-brand" href="#">
  <span style={{paddingLeft:"30px",fontSize:"25px"}}>
                  <span  style={{ color: "black",fontWeight:"bold" }}>CARE</span>
                  <strong  style={{ color: "#65b4ce"}}>BLOCKS</strong>
                </span></a>

  <ul class="nav justify-content-end">
  <li class="nav-item" style={{padding:"8px"}}>
    <Link to="/Notifications" class="nav-link active">
    <Badge text="1" overlap>
    <Icon name="account_box" />
    </Badge>
    </Link>
  </li>
  <li class="nav-item" style={{padding:"8px",marginTop:"4px"}}>
        <i style={{color:"black"}}>|</i>
  </li>
  <li class="nav-item" style={{padding:"8px"}}>
    <Link class="nav-link" to="/Profile"><i class="fas fa-user-circle" style={{ color: "#65b4ce",fontSize:"15px"}} ><span style={{fontFamily:"Raleway",fontSize:"15px" ,fontWeight:"normal"}}>{this.state.email}</span></i></Link>
  </li>
  <li class="nav-item" style={{padding:"8px"}}>
  <Link to="./All">
                  <button type="button" className="btn btn-danger" onClick={this.onClick()}>
                    Logout
                  </button>
                </Link>
  </li>
</ul>
</nav>
      </div>
          )
  }
}
