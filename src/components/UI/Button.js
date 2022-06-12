import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.ofClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
