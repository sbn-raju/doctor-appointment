import React from 'react'

const CommonButton = ({children,
    type="button",
    className="",
    bgColor = "bg-green-500",
    textColor = "text-white",
    ...props
}) => {
  return <button className={`${className} ${bgColor} ${textColor}`}
  {...props} >
    {children}
  </button>
}

export default CommonButton