import React, { Component } from "react";
import "../../Style/User/loginUser.css";

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

class LoginOrg extends Component {
  constructor(props) {
    super(props);

    this.state = {
     username: null,
      password: null,
      formErrors: {
        username:"",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
      
        Username: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  }
  
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "username":
        formErrors.username =
          value.length < 3 ? "minimum 3 characaters required" : "";
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
      <div className="container">
        <div class="row">
          <div class="col">
            <div className="left">
              <div className="login-main-text">
                <h1>
                  Organization
                  <br />
                  Login Page
                </h1>
                <p>Login or Register from here to access .</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="right">
              <div className="login-main-form">
                <div class="login-form">
                  <form onSubmit={this.handleSubmit} noValidate>
                    <div class="input-group form-group">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          style={{ backgroundColor: "#65b4ce" }}
                        >
                          <i class="fas fa-building" />
                        </span>
                      </div>
                      <input
                        
                         name="username"
                        type="username"
                        class="form-control"
                        placeholder="Orgname"
                        noValidate
                        onChange={this.handleChange}
                        
                      />
                            {formErrors.username.length > 0 && (
                <span  style={{color:"red",padding:"-10px"}}className="errorMessage">{formErrors.username}</span>
              )}
                    </div>
                    
              
                    <div class="input-group form-group">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          style={{ backgroundColor: "#65b4ce" }}
                        >
                          <i class="fas fa-key" />
                        </span>
                      </div>
                      <input
                        name="password"
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        noValidate
                        onChange={this.handleChange}
                      />
                      
                    {formErrors.password.length > 0 && (
                <span  style={{color:"red",padding:"-10px"}}className="errorMessage">{formErrors.password}</span>
                    
                    )}
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Login"
                        class="btn login_btn"
                        id="btnlog"
                      />
                    </div>
                  </form>
                  <div classname="card-footer">
                    <div
                      classname="d-flex justify-content-center links"
                      style={{ marginTop: "60px" }}
                    >
                      Don't have an account?
                      <a href="#" style={{ color: "#65b4ce" }}>
                        Register
                      </a>
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

export default LoginOrg;
