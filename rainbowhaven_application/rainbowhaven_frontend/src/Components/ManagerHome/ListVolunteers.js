import React from "react";

function ListVolunteers(props) {
  function handleDeleteClick() {
    props.deleteVolunteer(props.volunteer_Id);
  }

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="Volunteer__card card text-center m-2">
        <div className="card-body">
          <h4>Name: {props.full_name}</h4>
          <h4>Email: {props.email}</h4>
          <h4>Phone: {props.phone}</h4>
          <h4>Address: {props.address}</h4>
          <h4>Postcode: {props.postcode}</h4>
          <h4>Password: {props.password}</h4>
          <h4>Zone: {props.zone}</h4>
        </div>
        <div className="card-footer text-muted bg-light">
          <button
            className="btn btn-sm Item__button"
            type="button"
            onClick={handleDeleteClick}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListVolunteers;
