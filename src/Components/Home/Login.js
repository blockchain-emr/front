import React, { Component } from "react";
import { Tab, Tabs } from "react-mdl";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginUser from "../User/LoginUser.js";
import LoginOrg from "../Orgnization/LoginOrg.js";
import Footer from "./Footer.js";
import LoginHeader from "./LoginHeader";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        
          <div class="container">
          <LoginUser/>
        </div>
      );
    }
        else if(this.state.activeTab===1)
      {
          return(
              <div className="container">
                <LoginOrg/>
              </div>
          )
      }
    }
  
  render() {
    return (
      
      <div>
        <LoginHeader/>
          <br/>
          <br/>
          
          <br/>
        <div className="demo-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>User</Tab>
            <Tab>Organization</Tab>
          </Tabs>
          <section>
            <div className="content">{this.toggleCategories()}</div>
          </section>
        </div>
        <br/>
        <Footer/>
      </div>
      
    );
  }
}
export default Login;
