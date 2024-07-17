import {useEffect} from "react"

export const useAuth = (token) => {
  useEffect(() => {
    const getToken = ()=>{
        return localStorage.getItem("a_tk");
    }

    const isTokenAvaiable = ()=>{
        if(!token || token === undefined){
           const authToken = getToken();
           return authToken
        }
    }
    isTokenAvaiable();
  }, [])
  
}
