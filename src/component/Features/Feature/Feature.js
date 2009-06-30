import React from "react";
const Feature = props => {
  return (
    <div className='col-md-4 col-sm-4'>
      <div className='features-content'>
        <span className='box1'>
          <i className={props.icon}></i>
        </span>
        <h3>{props.name} </h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Feature;
