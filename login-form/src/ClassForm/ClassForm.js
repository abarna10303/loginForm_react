import React, { Component } from "react";
import "../functionForm/functionForm.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
class ClassForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      icon: false,
    };
  }
  handlingSubmit = (e) => {
    e.preventDefault();
    if (this.state.password === "admin") {
      alert("Welcome " + this.state.email);
      this.setState({email:"",password:""});
    } else {
      alert("Password Is Not Correct");
      this.setState({email:"",password:""})
    }
  };
  render() {
    return (
      <section className="formSection">
        <form className="form">
          <h1>Sign In</h1>
          <div className="form-control">
            <label>Email Address</label>
            <input
              type="text"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="form-control">
            <label>Password</label>
            {this.state.icon ? (
              <input
                type="text"
                placeholder="Enter Password"
                value={this.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            ) : (
              <input
                type="password"
                placeholder="Enter Password"
                value={this.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            )}
             <div className="icon">
                {this.state.icon?<RemoveRedEyeIcon onClick={()=>this.setState({icon:!this.state.icon})} />:
                <VisibilityOffIcon onClick={()=>this.setState({icon:!this.state.icon})}/>}
            </div>
          </div>
          <div className="form-selectcontrol">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <div className="form-control">
            <button type="submit" onClick={this.handlingSubmit}>
              Submit
            </button>
            <a href="/gotoMetirialUI">Forget Password?</a>
            {this.state.email}
          </div>
        </form>
      </section>
    );
  }
}
export default ClassForm;
