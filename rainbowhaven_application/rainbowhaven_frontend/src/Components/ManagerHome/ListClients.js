import React from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";

function ListClients(props) {
  function handleDeleteClick() {
    console.log("The delete button has been clicked!");
    props.deleteClient(props.id);
  }
  function handleCompleteClick() {
    console.log("The complete button has been clicked!");
    props.completeDelivery(props.id);
  }
  const history = useHistory();

  function handleDeliverClick(event) {
    event.preventDefault();
    let path = "/pickUp-Volunteer";
    history.push(path);
  }
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="Item__card card text-center m-2">
        <div className="card-body">
          <h4
            className={`${
              props.completed ? "text-muted complete" : "Item__card-title"
            } card-title`}
          >
            Name: {props.full_name}
          </h4>
          <h4
            className={`${
              props.completed ? "text-muted complete" : "Item__card-title"
            } card-title`}
          >
            Email: {props.email}
          </h4>
          <h4
            className={`${
              props.completed ? "text-muted complete" : "Item__card-title"
            } card-title`}
          >
            Phone: {props.phone}
          </h4>
          <h4
            className={`${
              props.completed ? "text-muted complete" : "Item__card-title"
            } card-title`}
          >
            Address: {props.address}
          </h4>
          <h4
            className={`${
              props.completed ? "text-muted complete" : "Item__card-title"
            } card-title`}
          >
            Postcode: {props.postcode}
          </h4>
          <h4
            className={`${
              props.completed ? "text-muted complete" : "Item__card-title"
            } card-title`}
          >
            Zone: {props.zone}
          </h4>
        </div>
        <div className="card-footer text-muted bg-light">
          {props.completed ? (
            <h4 className="text-muted complete">Status: Delivered</h4>
          ) : (
            <div>
              <h4 className="Item__card-title">Status: Awaiting delivery</h4>
              <small>Created {moment(props.createDate).calendar()}</small>
            </div>
          )}
        </div>

        <div className="card-footer text-muted bg-light">
          {!props.completed && (
            <button
              className="btn btn-sm mr-3 Item__button"
              type="button"
              onClick={handleCompleteClick}
            >
              <i className="fa fa-thumbs-up"></i>
            </button>
          )}
          {!props.completed && (
            <button
              className="btn btn-sm mr-3 Item__button"
              type="button"
              onClick={handleDeliverClick}
            >
              <i className="fa fa-truck"></i>
            </button>
          )}

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

export default ListClients;
