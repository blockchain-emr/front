import React, { Component } from 'react'

export default class Oheader extends Component {
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
