import React from "react";
import "./Name.css";

function Name(props) {
  const { text13, under, className } = props;

  return (
    <div className={`name-3 ${className || ""}`}>
      <div className="overlap-group1-12">
        <div className="text-13 manrope-normal-stack-16px">{text13}</div>
        <div className="under russoone-normal-black-46px">{under}</div>
      </div>
      <div className="seta-2"></div>
    </div>
  );
}

export default Name;
