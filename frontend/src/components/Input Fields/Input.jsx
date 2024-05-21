import React from "react";
import { useId } from "react";

const Input = ({ childen, label, type = "text", className = "", ...props },ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="text-xl font-medium text-slate-600" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={`py-3 px-3 rounded-xl border-custom-red ${className}`}
        type={type}
        id={id}
        {...props}
      />
    </div>
  );
};

export default React.forwardRef(Input);
