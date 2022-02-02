import React from "react";
import "./../style.css";

const TextInput = ({ type = "text", label, placeholder, value, onChange }) => (
  <div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

export default TextInput;