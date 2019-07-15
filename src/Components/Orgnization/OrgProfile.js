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
import axios from 'axios';
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
      resp: [],
      orgInfo:[],
      formErrors: {
        fullOrgName: "",
        orgName: "",
        email: "",
        phone: "",
    
      }
    };
    

    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }
  componentWillMount(){
     let token = '';
    if (localStorage && localStorage.getItem('token')) {
      token = localStorage.getItem('token');
      }
     this.setState({token:token})
    
     
  }

  componentDidMount()
  {
    const AuthStr = 'Bearer '.concat(this.state.token); 
    console.log(AuthStr)
    axios.get("http://192.168.1.4:5000/organization/profile", { headers: { Authorization: AuthStr } })

    .then(response=>{
    
      console.log(response.data)
      
      this.setState
      ({
        orgInfo:response.data
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
  const AuthStr = 'Bearer '.concat(this.state.token); 
      fetch('http://192.168.1.4:5000/organization/profile', {
        method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization:AuthStr
        },
        body: JSON.stringify({
          username: this.state.orgName,
          full_name: this.state.fullOrgName,
          phone_number: this.state.phone,
          email: this.state.email
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
                      {this.state.orgInfo.full_name}
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
                          {this.state.orgInfo.username}
                        </lable>
                      </div>
                      <hr />
                      <div class="input-group mb-3">
                        <label style={{ fontSize: "20px", color: "gray" }}>
                          Email :
                        </label>
                        <label style={{ fontSize: "20px", marginLeft: "10px" }}>
                          {this.state.orgInfo.email}
                        </label>
                      </div>
                      <hr />
                      <div class="input-group mb-3">
                        <label style={{ fontSize: "20px", color: "gray" }}>
                          Phone :
                        </label>
                        <label style={{ fontSize: "20px", marginLeft: "10px" }}>
                          {this.state.orgInfo.phone_number}
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
                            placeholder={"Orgname  ("+this.state.orgInfo.username+")"}
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
                            placeholder={"Full Orgname  ("+this.state.orgInfo.full_name+")"}
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
                            placeholder={"Phone  ("+this.state.orgInfo.phone_number+")"}
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
                            placeholder={"Email  ("+this.state.orgInfo.email+")"}
                            noValidate
                            name="email"
                            onChange={this.handleChange}
                            style={{ marginBottom: "10px" }}
                          />
                           {formErrors.email.length > 0 && (
  <span className="errorMessage" style={{color:"black"}}>{formErrors.email}</span>
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
