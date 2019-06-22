import React, { Component } from 'react'

export default class LabResult extends Component {
  state = {
    showinfo: false
  };
  render() {
    const { showinfo } = this.state;
    return (
      <div>
      
        <div className="container">
        
        <div class="card-header" style={{backgroundColor:"white" ,color:"#65b4ce"}}>
          <h4>Lab Result</h4>
        </div>
        <div className="card card-body mb-3" style={{backgroundColor:"#65b4ce"}}>
          <h4 style={{color:"white"}}>
            hello
            <i
              onClick={() => this.setState({ showinfo: !this.state.showinfo })}
              className="fas fa-sort-down" style={{ cursor: "pointer", float: "right", color: "White" }}
            />
          </h4>
          {showinfo ? (
            <ul className="list-group">
              <li className="list-group-item">Email:</li>
              <li className="list-group-item">Phone:</li>
            </ul>
          ) : null}
          
        </div>
        


        </div>
      </div>
    )
  }
}
