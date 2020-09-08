import React from "react";

const FormToggleButton = ({ toggleForm }) => {
  return (
    <button className="form-toggle-button" onClick={toggleForm}>
      <i className="far fa-comment fa-2x"></i>
    </button>
  );
};

export default FormToggleButton;
