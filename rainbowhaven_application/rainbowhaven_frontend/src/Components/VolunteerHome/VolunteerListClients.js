import React from "react";
import moment from "moment";

function ListClients(props) {
  function handleCompleteClick() {
    console.log("The complete button has been clicked!");
    props.completeDelivery(props.id);
  }
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="Item__card card text-center m-2">
        <div className="card-body">
          <h4 className="Item__card-title">Name: {props.full_name}</h4>
          <h4 className="Item__card-title">Email: {props.email}</h4>
          <h4 className="Item__card-title">Phone: {props.phone}</h4>
          <h4 className="Item__card-title">Address: {props.address}</h4>
          <h4 className="Item__card-title">Postcode: {props.postcode}</h4>
          <h4 className="Item__card-title">Zone: {props.zone}</h4>
        </div>
        <div className="card-footer text-muted bg-light">
          <h4 className="Item__card-title">Status: Awaiting delivery</h4>
          <small>Created {moment(props.createDate).calendar()}</small>
        </div>

        <div className="card-footer text-muted bg-light">
          <button
            className="btn btn-sm mr-3 Item__button"
            type="button"
            onClick={handleCompleteClick}
          >
            <i className="fa fa-thumbs-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListClients;
