import React, { Component } from 'react'
import axios from "axios";

export default class Issues extends Component {
  constructor(props) {
    super(props);
    this.state={
      issues:[]
    }
  }
  componentWillMount(){
    let access_token = '';
    if (localStorage&& localStorage.getItem('access_token')) {
      access_token = localStorage.getItem('access_token');
      }
     this.setState({access_token:access_token}) 
     
  }
  componentDidMount()
  {
    const AuthStr = 'Bearer '.concat(this.state.access_token); 
    axios.get("http://192.168.1.4:5000/get/chronics", { headers: { Authorization: AuthStr } })
    .then(response=>{
      
      console.log(response.data)
      
      this.setState
      ({
        issues:response.data
        
      })

     
    })
  }
 
 
  render() {
    return (
      <div>
        <div className="container">
        
        <div class="card-header" style={{backgroundColor:"white" ,color:"#65b4ce"}}>
          <h4>Issues List</h4>
        </div>
        <div class="card-body">
        <table class="table">
        <thead style={{backgroundColor:"#65b4ce" ,color:"white"}}>
          <tr classname="container">
            
            <th scope="col">Disease Name</th>
            <th scope="col">Diagnostic Date</th>
          
          </tr>

        </thead>
        <tbody style={{backgroundColor:"white"}}>
        
        {
         
          this.state.issues.map(u =>
          <tr>
            <td>{u.issue}</td>
            <td>{u.time_stamp.substring(0,4)+" / "+u.time_stamp.substring(4,6)+" / "+u.time_stamp.substring(6,8)}</td>
            
          </tr>
        )}
        </tbody>
      </table>
        </div>
      </div>
      </div>
    )
  }
}
