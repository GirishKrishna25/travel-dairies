import React from "react";
// import testimg from "../icons/testimg.png";
import location_icon from "../icons/location.png";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={props.entry.imageUrl} alt="test" />
        </div>
        <div className="card-content">
          <div>
            <div>
              <img
                className="card-content--icon"
                src={location_icon}
                alt="location icon"
              />
              <span className="card-content--location">
                {props.entry.location}
              </span>
              <a
                className="card-content--map"
                target="_blank"
                rel="noreferrer"
                href={props.entry.googleMapsUrl}
              >
                View on Google Maps
              </a>
            </div>
            <h3 className="card-content--title">{props.entry.title}</h3>
          </div>
          <div>
            <p className="card-content--text">{props.entry.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
