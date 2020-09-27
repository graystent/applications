import React from "react";

function ListPickUpVolunteer(props) {
  return (
    <div className="col">
      <div className="form-group">
        <ul className="list-group ">
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id={props.volunteer_Id}
              name="customRadio"
              className="custom-control-input"
            />
            <label className="custom-control-label " for={props.volunteer_Id}>
              {props.full_name}
            </label>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default ListPickUpVolunteer;
