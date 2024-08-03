import {useEffect} from "react"
import {useMutation, useQuery} from "@tanstack/react-query"

export const useAuth = () => {
   useEffect(() => {
     const getUserAuthToken = localStorage.getItem("a_tk");
     
     return () => {
       
     }
   }, [])
   
}
