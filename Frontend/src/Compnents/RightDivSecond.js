import React from "react";
import "../myApp.css";

export default function RightDivSecond(props) {
  return (
    <div className="right-div-inner-second" style={{ backgroundImage: `url(${props.backgroundImage})`,color: props.color }}>
          <div className="topHeading">
            <h1>{props.heading}</h1>
            <p>{props.desc}</p>
          </div>
          <div className="bottom">
            <button className="button button-1">Talk with Noura</button>
            <button className="button button-2">Learn more!</button>
          </div>
        </div>
  );
}

