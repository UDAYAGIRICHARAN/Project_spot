import { useContext, useEffect, useState } from "react";

import { UserContext } from "../context";
import HomeRoute from "./HomeRouter";
import AuthRouter from "./AuthRouter";
export default function AppRoute() {

    const{user}=useContext(UserContext)
    const [isAuthenticated,setAuthenticated]=useState(false)
    useEffect(() => {
        if(user){
            setAuthenticated(true)
        }
        else{
            setAuthenticated(false)
        }
      }, [user]);
  return (
    <div className="w-screen h-screen fixed">
      {
        isAuthenticated ? (
          <HomeRoute />
        ) : (
          <AuthRouter />
        )
      
      }
    </div>
  );
}


