import React, { Component } from 'react'
import {Badge,Icon} from "react-mdl";
import {Link,Redirect,BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';
export default class Uheader extends Component {
  constructor(props) {
    super(props);
    this.state={
      userInfo:[]
    }
  };
    onClick()
    {
      localStorage.removeItem('');
      
      return(
        
        <Link to="./All"></Link>
      )
    }
    componentWillMount(){
      let access_token = '';
    if (localStorage && localStorage.getItem('access_token')) {
      access_token = localStorage.getItem('access_token');
      }
     this.setState({access_token: access_token})  
    }
    componentDidMount()
    {
      const AuthStr = 'Bearer '.concat(this.state.access_token); 
      axios.get("http://192.168.1.4:5000/account/profile", { headers: { Authorization: AuthStr } })
      .then(response=>{
        
        console.log(response.data)
        
        this.setState
        ({
          userInfo:response.data
          
        })
      })
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
    <Link class="nav-link" to="/Profile"><i class="fas fa-user-circle" style={{ color: "#65b4ce",fontSize:"15px"}} ><span style={{fontFamily:"Raleway",fontSize:"15px" ,fontWeight:"normal"}}>{this.state.userInfo.first_name} {this.state.userInfo.last_name}</span></i></Link>
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
