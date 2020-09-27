import React, { useState, useEffect } from "react";
import axios from "axios";

import VolunteerListClients from "./VolunteerListClients";
import VolunteerHeader from "./VolunteerHeader";
import "./VolunteerHome.css";

function VolunteerHome() {
  const [items, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("https://qrk4yg29wg.execute-api.eu-west-2.amazonaws.com/dev/items")
      .then(
        //request is successful
        (response) => {
          console.log(response.data);
          const clients = response.data.items;
          setClients(clients);
        }
      )
      .catch(
        // an error
        (error) => {
          console.log("Error getting items", error);
        }
      )
      .finally(() => console.log("I am done"));
  }, []);

  const activeTasks = items && items.filter((task) => !task.completed);

  function completeDelivery(client_id) {
    const updatedClients = items.map((task) => {
      if (task.client_id === client_id) {
        task.completed = true;
      }
      return task;
    });
    const updatedClient = items.find((task) => task.client_id === client_id);

    axios
      .put(
        `https://qrk4yg29wg.execute-api.eu-west-2.amazonaws.com/dev/items/${client_id}`,
        updatedClient
      )
      .then((response) => {
        setClients(updatedClients);
      })
      .catch((error) => {
        console.log("Could not update the client", error);
      });
  }

  return (
    <div className="volonteer_home">
      <VolunteerHeader />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Existing clients</h3>
                <div className="row">
                  {activeTasks.map((item) => (
                    <VolunteerListClients
                      key={item.client_id}
                      id={item.client_id}
                      full_name={item.full_name}
                      email={item.email}
                      phone={item.phone}
                      address={item.address}
                      postcode={item.postcode}
                      zone={item.zone}
                      completeDelivery={completeDelivery}
                      createDate={item.date}
                    />
                  ))}
                  <div className="Item__border" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerHome;
