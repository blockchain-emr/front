import React, { Component } from "react";
import "../../Style/User/Profile.css";
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
      userName:null,
      email: null,
      phone: null,
      nationalId:null,
      age:null,
      password: null,
      resp:[],
      formErrors: {
        firstName: "",
        lastName: "",
        userName:"",
        email: "",
        nationalId:"",
        phone: "",
        age:"",
        password: ""
      }
    };
    this.state1 = {
      firstName: "",
      lastName: "",
      userName:"",
      email: "",
      phone: "",
      nationalId:"",
      age:"",
      password: "",
     
    };
  
    let LoggedIn=true
    /*if(token==null)
    {
      LoggedIn=false
    }*/
    
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }
  componentWillMount(){
    let email = '';
    if (localStorage && localStorage.getItem('email')) {
       email = JSON.parse(localStorage.getItem('email'));
      }
     this.setState({email: email})
   
     let access_token = '';
    if (localStorage && localStorage.getItem('access_token')) {
       access_token =localStorage.getItem('access_token');
      }
     this.setState({access_token: access_token})
   
     let age = '';
     if (localStorage && localStorage.getItem('age')) {
        age = JSON.parse(localStorage.getItem('age'));
       }
      this.setState({age: age})

      let phone = '';
     if (localStorage && localStorage.getItem('phone')) {
        phone = JSON.parse(localStorage.getItem('phone'));
       }
      this.setState({phone: phone})
    
     
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
      fetch('http://c89841f1.ngrok.io/api/users', {
        method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          phone: this.state.phone,
          nationalId: this.state.nationalId,
          email: this.state.email,
          age:this.state.age,
          password: this.state.password
        })
       
        
      })
       .then(response=>response.json())
      .then(response=>{
        console.log(response)
      this.setState({
        resp:response
      })
        if(this.state.resp.status_code==201)
    {   
      this.handleCloseDialog();
      swal(
        'Good job!',
        'You clicked the button!',
        'success'
      )
      
      window.location.reload();
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
                      John Doe
                    </span>
                  </h4>
                  <div className="container">
                    <form>
                      <div class="input-group mb-3">
                        <label style={{fontSize:"20px",color:"gray"}}>Username :</label>
                        <lable style={{fontSize:"20px",marginLeft:"10px"}}>{}</lable>
                      </div>
                      <hr />
                      <div class="input-group mb-3">
                        <label style={{fontSize:"20px",color:"gray"}}>Email :</label>
                        <label style={{fontSize:"20px",marginLeft:"10px"}}>{}</label>
                      </div>
                      <hr />
                      <div class="input-group mb-3">
                        <label style={{fontSize:"20px",color:"gray"}}>Phone :</label>
                        <label style={{fontSize:"20px",marginLeft:"10px"}}>{this.state.access_token}</label>
                      </div>
                      <hr />
                      <div class="input-group mb-3">
                        <label style={{fontSize:"20px",color:"gray"}}>Age :</label>
                        <lable style={{fontSize:"20px",marginLeft:"10px"}}>{}</lable>
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
                          type="username"
                          className="form-control"
                          placeholder="Username"
                          name="userName"
                          noValidate
                          onChange={this.handleChange}
                          style={{marginBottom:"10px"}} 
                        />
  {formErrors.userName.length > 0 && (
  <span className="errorMessage" style={{color:"black"}}>{formErrors.userName}</span>
)}
                        <input
                          type="text"
                          placeholder="First name"
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
                          type="text"
                          placeholder="Last name"
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
                          type="phone"
                          className="form-control"
                          placeholder="Phone"
                          name="phone"
                          noValidate
                          onChange={this.handleChange}
                          style={{marginBottom:"10px"}}
                        />
                        {formErrors.phone.length > 0 && (
  <span className="errorMessage" style={{color:"black"}}>{formErrors.phone}</span>
)}
                        
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          noValidate
                          name="email"
                          onChange={this.handleChange}
                          style={{marginBottom:"10px"}}
                        />
                        {formErrors.email.length > 0 && (
  <span className="errorMessage" style={{color:"black"}}>{formErrors.email}</span>
)}

                        <input
                          type="number"
                          className="form-control"
                          placeholder="Age"
                          name="age"
                          noValidate
                          onChange={this.handleChange}
                          style={{marginBottom:"10px"}}
                        />
                        {formErrors.age.length > 0 && (
  <span className="errorMessage" style={{color:"black"}}>{formErrors.age}</span>
)}
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          noValidate
                          onChange={this.handleChange}
                          style={{marginBottom:"10px"}}
                        />
                          {formErrors.password.length> 0 && (
  <span className="errorMessage" style={{color:"black"}}>{formErrors.password}</span>
)}
                        <br />
                        
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
