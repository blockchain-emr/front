import React, { Component } from 'react';
import axios from "axios";
export default class ContactDr extends Component {
    constructor(props)
   {
       super(props);
    this.state=
    {
      doctors:[]
    }
   };
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
  axios.get("http://192.168.1.4:5000/doctor", { headers: { Authorization: AuthStr } })
  .then(response=>{
    console.log(response)
    console.log(response.data)
    
    this.setState
    ({
      doctors:response.data
      
    })

   
  })
}

    render() {
        return (
            <div>
                 <div className="container">
        
        <div class="card-header" style={{backgroundColor:"white" ,color:"#65b4ce"}}>
          <h4>Contact</h4>
        </div>
        <div >
        <form style={{background:"#65b4ce",height:"400px",borderBottomRightRadius:"20px",borderBottomLeftRadius:"20px"}}>
  
  <select style={{marginTop:"30px",textAlignLast:"center",width:"800px",height:"50px",backgroundColor:"white",fontSize:"20px",outline:"none",border:"1px solid white",color:"black",borderRadius:"20px"}}>
  <option value="volvo">Choose your doctor</option>
  {this.state.doctors.map(doctor =>
  
  <option value="saab">{doctor.first_name} {doctor.last_name}</option>
  )}
</select>
   <div class="form-group">
    <textarea class="form-control"  rows="4" style={{margin:"0 auto",width:"800px",marginTop:"30px",backgroundColor:"white",outline:"none",textAlign:"center",border:"1px solid white",color:"black",fontSize:"25px",borderRadius:"20px"}}></textarea>
  </div>
  <input
  type="submit"
  value="Send"
  style={{color:"#65b4ce",marginTop:"15px",backgroundColor:"white",width:"100px",height:"40px",border:"1px solid white",borderRadius:"20px"}}
  />
</form>
            </div>
            </div>
                
            </div>
        )
    }
}
