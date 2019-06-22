import React, { Component } from "react";
import { Tab, Tabs } from "react-mdl";
import "bootstrap/dist/css/bootstrap.min.css";
import SignupUser from "../User/SignupUser";
import SignupOrg from "../Orgnization/SignupOrg";
import SignupHeader from "./SignupHeader";
import Footer from "./Footer";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        
          <div class="container">
          <SignupUser/>
        </div>
      );
    }
        else if(this.state.activeTab===1)
      {
          return(
              <div className="container">
           <SignupOrg/>
              </div>
          )
      }
    }
  
  render() {
    return (
      <div>
        <SignupHeader/>
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
export default Signup;
