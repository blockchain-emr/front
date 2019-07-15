import React, { Component } from 'react'
import axios from 'axios';
export default class Medications extends Component {
 
      state=
      {
        app:[]
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
        axios.get("http://192.168.1.4:5000/get/appointments", { headers: { Authorization: AuthStr } })
        .then(response=>{
          console.log(response.data)
            
            this.setState({
              app:response.data
            })
    
          //console.log(["20190714175947975959"])
          //var data = JSON.parse(response.data)
         // console.log(data.all_appointments)
          
         
        })
      }
     
     
  render() {
    return (
      <div>
        
        <div className="container">
        
        <div class="card-header" style={{backgroundColor:"white" ,color:"#65b4ce"}}>
          <h4>Medications</h4>
        </div>
        <div>
        {this.state.app.map(u =>
        <div className="card card-body mb-3" style={{backgroundColor:"#65b4ce"}}>
          <span style={{color:"white"}}>{u.timestamp.substring(0,4)+" / "+u.timestamp.substring(4,6)+" / "+u.timestamp.substring(6,8)}</span>
          <h4 style={{color:"white"}}>
          
          <li className="list-group-item"><span style={{color:"gray",fontSize:"20px"}}></span><span style={{color:"black",fontSize:"20px"}}>{u.medications.join(" / ")}</span></li>
        </h4>
          
          </div>
        )}
        </div>
  </div>
      </div>
    )
  }
}
