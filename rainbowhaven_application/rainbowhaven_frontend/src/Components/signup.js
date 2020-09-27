import React, { useState } from "react";
import "./signup.css";
import { useHistory } from "react-router-dom";

// export default class SignUp extends Component {
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [password, setPassword] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }
  function handleAddressChange(event) {
    setAddress(event.target.value);
  }
  function handlePostcodeChange(event) {
    setPostcode(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const history = useHistory();
  function handleSubmitClick(event) {
    event.preventDefault();
    if (name === "") {
      alert("Forgot the name");
    } else if (email === "") {
      alert("Forgot the email");
    } else if (phone === "") {
      alert("Forgot the phone");
    } else if (address === "") {
      alert("Forgot the address");
    } else if (postcode === "") {
      alert("Forgot the postcode");
    } else if (password === "") {
      alert("Forgot the password");
    } else {
      alert("Thank you for sign up");

      let path = "/sign-in";
      history.push(path);
    }
  }

  return (
    <layer className="registration-form">
      <form>
        <h3>Register To Volunteer</h3>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email address "
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="phone"
            className="form-control"
            placeholder="Phone "
            onChange={handlePhoneChange}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            onChange={handleAddressChange}
          />
        </div>
        <div className="form-group">
          <label>Post code</label>
          <input
            type="text"
            className="form-control"
            placeholder="Post code"
            onChange={handlePostcodeChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Create password"
            onChange={handlePasswordChange}
          />
        </div>
        <div class="text-center">
          <a
            href="/sign-in"
            type="submit"
            className="btn btn-block btn-login"
            onClick={handleSubmitClick}
          >
            Sign Up
          </a>
        </div>
        <p className="text-right mt-2">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    </layer>
  );
}
export default SignUp;
