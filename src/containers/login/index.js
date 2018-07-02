import React, { Component } from 'react';
import './index.css';
class Login extends Component {
    render() {

        const btnWidth = {
            width:'100%'
        }

        const btnLeft = {
            marginLeft: '45%'
        }

        const middleOr = {
            position: "absolute",
            top: "0%",
            left: "45%",
            borderLeft: "1px solid grey",
            height: "100%"
        }
      return (
        
        <div className="container">
            <h3 class="text-center" >Login</h3>
            <div class="row mt-6">
                <div class="col-sm">
                    <div class="row">
                        <input type="text" class="form-control" placeholder="Email/Mobile Number"/>
                    </div>
                    <div class="row mt-2">
                        <input type="password" class="form-control" placeholder="Password"/>
                    </div>
                    <div class="row mt-2">
                        <button type='button' className="btn btn-success" style={btnWidth}>Sign In</button>
                    </div>
                </div>
                <div class="col-1">
                <h3 style={middleOr}></h3>
                </div>
                <div class="col-sm">
                    <div class="row">
                    <button class="loginBtn loginBtn--google">Login with Google</button>
                    </div>
                    <div class="row text-center">
                    <h4 class="text-center orBtn">Or</h4>
                    </div>
                    <div class="row">
                    <button class="loginBtn loginBtn--linkedin">Login with Linkedin</button>
                    </div>
                </div>
            </div>
            <div class="row mt-2">
            </div>
            <div class="row mt-2">
                <button type='button' className="btn btn-outline-success" style={btnLeft}>Sign Up</button>
            </div>
        </div>
      );
    }
  }
  
  export default Login;