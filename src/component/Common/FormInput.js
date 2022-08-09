import React from "react";
// FormInput Area
const FormInput = (props) => {
  let options = props.options || [];
  return (
    <>
      <div className="form-group">
        {props.label && <label htmlFor="namedInput">{props.label}</label>}
        {props.tag === "input" && (
          <input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            className={props.classes}
          />
        )}
        {props.tag === "textarea" && (
          <textarea
            name={props.name}
            cols="30"
            rows="7"
            placeholder={props.placeholder}
            className={props.classes}
            required
          />
        )}
        {props.tag === "password" && (
          <input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            className={props.classes}
          />
        )}
        {props.tag === "number" && (
          <input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            className={props.classes}
          />
        )}
        {props.tag === "button" && (
          <button className={`btn btn-theme`}>{props.val}</button>
        )}
        {props.tag === "select" && (
          <select className="form-control first_null" id="city">
            {options.map((data, index) => (
              <option key={index} value={data.value}>
                {data.text}
              </option>
            ))}
          </select>
        )}
      </div>
    </>
  );
};

export default FormInput;
