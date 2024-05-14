import React from "react";
import "./ReturnToHome.css";

const ReturnToHome = ({backFunction}) => {
  return (
    <div>
      <div ontouchstart="" onClick={backFunction}>
        <div class="button">
          <a href="#"> {'< Back'} </a>
        </div>
      </div>
    </div>
  );
};

export default ReturnToHome;