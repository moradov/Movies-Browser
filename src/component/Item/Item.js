import React from "react";
const Item = props => {
  return (
    <div className='company-list'>
      <div className='row'>
        <div className='col-md-2 col-sm-2'>
          <div
            className='company-logo'
            style={{ backgroundColor: props.backGround }}
          >
            <span className='letter'>
              {props.item.company.display_name
                .replace(/(<([^>]+)>)/gi, "")
                .charAt(0)}{" "}
            </span>
          </div>
        </div>
        <div className='col-md-10 col-sm-10'>
          <div className='company-content'>
            <h3>
              {props.item.title.replace(/(<([^>]+)>)/gi, "")}{" "}
              <span class={props.item.contract_time}>
                {props.item.contract_time}{" "}
              </span>
            </h3>
            <p>
              <span className='company-name'>
                <i className='fa fa-briefcase'></i>
                {props.item.company.display_name}
              </span>
              <span className='company-location'>
                <i className='fa fa-map-marker'></i> {props.item.location.area}
              </span>
              <span className='package'>
                <i className='fa fa-money'></i>
                {props.item.salary_max + "$ , " + props.item.salary_max + "$"}
              </span>
            </p>
            <p className='job-par'>
              {props.item.description.replace(/(<([^>]+)>)/gi, "")}
            </p>
          </div>
        </div>
        <div className='col-md-12 col-sm-12' style={{ textAlign: "center" }}>
          <button className='aply-btn'>
            <a className='tag' target='_blank' href={props.item.redirect_url}>
              Aply
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
