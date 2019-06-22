import React, { Component } from "react";
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import {
  Layout,
  Header,
  Navigation,
  
} from "react-mdl";
import "../../Style/Home/Gheader.css";
import Login from "./Login";
import Banner from "./Banner";


class Gheader extends Component {
  
  Login()
  {
    return(
      <Link to="/Login"></Link>
    )
  }
  render() {
    return (
      <Router>
      <div>
        <div style={{height: '10px', position: 'relative'}}>
    <Layout fixedHeader>
    <Header
              style={{ backgroundColor: "white",position:"fixed" }}
              title={
                <a href="/" className="Title"><span>
                  <span  style={{ color: "black",fontWeight:"bold" }}>CARE</span>
                  <strong  style={{ color: "#65b4ce",}}>BLOCKS</strong>
                </span></a>
              }
            >
              <Navigation className="nav">
                <a href="#Home" style={{color:"#65b4ce"}}>Home</a>
                <a href="#About" style={{color:"#65b4ce"}}>About</a>
                <a href="#Departments" style={{color:"#65b4ce"}}>Departments</a>
                <a href="#Contact" style={{color:"#65b4ce"}}>Contact</a>
                <Link to="/Login"><button type="button" class="btn btn-success" onClick={this.Login()}>Login</button></Link>
              </Navigation>
            </Header>
            <div className="container">
                  </div>
    </Layout>
    </div>
    </div>
    </Router>
    );
  }
}
export default Gheader;
