import React, { Component } from "react";
import "../../Style/User/Profile.css";
import axios from "axios";
import Consts from "../Const.js";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "react-mdl";
import swal from 'sweetalert';
import {Link,Redirect} from "react-router-dom";

const emailRegex = RegExp(
  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
);
const PhoneRegex = RegExp(/^01[0-2]{1}[0-9]{8}/);
const NationalIdRegex=RegExp(/^[0-9]{14}/)
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
      nationalId:null,
      age:null,
      resp:[],
      userInfo:[],
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        nationalId:"",
        phone: "",
        age:"",
        
      }
    };
  
    let LoggedIn=true
    
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
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
    axios.get("http://192.168.1.4:5000/account/profile", { headers: { Authorization: AuthStr } })
    .then(response=>{
      
      console.log(response.data)
      
      this.setState
      ({
        userInfo:response.data
        
      })

     
    })
  }
  
  

  handleOpenDialog() {
    
   
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
      
    this.setState({
      openDialog: false
    });
  }

  handleSubmit = e => {
    e.preventDefault();
   
if (formValid(this.state)) {
  const AuthStr = 'Bearer '.concat(this.state.access_token); 
      fetch('http://192.168.1.4:5000/account/profile', {
        method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization:AuthStr
        },
        body: JSON.stringify({
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          phone_number: this.state.phone,
          national_id: this.state.nationalId,
          email: this.state.email,
          age:this.state.age,
        })
       
        
      })
       .then(response=>response.json())
      .then(response=>{
        console.log(response)
     
      this.setState({
        resp:response
      })
        if(this.state.resp.status==201)
    {   
      this.handleCloseDialog();
     
      swal({
        title: 'Updating',
    text: 'Updated Successfully',
    icon: 'success',
    timer: 2000,
    buttons: false,
      }
        
      )
      
      .then(() => { window.location.reload()})
       
      
     
      }
  }
      )
    
    }
    else{

      swal({
      
        title: "Not Valid",
        icon: "error",
        dangerMode: true,
      })
      
    }}

  handleChange = e => {
    e.preventDefault();
   
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "userName":
        formErrors.userName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "phone":
        formErrors.phone = PhoneRegex.test(value) ? "" : "invalid  Phone";
        break;
        case "nationalId":
        formErrors.nationalId = value.length ==14 ? "" : "invalid  National ID";
        break;
        case "age":
        formErrors.age = value>0&&value<120 ? "" : "invalid Age";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div>
        <div className="container">
          <div class="tab-content no-border padding-24">
            <div id="home" class="tab-pane in active">
              <div class="row">
                <div class="col-xs-12 col-sm-9">
                  <h4 class="blue" style={{ textAlign: "left" }}>
                    <span
                      class="middle"
                      style={{
                        fontSize: "50px",
                        textAlign: "right",
                        color: "#65b4ce"
                      }}
                    >
                      {this.state.userInfo.first_name} {this.state.userInfo.last_name}
                    </span>
                  </h4>
                  <div className="container">
                    <form>
                      
                      <div class="input-group mb-3">
                        <label style={{fontSize:"20px",color:"gray"}}>Email :</label>
                        <label style={{fontSize:"20px",marginLeft:"10px"}}>{this.state.userInfo.email}</label>
                      </div>
                      <hr />
                      <div class="input-group mb-3">
                        <label style={{fontSize:"20px",color:"gray"}}>Phone :</label>
                        <label style={{fontSize:"20px",marginLeft:"10px"}}>{this.state.userInfo.phone_number}</label>
                      </div>
                      <hr />
                      <div class="input-group mb-3">
                        <label style={{fontSize:"20px",color:"gray"}}>Age :</label>
                        <lable style={{fontSize:"20px",marginLeft:"10px"}}>{this.state.userInfo.age}</lable>
                      </div>
                    </form>
                    <div>
                      <Button
                        colored
                        onClick={this.handleOpenDialog}
                        raised
                        ripple
                        style={{
                          marginLeft: "400px",
                          backgroundColor: "#65b4ce",
                          marginBottom: "30px"
                        }}
                      >
                        Edit
                      </Button>
                      <Dialog
                        style={{ backgroundColor: "#65b4ce" ,border:"1px",borderRadius:"20px"}}
                        open={this.state.openDialog}
                      >
                        <form  onSubmit={this.handleSubmit} noValidate>
                        
                        <input
                          id="first"
                          type="text"
                          placeholder={"First Name  ("+this.state.userInfo.first_name+")"}
                          aria-label="First name"
                          name="firstName"
                          className="form-control"
                          noValidate
                         
                        
                          onChange={this.handleChange}
                          style={{marginBottom:"10px"}}
                        />
                        {formErrors.firstName.length > 0 && (
  <span className="errorMessage" style={{color:"black"}}>{formErrors.firstName}</span>
)}
                        <input
                         id="last"
                          type="text"
                          placeholder={"Last Name  ("+this.state.userInfo.last_name+")"}
                          aria-label="Last name"
                          name="lastName"
                          className="form-control"
                          noValidate
                          onChange={this.handleChange}
                          style={{marginBottom:"10px"}}
                        />
                        {formErrors.lastName.length > 0 && (
  <span className="errorMessage" style={{color:"black"}}>{formErrors.lastName}</span>
)}
                        
                        <input
                         id="phone"
                          type="phone"
                          className="form-control"
                          placeholder={"Phone  ("+this.state.userInfo.phone_number+")"}
                          name="phone"
                          noValidate
                          onChange={this.handleChange}
                          style={{marginBottom:"10px"}}
                        />
                        {formErrors.phone.length > 0 && (
  <span className="errorMessage" style={{color:"black"}}>{formErrors.phone}</span>
)}
                        
                        <input
                         id="email"
                          type="email"
                          className="form-control"
                          placeholder={"Email  ("+this.state.userInfo.email+")"}
                          noValidate
                          name="email"
                          onChange={this.handleChange}
                          style={{marginBottom:"10px"}}
                        />
                        {formErrors.email.length > 0 && (
  <span className="errorMessage" style={{color:"black"}}>{formErrors.email}</span>
)}
 <input
  id="national"
                        type="number"
                        className="form-control"
                        placeholder={"National ID  ("+this.state.userInfo.national_id+")"}
                        name="nationalId"
                        noValidate
                        onChange={this.handleChange}
                        style={{marginBottom:"10px"}}
                      />
                      
                        {formErrors.nationalId.length> 0 && (
                <span className="errorMessage" style={{color:"black"}}>{formErrors.nationalId}</span>)}
                        <input
                         id="age"
                          type="number"
                          className="form-control"
                          placeholder={"Age  ("+this.state.userInfo.age+")"}
                          name="age"
                          noValidate
                          onChange={this.handleChange}
                          style={{marginBottom:"10px"}}
                        />
                        {formErrors.age.length > 0 && (
  <span className="errorMessage" style={{color:"black"}}>{formErrors.age}</span>
)}
                       
                        
                        <DialogActions fullWidth>
                          <Button type="button" style={{ color: "white" }}
                          onClick={this.handleSubmit}>
                            Submit
                          </Button>
                          <Button
                            type="reset"
                            onClick={this.handleCloseDialog}
                            style={{ color: "white" }}
                            value="Reset"
                           
                          >
                            Cancel
                          </Button>
                        </DialogActions>
                        </form>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
