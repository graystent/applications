import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/login";
import SignUp from "./Components/signup";
import pickUpVolunteer from "./Components/ManagerHome/pickUpVolunteer";
import Home from "./Components/ManagerHome/Home";
import Volunteer from "./Components/VolunteerHome/VolunteerHome";
import VolunteerHome from "./Components/VolunteerHome/VolunteerHome";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Log in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/manager"}>
                    For Manager
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/volunteer"}>
                    For Volunteer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/pickUp-Volunteer"}>
                    pickUpVolunteer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        <div className="auth-wrapper">
          <div className="auth-inner">
            {/* <h5 className="text-center mb-2">
              What is the essence of life? To serve others and to do good.
            </h5> */}
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/Home" component={Home} />
              <Route path="/VolunteerHome" component={VolunteerHome} />
              <Route
                path="/pickUp-Volunteer"
                style={{ width: "1000px" }}
                component={pickUpVolunteer}
              />
            </Switch>
          </div>
        </div>
        <div className="auth-wrapper-homes">
          <Switch>
            <Route exact path="/manager" component={Home} />
            <Route exact path="/volunteer" component={Volunteer} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
