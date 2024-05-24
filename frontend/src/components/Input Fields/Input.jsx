import React from "react";
import { useId } from "react";

const Input = ({ childen, label, type = "text", className = "", ...props },ref) => {
  const id = useId();
  return (
    <div className="">
      {label && (
        <label className="text-sm text-slate-600" htmlFor={id}>
          {label}
        </label>
      )}
      <br/>
      <input
        className={`py-3 px-3 rounded-xl border-custom-red ${className}`}
        type={type}
        id={id}
        {...props}
        ref={ref}
      />
    </div>
  );
};

export default React.forwardRef(Input);
