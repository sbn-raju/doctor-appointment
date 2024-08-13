import React from 'react'

const DoctorPrivateRoute = ({token, admin, children}) => {
    if (token == null || admin !== "DoctorAdmin") {
        return <Navigate to={"/"} />;
      }
    
      if (token && admin !== "DoctorAdmin") {
       return <Navigate to={"/unauthorized"} />;
      }
      
      return children ? children: <Outlet />
}

export default DoctorPrivateRoute