import React, { Component } from 'react'
import axios from 'axios';
export default class PreviousAppiontment extends Component {
  constructor(props) {
    super(props);
    this.state={
      app:[],
      showinfo: false
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
          <h4>Previous Appiontment</h4>
        </div>
        </div>
        <div className="container">
        
        
        {this.state.app.map(user =>
        <div className="card card-body mb-3" style={{backgroundColor:"#65b4ce"}}>
          <h4 style={{color:"white"}}>
            {user.timestamp.substring(0,4)+" / "+user.timestamp.substring(4,6)+" / "+user.timestamp.substring(6,8)}
          </h4>
      
            <ul className="list-group">
              <li className="list-group-item"><span style={{color:"gray",fontSize:"20px"}}>Diagnose:</span><span style={{color:"black",fontSize:"20px"}}>{user.diagnoses}</span></li>
              <li className="list-group-item"><span style={{color:"gray",fontSize:"20px"}}>Diet:</span><span style={{color:"black",fontSize:"20px"}}>{user.diet}</span></li>
              <li className="list-group-item"><span style={{color:"gray",fontSize:"20px"}}>Hints:</span><span style={{color:"black",fontSize:"20px"}}>{user.hints}</span></li>
              <li className="list-group-item"><span style={{color:"gray",fontSize:"20px"}}>Medications:</span><span style={{color:"black",fontSize:"20px"}}>{user.medications.join(" / ")}</span></li>
            </ul>
          
          
        </div>
        
        )}
</div>

        
      </div>
    )
  }
}
