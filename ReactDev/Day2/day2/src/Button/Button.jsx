import React from "react";
import {App} from "../App";

const Button = (props) => {
  const { buttonText, backGroundColor,click } = props;
  return (
    <button
      style={{
        backgroundColor: backGroundColor,
      }}
      onClick={click}
    >
      {buttonText}
    </button>
  );
};


