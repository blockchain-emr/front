import React, { Component } from 'react'
import axios from 'axios';
import {Link,Redirect,BrowserRouter as Router} from "react-router-dom";
export default class Oheader extends Component {
  constructor(props) {
    super(props);
    this.state={
      orginfo:[]
    }
  };
    onClick()
    {
      
      console.log("hiiiiii")
      
      return(
        
        <Link to="./All"></Link>
      )
    }
    componentWillMount(){
      let token = '';
    if (localStorage && localStorage.getItem('token')) {
       token = localStorage.getItem('token');
      }
     this.setState({token: token})  
    }
    componentDidMount()
    {
      const AuthStr = 'Bearer '.concat(this.state.token); 
      axios.get("http://192.168.1.4:5000/organization/profile", { headers: { Authorization: AuthStr } })
      .then(response=>{
        
        console.log(response.data)
        
        this.setState
        ({
          orginfo:response.data
          
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
    <a class="nav-link" href="#"><i class="fas fa-hospital-alt" style={{ color: "#65b4ce",fontSize:"15px"}} ><span style={{fontFamily:"Raleway",fontSize:"15px" ,fontWeight:"normal"}}> {this.state.orginfo.username}</span></i></a>
  </li>
  <li class="nav-item" style={{padding:"8px",marginTop:"4px"}}>
        <i style={{color:"black"}}>|</i>
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
