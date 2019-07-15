import React, { Component } from 'react'
import im from "../../img/team/asd.jpg"
import axios from "axios"
export default class LabResult extends Component {
  state=
  {
    result:[]
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
    axios.get("http://192.168.1.4:5000/get/notifications", { headers: { Authorization: AuthStr } })
    .then(response=>{
      console.log(response.data)
        
        this.setState({
          result:response.data
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
          <h4>Lab Result</h4>
        </div>
        <div className="card card-body mb-3" style={{backgroundColor:"#65b4ce"}}>
          <h4 style={{color:"white"}}>
            <span>2019/7/14</span>
            <br/>
            <span>Broken bones</span>
            
          </h4>

            <ul className="list-group">
              <li className="list-group-item"><img src={im}/></li>

            </ul>
          
          
        </div>
        


        </div>
      </div>
    )
  }
}
