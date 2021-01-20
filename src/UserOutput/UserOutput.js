import React from "react";

import "./UserOutput.css";

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p>My Name : {props.userName}</p>
      <p>My Age is 34</p>
    </div>
  );
};

export default UserOutput;
