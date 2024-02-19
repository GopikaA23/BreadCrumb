import "./App.css";
import React, { useState } from "react";
import BreadCrumb from "./BreadCrumb";
import _ from "lodash";
import "./BreadCrumb.css";

function App() {
  const values = [
    "Home",
    "Registration",
    "Login",
    "Personal Details",
    "Work Details",
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    console.log(`index : ${index}`);
    setActiveIndex(index);
  };
  const hideNextOptions = activeIndex !== null ? "hide-next-options" : "";

  return (
    <BreadCrumb
      values={values}
      onClick={handleClick}
      hideNextOptions={hideNextOptions}
      activeIndex={activeIndex}
    />
  );
}

export default App;
