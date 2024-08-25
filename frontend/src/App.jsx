import {useEffect, useState } from "react";
import Loading from "./components/Loading.jsx";
import AdminApp from "./apps/AdminApp.jsx";
import UserApp from "./apps/UserApp.jsx";
import DoctorApp from "./apps/DoctorApp.jsx";






//EVERY ONE USE APP FOR TESTING YOUR COMPONENT
function App() {
  const [getport, setPort] = useState();

  useEffect(() => {
    const getPort = () =>{
      const port = window.location.port;
      return port
    }
    const subPort = getPort();
    setPort(subPort);
    
  }, []);



  if (getport == import.meta.env.VITE_ADMIN_APP_PORT) {
    return <AdminApp />;
  }
  else if (getport == import.meta.env.VITE_DOCTOR_APP_PORT) {
    return <DoctorApp />;
  }
  else if(getport == import.meta.env.VITE_USERS_APP_PORT){
    return <UserApp />;
  }
  else {
    return <Loading/>; 
  }
}
  
export default App
