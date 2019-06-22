import React, { Component } from 'react'
import axios from 'axios';
export default class Medications extends Component {
 
      state=
      {
        users:[]
      }

      componentDidMount()
      {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
          console.log(res.data)
          this.setState
          ({
            users:res.data
          })
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
          {this.state.users.map(user =>
            <div key={user.id}>{user.name}and <div>id={user.id}</div></div>)}
        </div>
  </div>
      </div>
    )
  }
}
