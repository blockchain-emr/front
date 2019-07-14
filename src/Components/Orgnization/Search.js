import React, { Component } from 'react'
import axios from 'axios';
function searchingFor(term)
    {
        return function(x)
        {
            return x.first_name.toLowerCase().includes(term.toLowerCase()) ||x.last_name.toLowerCase().includes(term.toLowerCase())|| !term;
        }
    }
export default class Search extends Component {
   constructor(props)
   {
       super(props);
       
           this.state={
               users:this.state.users,
               term:'',

           }

       this.searchHandler=this.searchHandler.bind(this);
   }

    state=
    {
      users:[]
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
    axios.get("http://192.168.1.4:5000/doctor", { headers: { Authorization: AuthStr } })
    .then(response=>{
      console.log(response)
      console.log(response.data)
      
      this.setState
      ({
        users:response.data
        
      })

     
    })
  }
  
    searchHandler(event)
    {
        this.setState({term:event.target.value})
    }
    


    render() {
        const {term,users}=this.state;
        return (
            
            <div>
            <div className="container">
            
            <div class="card-header" style={{backgroundColor:"white" ,color:"#65b4ce"}}>
            <h4 class="blue" style={{ textAlign: "left" }}>
                    <span
                      class="middle"
                      style={{
                        fontSize: "50px",
                        textAlign: "right",
                        color: "#65b4ce"
                      }}
                    >
                     Search{" "}
                      <i
                        class="fas fa-search"
                        style={{ color: "#65b4ce", fontSize: "45px" }}
                      />
                    </span>
                  </h4>
                 <input
                 
                 type="text"
                 placeholder=" First Name or Last Name"
                 aria-label="Username"
                 name="userName"
                 className="form-control"
                 value={term}
                 noValidate
                 onChange={this.handleChange}
                 style={{ textAlign: "center",fontSize:"20px" }}
                 onChange={this.searchHandler}
               />
                
            </div>
            <div class="card-body">
            <table class="table">
            <thead style={{backgroundColor:"#65b4ce" ,color:"white"}}>
              <tr classname="container">
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody style={{backgroundColor:"white"}}>
            {users.filter(searchingFor(term)).map(user =>
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td></td>
                <td></td>
                
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
