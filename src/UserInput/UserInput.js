import React from "react";
import "./UserInput.css";

const UserInput = props => {
  const inputStyle = {
    border: "2px solid red"
  };

  return (
    <div>
      <input
        type="text"
        style={inputStyle}
        value={props.defatlutValue}
        onChange={props.userNameChangeHandler}
      />
    </div>
  );
};

export default UserInput;
