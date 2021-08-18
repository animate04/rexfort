import React from "react";
import "./Frame5.css";

function Frame5(props) {
  const { src } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-5 screen">
        <img className="home-service" src={src} />
      </div>
    </div>
  );
}

export default Frame5;
