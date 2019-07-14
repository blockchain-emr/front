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

class SignupUser extends Component {
  constructor(props) {
    super(props);
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.onClick=this.onClick.bind(this)

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
      nationalId:null,
      password: null,
      age:null,
      resp:[],
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        nationalId:"",
        phone: "",
        password: "",
        age:""
      }
    };
  }


 
  handleSubmit = e => {
    e.preventDefault();
if (formValid(this.state)) {
  
      fetch('http://192.168.1.4:5000/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        
  
        body: JSON.stringify({
         age: this.state.age,
          email: this.state.email,
         first_name: this.state.firstName,
         last_name: this.state.lastName,
         national_id: this.state.nationalId,
         password: this.state.password,
         phone_number: this.state.phone
        })
       
        
      })
      .then(response => response.json())
      .then(response=>{
       
      this.setState({
        resp:response
      })
        if(this.state.resp.status==201)
        
    { 
     console.log(response)
     console.log(this.state.resp.address)
    
     this.handleOpenDialog();
    
      
      /*this.setState({
        validAccount:true
      })*/
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
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
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
  render() 
  {
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
      <div className="container" >
        <div className="row"style={{height:"500px"}}>
          <div className="col">
            <div className="left">
              <div className="login-main-text">
                <h1>
                  User
                  <br />
                  Registration Page
                </h1>
                <p>Register from here to access .</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="right">
              <div className="login-main-form" style={{ paddingTop: "10px" }}>
                <div className="login-form">
                  <form onSubmit={this.handleSubmit} noValidate>
                    <div class="input-group form-group">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          style={{ backgroundColor: "#65b4ce", color: "white" }}
                        >
                          Full Name
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="First name"
                        aria-label="First name"
                        name="firstName"
                        className="form-control"
                        noValidate
                onChange={this.handleChange}
                      />
                       
                      <input
                        type="text"
                        placeholder="Last name"
                        aria-label="Last name"
                        name="lastName"
                        className="form-control"
                        noValidate
                        onChange={this.handleChange}
                      />
                    </div>
{formErrors.firstName.length > 0 && (
  <span className="errorMessage" style={{color:"red"}}>{formErrors.firstName}</span>
)}
{formErrors.lastName.length > 0 && (
  <span className="errorMessage" style={{color:"red"}}>,{formErrors.lastName}</span>
)}
                    
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
                        type="tel"
                        className="form-control"
                        placeholder="Phone"
                        name="phone"
                        noValidate
                        onChange={this.handleChange}
                      />
                      
                        {formErrors.phone.length > 0 && (
                <span className="errorMessage" style={{color:"red"}}>{formErrors.phone}</span>)}
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          style={{ backgroundColor: "#65b4ce" }}
                        >
                          <i class="fas fa-credit-card"></i>
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="National Id"
                        name="nationalId"
                        noValidate
                        onChange={this.handleChange}
                      />
                      
                        {formErrors.nationalId.length> 0 && (
                <span className="errorMessage" style={{color:"red"}}>{formErrors.nationalId}</span>)}
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          style={{ backgroundColor: "#65b4ce" }}
                        >
                          <i class="fas fa-credit-card"></i>
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Age"
                        name="age"
                        noValidate
                        onChange={this.handleChange}
                      />
                      
                        {formErrors.age.length> 0 && (
                <span className="errorMessage" style={{color:"red"}}>{formErrors.age}</span>)}
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
                        className="form-control"
                        placeholder="Email"
                        noValidate
                        name="email"
                        onChange={this.handleChange}
                      />
                       {formErrors.email.length > 0 && (
                <span className="errorMessage" style={{color:"red"}}>{formErrors.email}</span>
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
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        noValidate
                        onChange={this.handleChange}
                      />
                       {formErrors.password.length > 0 && (
                <span className="errorMessage" style={{color:"red"}}>{formErrors.password}</span>
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
                  <div>
         
          <Dialog open={this.state.openDialog} style={{width:"400px"}}>
            <DialogTitle  style={{color:"#65b4ce"}}>Save your Address</DialogTitle>
            <DialogContent>
            <div class="input-group mb-3">
  <input type="text" readOnly class="form-control" id="myInput" style={{textAlign:"center"}} value={this.state.resp.address} />
  <div class="input-group-append">
    <button class="btn btn-success" onClick={myFunction}  type="button">Copy</button>
  </div>
</div>

              
            </DialogContent>
            <DialogActions >
            <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
            <Button type='button' onClick={this.onClick}>Save as text</Button>
             
              
            </DialogActions>
          </Dialog>
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

export default SignupUser;
