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
      localStorage.removeItem('access_token');
      
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
    <a class="nav-link" href="#"><i class="fas fa-hospital-alt" style={{ color: "#65b4ce",fontSize:"15px"}} ><span style={{fontFamily:"Raleway",fontSize:"15px" ,fontWeight:"normal"}}>ibrahim</span></i></a>
  </li>
  <li class="nav-item" style={{padding:"8px",marginTop:"4px"}}>
        <i style={{color:"black"}}>|</i>
  </li>
  <li class="nav-item" style={{padding:"8px"}}>
  <a href="#">
                  <button type="button" className="btn btn-danger">
                    Logout
                  </button>
                </a>
  </li>
</ul>
</nav>
      </div>
        )
    }
}
