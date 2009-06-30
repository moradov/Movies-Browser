import React from "react";

const stat = props => {
  return (
    <div class='col-md-3 col-sm-3'>
      <div class='counter-text'>
        <span class='box1 test'>
          <i className={props.icon}></i>
        </span>
        <h3>{props.number} </h3>
        <p>{props.name} </p>
      </div>
    </div>
  );
};

export default stat;
