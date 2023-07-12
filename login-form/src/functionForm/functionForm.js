import React from "react";
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import "./functionForm.css";
const FunctionForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [icon, setIcon] = useState(false);
  const handlingSubmit = (e) => {
    e.preventDefault();
    if (password === "admin") {
      alert("Welcome   " + email);
      setEmail("");
      setPassword("");
    } else {
      alert("Password Is Not Correct");
      setEmail("");
      setPassword("");
    }
  };
  const handlingIcon = () => {
    setIcon(icon=>!icon)
  };
  return (
    <section className="formSection">
      <form className="form">
        <h1>Sign In</h1>
        <div className="form-control">
          <label>Email Address</label>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          {icon ? (
            <input
              type="text"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          ) : (
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}
          <div className="icon">
            {icon?<RemoveRedEyeIcon onClick={handlingIcon} />:
            <VisibilityOffIcon onClick={handlingIcon}/>}
          </div>
        </div>
        <div className="form-selectcontrol">
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <div className="form-control">
          <button type="submit" onClick={handlingSubmit}>
            Submit
          </button>
          <a href="/gotoMetirialUI">Forget Password?</a>
        </div>
      </form>
    </section>
  );
};

export default FunctionForm;
