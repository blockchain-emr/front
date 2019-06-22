import React, { Component } from "react";

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

class SignupUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      userName:null,
      email: null,
      phone: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        userName:"",
        email: "",
        phone: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
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
                  <form method="post">
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
                          <i className="fas fa-user" />
                        </span>
                      </div>
                      <input
                        type="username"
                        className="form-control"
                        placeholder="Username"
                        name="userName"
                        noValidate
                        onChange={this.handleChange}
                      />
                      {formErrors.userName.length > 0 && (
                <span className="errorMessage" style={{color:"red"}}>{formErrors.userName}</span>)}
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
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          style={{ backgroundColor: "#65b4ce" }}
                        >
                          <i className="fas fa-venus-mars" />
                        </span>
                      </div>
                      <select className="custom-select" id="inputGroupSelect01">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <input
                        type="submit"
                        value="Sign up"
                        className="btn login_btn"
                        id="btnlog"
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

export default SignupUser;
