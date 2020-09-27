import React, { Fragment, useState } from "react";

function AddClient(props) {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [zone, setZone]= useState("");

  function handleFullNameChange(event) {
    setFullName(event.target.value);
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
  function handleZoneChange(event) {
    setZone(event.target.value);
  }

  // function handleZoneChange(event) {
  //   setZone(event.target.value);
  // }

  function handleAddClientClick(e) {
    e.preventDefault();
    props.addClient(full_name, email, phone, address,postcode,zone);
    setFullName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setPostcode("");
    setZone("");
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card p4">
              <div className="card-body">
                <h3 className="text-center">Register new client</h3>
                <hr />
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
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
                        type="text"
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
                        type="email"
                        className="form-control"
                        placeholder="Zone"
                        onChange={handleZoneChange}
                        value={zone}
                      />
                    </div>
                  </div>
                </div>
                <br></br>

                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-outline-danger btn-block"
                      onClick={handleAddClientClick}
                    />
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

export default AddClient;
