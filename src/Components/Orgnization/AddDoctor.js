import React, { Component } from 'react'
import swal from 'sweetalert';
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

export default class AddDoctor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      userName:null,
      email: null,
      phone: null,
      password: null,
      resp:[],
      formErrors: {
        firstName: "",
        lastName: "",
        userName:"",
        email: "",
        phone: "",
        password: ""
      }
    }
    };
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
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            
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
                      Add Doctor{" "}
                      <i
                        class="fas fa-user-md"
                        style={{ color: "#65b4ce", fontSize: "45px" }}
                      />
                    </span>
                  </h4>
                  <div className="container">
                    <br />
                    <form style={{ marginLeft: "180px" }} onSubmit={this.handleSubmit} noValidate>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="firstName"
                        noValidate
                        onChange={this.handleChange}
                        style={{ textAlign: "center" }}
                      />
                    {formErrors.firstName.length > 0 && (
  <span className="errorMessage" style={{color:"red"}}>{formErrors.firstName}</span>
)}
                      <br />

                      <input
                        type="text"
                        placeholder="Last Name"
                        aria-label="Last Name"
                        name="lastName"
                        className="form-control"
                        noValidate
                        onChange={this.handleChange}
                        style={{ textAlign: "center" }}
                      />
                      {formErrors.lastName.length > 0 && (
  <span className="errorMessage" style={{color:"red"}}>{formErrors.lastName}</span>
)}
                      <br />
                    
                      <input
                        type="text"
                        placeholder="Username"
                        aria-label="Username"
                        name="userName"
                        className="form-control"
                        noValidate
                        onChange={this.handleChange}
                        style={{ textAlign: "center" }}
                      />
                      {formErrors.userName.length > 0 && (
  <span className="errorMessage" style={{color:"red"}}>{formErrors.userName}</span>
)}
                      <br />
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone"
                        name="phone"
                        noValidate
                        onChange={this.handleChange}
                        style={{ textAlign: "center" }}
                      />
                      {formErrors.phone.length > 0 && (
  <span className="errorMessage" style={{color:"red"}}>{formErrors.phone}</span>
)}
                      <br />
                      <input
                        type="Email"
                        className="form-control"
                        placeholder="Email"
                        noValidate
                        name="email"
                        onChange={this.handleChange}
                        style={{ textAlign: "center" }}
                      />
                      {formErrors.email.length > 0 && (
  <span className="errorMessage" style={{color:"red"}}>{formErrors.email}</span>
)}
                      <br />
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        noValidate
                        onChange={this.handleChange}
                        style={{ textAlign: "center" }}
                      />
                      {formErrors.password.length > 0 && (
  <span className="errorMessage" style={{color:"red"}}>{formErrors.password}</span>
)}
                      <br />
                      <br />
                      <div className="form-group">
                        <input
                          type="submit"
                          value="ADD"
                          className="btn login_btn"
                          id="btnlog"
                          onClick={this.handleSubmit}
                          style={{ marginLeft: "180px" }}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
        )
    }
}
