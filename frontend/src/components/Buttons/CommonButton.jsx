import React from 'react'

const CommonButton = ({children,
    type="button",
    className="",
    bgColor = "",
    textColor = "",
    ...props
}) => {
  return <button className={`${className} ${bgColor} ${textColor}`}
  {...props} >
    {children}
  </button>
}

export default CommonButton