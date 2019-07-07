import React, { Component } from 'react'

export default class Notifications extends Component {
    render() {
        return (
            <div>
                 <div className="container">
        
        <div class="card-header" style={{backgroundColor:"white" ,color:"#65b4ce"}}>
          <h4>Notifications</h4>
        </div>
        <div>
            
            </div>
            <div class="card text-center" style={{padding:"40px"}}>
  <div class="card-header" style={{backgroundColor:"#65b4ce"}}>
    Featured
  </div>
  <div class="card-body" style={{border:"1px solid #65b4ce"}}>
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    <div class="card-footer text-muted">
    2 days ago
  </div>
  </div>
  
</div>
<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
            </div>
                
            </div>
        )
    }
}
