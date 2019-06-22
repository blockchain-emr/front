import React, { Component } from 'react'

export default class Issues extends Component {
  render() {
    return (
      <div>
        <div className="container">
        
        <div class="card-header" style={{backgroundColor:"white" ,color:"#65b4ce"}}>
          <h4>Issues List</h4>
        </div>
        <div class="card-body">
        <table class="table">
        <thead style={{backgroundColor:"#65b4ce" ,color:"white"}}>
          <tr classname="container">
            <th scope="col">#</th>
            <th scope="col">Disease Name</th>
            <th scope="col">Diagnostic Date</th>
            <th scope="col">Doctor Name</th>
          </tr>
        </thead>
        <tbody style={{backgroundColor:"white"}}>
          <tr>
            <th scope="row">1</th>
            <td>high blood pressure</td>
            <td>1/10/2009</td>
            <td>Ibrahim Mubarak</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td> Lower respiratory infections</td>
            <td>2/9/2010</td>
            <td>Hossam Mahmoud</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td> Chronic obstructive pulmonary disease</td>
            <td>7/6/2009</td>
            <td>Ahmed Mohamed</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>lung cancer</td>
            <td>15/2/2016</td>
            <td>Ibrahim Taha</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Diabetes mellitus</td>
            <td>9/6/2006</td>
            <td>Ahmed Eid</td>
          </tr>
          
          <tr>
            <th scope="row">6</th>
            <td>Alzheimer’s disease </td>
            <td>20/4/2017</td>
            <td>Mohamed Ali</td>
          </tr>
          
          <tr>
            <th scope="row">7</th>
            <td>Cirrhosis</td>
            <td>5/11/2011</td>
            <td>Ibrahim Taha  </td>
          </tr>
          
        </tbody>
      </table>
        </div>
      </div>
      </div>
    )
  }
}
