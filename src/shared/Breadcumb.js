import React from "react";
import { Link } from "react-router-dom";
 
export default function Breadcrumb(props) {
  const { title } = props;
  const lastIndex = title.length - 1;
  return (
    <div className="breadcrumb d-flex">
      <i className={props.iconBreadcumb}></i>
      {title &&
        title.map((item, i) => {
          return (
            <div key={i}>
              <i className="ri-arrow-right-s-line"></i>
              {i === lastIndex ?
             
              <span className="m-0 p-0 title" style={{ color: "gray", pointerEvents: "none", }}>
                {item.label}
              </span>
             
              :
              <Link to={item.linkTo} className="m-0 p-0 title">
                {item.label}
              </Link>
              }
            </div>
          );
        })}
    </div>
  );
}