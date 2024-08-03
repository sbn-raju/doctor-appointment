import {useEffect, useState } from "react";
import Loading from "./components/Loading.jsx";
import AdminApp from "./apps/AdminApp.jsx";
import UserApp from "./apps/UserApp.jsx";
import DoctorApp from "./apps/DoctorApp.jsx";






//EVERY ONE USE APP FOR TESTING YOUR COMPONENT
function App() {
  const [componentToLoad, setComponentToLoad] = useState(null);

  useEffect(() => {
    const getSubDomain = () => {
      const link = window.location.hostname;
      const location = link.split('.');
      return location[0];
    };

    const subdomain = getSubDomain();
    setComponentToLoad(subdomain);
  }, []);



  if (componentToLoad === 'admin') {
    return <AdminApp />;
  }
  else if (componentToLoad === 'doctor') {
    return <DoctorApp />;
  }
  else if(componentToLoad === 'localhost'){
    return <UserApp />;
  }
  else {
    return <Loading/>; 
  }
}
  
export default App
