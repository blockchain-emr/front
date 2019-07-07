import React, { Component } from 'react';
import '../../Style/Home/Notfound.css';
import image from "../../img/team/drug-icon-2316244_960_720.png";

export default class Notfound extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#65b4ce",overflow:"hidden",height:"580px"}}>
                <h1 style={{marginBottom:"-80px"}}>SOMETHING WENT WRONG!!</h1>
                <h1 style={{fontSize:"300px",color:"white",fontWeight:"bolder"}}>4<img className="imgnot"src={image} style={{width:"250px",marginLeft:"7px"}}/><span style={{color:"white"}} >4</span></h1>
                <h1  style={{marginTop:"-70px"}}>Page not Found!</h1>
                <button type="button" className="btn btn-outline-light" style={{width:"130px"}}>HOME</button>
            </div>
        )
    }
}
