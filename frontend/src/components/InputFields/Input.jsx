import React from "react";

const Input = ({ inputType, classStyle, label, data, setData }) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      {inputType === "textarea" ? (
        <textarea name="" id="" className={classStyle} placeholder={data} onChange={(e) => setData(e.target.value)}></textarea>
      ) : (
        <input type="text" placeholder={data} onChange={(e) => setData(e.target.value)} />
      )}
    </>
  );
};

export default Input;
