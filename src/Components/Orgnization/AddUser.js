import React, { Component } from "react";

export default class AddUser extends Component {
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
                      Add User{" "}
                      <i
                        class="fas fa-user-plus"
                        style={{ color: "#65b4ce", fontSize: "45px" }}
                      />
                    </span>
                  </h4>
                  <div className="container">
                    <br />
                    <form style={{ marginLeft: "180px" }}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="firstName"
                        noValidate
                        onChange={this.handleChange}
                        style={{ textAlign: "center" }}
                      />

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
                      <br />
                      <input
                        type="number"
                        placeholder="National ID"
                        aria-label="NationalId"
                        name="nationalId"
                        className="form-control"
                        noValidate
                        onChange={this.handleChange}
                        style={{ textAlign: "center" }}
                      />
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
                      <br />
                      <input
                        type="phone"
                        className="form-control"
                        placeholder="Phone"
                        name="phone"
                        noValidate
                        onChange={this.handleChange}
                        style={{ textAlign: "center" }}
                      />
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
                      <br />
                      <br />
                      <div className="form-group">
                        <input
                          type="submit"
                          value="ADD"
                          className="btn login_btn"
                          id="btnlog"
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
    );
  }
}
