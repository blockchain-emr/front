import React, { Component } from "react";
import "../../Style/User/Profile.css";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "react-mdl";
import swal from "sweetalert";
import { Link, Redirect } from "react-router-dom";

const emailRegex = RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
const PhoneRegex = RegExp(/^01[0-2]{1}[0-9]{8}/);
const NationalIdRegex = RegExp(/^[0-9]{14}/);
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

export default class OrgProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orgName: null,
      fullOrgName: null,
      email: null,
      phone: null,
      password: null,
      resp: [],
      formErrors: {
        fullOrgName: "",
        orgName: "",
        email: "",
        phone: "",
        password: ""
      }
    };
    this.state1 = {
      orgName: "",
      fullOrgName: "",
      email: "",
      phone: "",
      password: ""
    };

    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }
  componentWillMount(){
     let token = '';
    if (localStorage && localStorage.getItem('token')) {
       token = JSON.parse(localStorage.getItem('token'));
      }
     this.setState({token: token})
    
     
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
          orgName: this.state.orgName,
          fullOrgName: this.state.fullOrgName,
          phone: this.state.phone,
          email: this.state.email,
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
      case "orgName":
        formErrors.orgName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "fullOrgName":
        formErrors.fullOrgName =
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
                      Organization
                      <i
                        class="fas fa-hospital-alt"
                        style={{
                          color: "#65c4ce",
                          marginLeft: "10px",
                          fontSize: "45px"
                        }}
                      />
                    </span>
                  </h4>
                  <div className="container">
                    <form>
                      <div class="input-group mb-3">
                        <label style={{ fontSize: "20px", color: "gray" }}>
                          Orgname :
                        </label>
                        <lable style={{ fontSize: "20px", marginLeft: "10px" }}>
                          {}
                        </lable>
                      </div>
                      <hr />
                      <div class="input-group mb-3">
                        <label style={{ fontSize: "20px", color: "gray" }}>
                          Email :
                        </label>
                        <label style={{ fontSize: "20px", marginLeft: "10px" }}>
                          {}
                        </label>
                      </div>
                      <hr />
                      <div class="input-group mb-3">
                        <label style={{ fontSize: "20px", color: "gray" }}>
                          Phone :
                        </label>
                        <label style={{ fontSize: "20px", marginLeft: "10px" }}>
                          {}
                        </label>
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
                        style={{
                          backgroundColor: "#65b4ce",
                          border: "1px",
                          borderRadius: "20px"
                        }}
                        open={this.state.openDialog}
                      >
                        <form  onSubmit={this.handleSubmit} noValidate>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Orgname"
                            name="orgName"
                            noValidate
                            onChange={this.handleChange}
                            style={{ marginBottom: "10px" }}
                          />
                          {formErrors.orgName.length > 0 && (
  <span className="errorMessage" style={{color:"black"}}>{formErrors.orgName}</span>
)}

                          <input
                            type="text"
                            placeholder="Full Orgname"
                            aria-label="Full Orgname"
                            name="fullOrgName"
                            className="form-control"
                            noValidate
                            onChange={this.handleChange}
                            style={{ marginBottom: "10px" }}
                          />
                           {formErrors.fullOrgName.length > 0 && (
  <span className="errorMessage" style={{color:"black"}}>{formErrors.fullOrgName}</span>
)}

                          <input
                            type="phone"
                            className="form-control"
                            placeholder="Phone"
                            name="phone"
                            noValidate
                            onChange={this.handleChange}
                            style={{ marginBottom: "10px" }}
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
                            style={{ marginBottom: "10px" }}
                          />
                           {formErrors.email.length > 0 && (
  <span className="errorMessage" style={{color:"black"}}>{formErrors.email}</span>
)}

                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            noValidate
                            onChange={this.handleChange}
                            style={{ marginBottom: "10px" }}
                          />
                           {formErrors.password.length > 0 && (
  <span className="errorMessage" style={{color:"black"}}>{formErrors.password}</span>
)}

                          <DialogActions fullWidth>
                            <Button type="button" style={{ color: "white" }}
                             onClick={this.handleSubmit}>
                              
                              Submit
                            </Button>
                            <Button
                              type="reset"
                              onClick={this.handleCloseDialog}
                              value="Reset"
                              style={{ color: "white" }}
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
