import React, { Fragment, useState } from "react";

function AddVolunteer(props) {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [zone, setZone] = useState("");

  function handleFullNameChange(event) {
    setFullName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleAddressChange(event) {
    setAddress(event.target.value);
  }
  function handlePostcodeChange(event) {
    setPostcode(event.target.value);
  }
  function handleZoneChange(event) {
    setZone(event.target.value);
  }

  // function handleZoneChange(event) {
  //   setZone(event.target.value);
  // }

  function handleAddVolunteerClick(event) {
    event.preventDefault();
    props.addVolunteer(
      full_name,
      email,
      phone,
      address,
      postcode,
      password,
      zone
    );
    setFullName("");
    setEmail("");
    setAddress("");
    setPassword("");
    setPostcode("");
    setZone("");
    setPhone("");
  }
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card p4">
              <div className="card-body">
                <h3 className="text-center">Register new volunteer</h3>
                <hr />
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        onChange={handleFullNameChange}
                        value={full_name}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={handleEmailChange}
                        value={email}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="phone"
                        className="form-control"
                        placeholder="Phone"
                        onChange={handlePhoneChange}
                        value={phone}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        onChange={handleAddressChange}
                        value={address}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Postcode"
                        onChange={handlePostcodeChange}
                        value={postcode}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        value={password}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zone"
                        onChange={handleZoneChange}
                        value={zone}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="mt-2" type="checkbox"></input>
                      <label className="ml-2">Send a Welcome Email</label>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Submit"
                        className="btn btn-outline-danger btn-block"
                        onClick={handleAddVolunteerClick}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AddVolunteer;
