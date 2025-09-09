import { useContext } from "react"
import { UserContext } from "./Comp/UserContext"

const HomePage=()=>{

    const {name,setName}=useContext(UserContext);

    return (
        <>
            Welcome  to {name}
        
        </>
    )
}

export default HomePage