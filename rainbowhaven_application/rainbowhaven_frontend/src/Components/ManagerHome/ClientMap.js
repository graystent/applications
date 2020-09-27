import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";

function Map() {
  //   Geocode.setApiKey("");
  //   // set response language. Defaults to english.
  // Geocode.setLanguage("en");
  // // Get latidude & longitude from address.
  // Geocode.fromAddress("33 cambridge street").then(
  //   response => {
  //     const { lat, lng } = response.results[0].geometry.location;
  //     console.log(lat, lng);
  //   },
  //   error => {
  //     console.error(error);
  //   }
  // );

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 53.483959, lng: -2.244644 }}
    >
      <Marker
        icon={{ url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" }}
        position={{ lat: 53.45395, lng: -2.29939}}
        label={{
          fontSize: "15px",
          text: "Maryia",
          color: "white",
          fontWeight: "bold",
        }}
      />
      <Marker
        icon={{ url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" }}
        position={{ lat: 53.45719, lng: -2.16283 }}
        label={{
          fontSize: "15px",
          text: "Sam",
          color: "white",
          fontWeight: "bold",
        }}
      />

      <Marker
        icon={{ url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
        position={{ lat: 53.44167, lng:-2.27612 }}
        label={{
          fontSize: "15px",
          text: "John",
          color: "white",
          fontWeight: "bold",
        }}
      />
      <Marker
        icon={{ url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
        position={{ lat:53.46771, lng: -2.17517 }}
        label={{
          fontSize: "15px",
          text: "Hannah",
          color: "white",
          fontWeight: "bold",
        }}
      />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function ClientMap() {
  return (
    <div>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `150%` }} />}
        containerElement={<div style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `90%` }} />}
      />
    </div>
  );
}

export default ClientMap;
