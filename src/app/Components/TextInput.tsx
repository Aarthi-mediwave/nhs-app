// components/NHSButtonExample.tsx
import React from "react";
import "../assets/sass/_admin.scss";

const NHSTextExample: React.FC = () => {
  return (
    <div className="nhsuk-form-group">
      <label className="nhsuk-label" htmlFor="example">
        What is your name?
      </label>
      <input className="nhsuk-input" id="example" name="example" type="text" />
    </div>
  );
};

export default NHSTextExample;
