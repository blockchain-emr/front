import React, { Component } from "react";
import { Tab, Tabs } from "react-mdl";
import Issues from "../User/Issues";
import Medications from "../User/Medications";
import Allergies from "../User/Allergies";
import LabResult from "../User/LabResult";
import PreviousAppiontment from "../User/PreviousAppiontment";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
            <Issues/>
        </div>
    
      );
    }
    if (this.state.activeTab === 1) {
        return (
          <div>
              <Medications/>
          </div>
      
        );
      }
      if (this.state.activeTab === 2) {
        return (
          <div>
              <Allergies/>
          </div>
      
        );
      }
      if (this.state.activeTab === 3) {
        return (
          <div>
              <LabResult/>
          </div>
      
        );
      }
      if (this.state.activeTab === 4) {
        return (
          <div>
              <PreviousAppiontment/>
          </div>
      
        );
      }
  }

  render() {
    return (
      <div>
        <div className="demo-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Issues</Tab>
            <Tab>Medications</Tab>
            <Tab>Allergies</Tab>
            <Tab>Lab result</Tab>
            <Tab>Previous appointment</Tab>
          </Tabs>
          <section>
            <div className="content">{this.toggleCategories()}</div>
          </section>
        </div>
      </div>
    );
  }
}

export default List;
