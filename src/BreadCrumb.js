import React from "react";
import _ from "lodash";

const BreadCrumb = ({ values, onClick, hideNextOptions, activeIndex }) => {
  const size = _.size(values) - 1;

  return (
    <div className={hideNextOptions}>
      {_.map(values, (value, index) => (
        <span
          key={index}
          onClick={() => onClick(index)}
          className={
            activeIndex === index && activeIndex !== size ? "link-options" : ""
          }
        >
          {index === size ? value : value.concat("/")}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
