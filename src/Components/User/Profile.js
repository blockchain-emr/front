import React, { Component } from "react";
import "../../Style/User/Profile.css";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "react-mdl";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
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
                        <label>Username :</label>
                        <lable>{}</lable>
                      </div>
                      <hr />
                      <div class="input-group mb-3">
                        <label>Email :</label>
                        <label>{}</label>
                      </div>
                      <hr />
                      <div class="input-group mb-3">
                        <label>Phone :</label>
                        <label>{}</label>
                      </div>
                      <hr />
                      <div class="input-group mb-3">
                        <label>Gender :</label>
                        <label>{}</label>
                      </div>
                      <hr />
                      <div class="input-group mb-3">
                        <label>Age :</label>
                        <lable>{}</lable>
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
                        <form>
                        <input
                          type="username"
                          className="form-control"
                          placeholder="Username"
                          name="userName"
                          noValidate
                          onChange={this.handleChange}
                        />
                        <br />

                        <input
                          type="text"
                          placeholder="First name"
                          aria-label="First name"
                          name="firstName"
                          className="form-control"
                          noValidate
                          onChange={this.handleChange}
                        />
                        <br />
                        <input
                          type="text"
                          placeholder="Last name"
                          aria-label="Last name"
                          name="lastName"
                          className="form-control"
                          noValidate
                          onChange={this.handleChange}
                        />
                        <br />
                        <input
                          type="phone"
                          className="form-control"
                          placeholder="Phone"
                          name="phone"
                          noValidate
                          onChange={this.handleChange}
                        />
                        <br />
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          noValidate
                          name="email"
                          onChange={this.handleChange}
                        />
                        <br />
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          noValidate
                          onChange={this.handleChange}
                        />
                        <br />
                        <select
                          className="custom-select"
                          id="inputGroupSelect01"
                        >
                          <option value="1">Male</option>
                          <option value="2">Female</option>
                        </select>

                        <DialogActions fullWidth>
                          <Button type="button" style={{ color: "white" }}>
                            Submit
                          </Button>
                          <Button
                            type="button"
                            onClick={this.handleCloseDialog}
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
export default Profile;
