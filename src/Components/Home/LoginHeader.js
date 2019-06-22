import React, { Component } from "react";
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import {
  Layout,
  Header,
  Navigation,
  
} from "react-mdl";


class LoginHeader extends Component {
  
    signUp()
    { return   (
            <Link to="/Signup"></Link>
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
                <a href="/" style={{color:"#65b4ce",fontSize:"20px"}}>Back Home</a>
                <Link to="/Signup"><button type="button" class="btn btn-success" onClick={this.signUp()}>Sign up</button></Link>
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
export default LoginHeader;
