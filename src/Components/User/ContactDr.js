import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
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

export default class ContactDr extends Component {
  constructor(props) {
    super(props);
    this.state = {
          selectedItem:"",
          subject: null,
          message:null,
          resp:[],
         doctors:[],
         formErrors: {
          option: "",
          subject: "",
          messege:""
        }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
;


  componentWillMount(){
    let access_token = "";
    if (localStorage && localStorage.getItem("access_token")) {
      access_token = localStorage.getItem("access_token");
    }
    this.setState({ access_token: access_token });
  }
  componentDidMount() {
    const AuthStr = "Bearer ".concat(this.state.access_token);
    axios
      .get("http://192.168.1.4:5000/doctor", {
        headers: { Authorization: AuthStr }
      })
      .then(response => {
        console.log(response);
        console.log(response.data);

        this.setState({
          doctors: response.data
        });
      });
  }
  handleOnSelect() {}
  
  handleChange(e){
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "subject":
        formErrors.subject =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "message":
        formErrors.messege =
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
          address: this.state.selectedItem,
          password: this.state.subject,
          asdasd:this.state.messege
        })
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
          this.setState({
            resp: response
          });
          if (this.state.resp.status== 200) {
            

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
    return (
      <div>
        <div className="container">
          <div
            class="card-header"
            style={{ backgroundColor: "white", color: "#65b4ce" }}
          >
            <h4>Contact</h4>
          </div>
          <div>
            <form
              style={{
                background: "#65b4ce",
                height: "400px",
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "20px"
              }}
              onSubmit={this.handleSubmit} noValidate 
            >
              <select
                name="options"
                style={{
                  marginTop: "30px",
                  textAlignLast: "center",
                  width: "800px",
                  height: "50px",
                  backgroundColor: "white",
                  fontSize: "20px",
                  outline: "none",
                  border: "1px solid white",
                  color: "black",
                  borderRadius: "20px"
                }}
                value={this.state.selectedItem}
                 onChange={(e)=>this.setState({selectedItem:e.target.value})}
                
              >
                <option value="volvo">Choose your doctor</option>
                {this.state.doctors.map(doctor => (
                  <option
                    id={doctor.id}
                    onSelect={this.handleOnSelect()}
                  >
                    {doctor.first_name} {doctor.last_name}
                  </option>
                ))}
              </select>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="form-control"
                noValidate
                name="subject"
                onChange={this.handleChange}
                
                style={{
                  margin: "0 auto",
                  width: "800px",
                  marginTop: "30px",
                  backgroundColor: "white",
                  outline: "none",
                  textAlign: "center",
                  border: "1px solid white",
                  color: "black",
                  fontSize:"25px",
                  borderRadius: "20px"
                }}
              />
              <div class="form-group">
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="Your Message ....."
                  name="message"
                  style={{
                    margin: "0 auto",
                    width: "800px",
                    marginTop: "30px",
                    backgroundColor: "white",
                    outline: "none",
                    textAlign: "center",
                    border: "1px solid white",
                    color: "black",
                    fontSize: "25px",
                    borderRadius: "20px"
                  }}
                  onChange={this.handleChange}
               
                />
              </div>
              <input
                type="submit"
                value="Send"
                onClick={this.handleSubmit}
                style={{
                  color: "#65b4ce",
                  marginTop: "15px",
                  backgroundColor: "white",
                  width: "100px",
                  height: "40px",
                  border: "1px solid white",
                  borderRadius: "20px"
                }}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
