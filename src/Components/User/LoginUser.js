import React, { Component } from "react";
import "../../Style/User/loginUser.css";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import swal from "sweetalert";
import jQuery from "jquery";

let fileReader;

const handleFileread = e => {
  const content = fileReader.result;
  document.getElementById('addressTextBox').value=content;
  
  console.log(content)

};
const handleFileChosen = file => {
  fileReader = new FileReader();
  fileReader.onloadend = handleFileread;
  fileReader.readAsText(file);
};

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

class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      password: "",
      resp: [],
      formErrors: {
        address: "",
        password: ""
      }
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  
 
 
  onChange(e) {
    e.preventDefault();
    this.setState({address:document.getElementById('addressTextBox').value});
    
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "address":
        formErrors.address =
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
  }
  handleSubmit(e) {
    e.preventDefault();

    if (formValid(this.state)) {
      fetch("http://192.168.1.4:5000/auth", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          address: this.state.address,
          password: this.state.password
        })
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
          this.setState({
            resp: response
          });
          if (this.state.resp.status== 200) {
            
            localStorage.setItem(
              "access_token",
            this.state.resp.access_token
            );
           
            this.setState({
              LoggedIn: true
            });


          } 
          else {
            swal({
              title: "User not Found",
              icon: "error",
              dangerMode: true
            });
          }
        });
    } else {
      swal({
        title: "Not Valid",
        icon: "error",
        dangerMode: true
      });
    }
  }

  render() {
    const { formErrors } = this.state;
    if (this.state.LoggedIn) {
      return (
        <Redirect
          to={{
            pathname: "/Profile"
          }}
        />
      );
    }
    return (
      <div className="container">
        <div class="row">
          <div class="col">
            <div className="left">
              <div className="login-main-text">
                <h1>
                  User
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
                          <i class="fas fa-user" />
                        </span>
                      </div>

                      <input
                        id="addressTextBox"
                        name="address"
                        type="text"
                        class="form-control"
                        placeholder="Address"
                        noValidate
                        onChange={this.onChange}
                        
                      />

                      {formErrors.address.length > 0 && (
                        <span
                          style={{ color: "red", padding: "-10px" }}
                          className="errorMessage"
                        >
                          {formErrors.address}
                        </span>
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
                        onChange={this.onChange}
                      />

                      {formErrors.password.length > 0 && (
                        <span
                          style={{ color: "red", padding: "-10px" }}
                          className="errorMessage"
                        >
                          {formErrors.password}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Login"
                        class="btn login_btn"
                        id="btnlog"
                        onClick={this.handleSubmit}
                      />
                      <input
                        type="file"
                        id="file"
                        multiple
                        className="input-file"
                        onChange={e => handleFileChosen(e.target.files[0])}
                      />
                    </div>
                  </form>
                  <div classname="card-footer">
                    <div
                      classname="d-flex justify-content-center links"
                      style={{ marginTop: "60px" }}
                    >
                      Don't have an account?
                      <Link to="/Signup" style={{ color: "#65b4ce" }}>
                        Register
                      </Link>
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

export default LoginUser;
