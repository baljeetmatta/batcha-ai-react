import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./Comp/UserContext";

const Parent=()=>{
    const {name,setname}=useContext(UserContext);
    console.log(name);


    return (
        <>
         
        {name==""?<Navigate to="/login"/>:<Outlet/>}
        </>
    )
}
export default Parent;