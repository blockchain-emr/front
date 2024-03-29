import React, { Component } from "react";
import swal from 'sweetalert';
import {Link,Redirect} from "react-router-dom";

import {Button,Dialog,DialogActions,DialogContent,DialogTitle}from 'react-mdl';
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  
  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);

}

const emailRegex = RegExp(
  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
);
const PhoneRegex = RegExp(/^01[0-2]{1}[0-9]{8}/);

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

class SignupOrg extends Component {
  constructor(props) {
    super(props);
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.onClick=this.onClick.bind(this)
    this.state = {
      fullOrgName: null,
      orgName:null,
      email: null,
      phone: null,
      password: null,
      resp:[],
      formErrors: {
        fullOrgName: "",
      orgName:"",
        email: "",
        phone: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

      if (formValid(this.state)) {
        fetch('http://192.168.1.4:5000/organization/register', {
          method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_name:this.state.fullOrgName,
            username:this.state.orgName,
            email:this.state.email,
            phone_number:this.state.phone,
            password: this.state.password
          })
         
          
        })
         .then(response=>response.json())
        .then(response=>{
          console.log(response)
        this.setState({
          resp:response
        })
          if(this.state.resp.msg=="Registered!")
      { 
        swal({
      title: 'Registered Successfully',
      text: 'Login now !',
      icon: 'success',
      timer: 3000,
      
        })
        
        this.setState({
          validAccount:true
        })
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
      }
  
    
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "fullOrgName":
        formErrors.fullOrgName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "orgName":
        formErrors.orgName =
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
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  onClick()
{
  
  download("Address.txt",this.state.resp.address);
  
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

  render() {
    const { formErrors } = this.state;
    if(this.state.validAccount){
      return(
        <Redirect to={{
          pathname: '/Login',
         
      }}
/>
      )
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="left">
              <div className="login-main-text">
              <div className="container">
                <h1>
                  Organization
                  <br />
                  Registration Page
                </h1>
                <p>Register from here to access .</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="right">
              <div className="login-main-form" style={{paddingTop:"10px"}}>
                <div className="login-form">
                  <form onSubmit={this.handleSubmit} noValidate>
                  <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          style={{ backgroundColor: "#65b4ce",color:"white" }}
                        >
                          Name
                        </span>
                      </div>
                      <input
                        type="text"
                        name="fullOrgName"
                        className="form-control"
                        placeholder="Full OrgName"
                        noValidate
                onChange={this.handleChange}
                      />
                      {formErrors.fullOrgName.length > 0 && (
                <span className="errorMessage"style={{color:"red"}}>{formErrors.fullOrgName}</span>
              )}
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          style={{ backgroundColor: "#65b4ce" }}
                        >
                          <i class="fas fa-building"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="orgName"
                        className="form-control"
                        placeholder="OrgName"
                        noValidate
                onChange={this.handleChange}
                      />
                      {formErrors.orgName.length > 0 && (
                <span className="errorMessage"style={{color:"red"}}>{formErrors.orgName}</span>
              )}
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          style={{ backgroundColor: "#65b4ce" }}
                        >
                      
                          <i className="fas fa-phone" />
                        </span>
                      </div>
                      <input
                        type="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                        noValidate
                onChange={this.handleChange}
                      />
                      {formErrors.phone.length > 0 && (
                <span className="errorMessage"style={{color:"red"}}>{formErrors.phone}</span>
              )}
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          style={{ backgroundColor: "#65b4ce" }}
                        >
                          <i className="fas fa-envelope" />
                        </span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        noValidate
                onChange={this.handleChange}
                      />
                      {formErrors.email.length > 0 && (
                <span className="errorMessage"style={{color:"red"}}>{formErrors.email}</span>
              )}
                    </div>

                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          style={{ backgroundColor: "#65b4ce" }}
                        >
                          <i className="fas fa-key" />
                        </span>
                      </div>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        noValidate
                onChange={this.handleChange}
                      />
                      {formErrors.password.length > 0 && (
                <span className="errorMessage"style={{color:"red"}}>{formErrors.password}</span>
              )}
                    </div>
                    

                    <div className="form-group">
                      <input
                        type="submit"
                        value="Sign up"
                        className="btn login_btn"
                        id="btnlog"
                        onClick={this.handleSubmit}
                      />
                    </div>
                  </form>
                  
                   
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupOrg;
