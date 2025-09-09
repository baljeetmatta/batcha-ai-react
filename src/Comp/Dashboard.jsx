// import Profile from "./Profile";

// const Dashboard=(props)=>{

// return (
//     <>
//     <div>Dashboard page</div>
//     <div>
//         {props.user.name} 
//         <Profile user={props.user}/>

//     </div>
//     </>
// )
// }
// export default Dashboard;

import { useContext } from "react";
import Profile from "./Profile";
import { UserContext } from "./UserContext";

const Dashboard=()=>{
    const data= useContext(UserContext);


return (
    <>
    <div>Dashboard page</div>
    <div>
        
       Dashboard {data.name}

    </div>
    <Profile/>
    </>
)
}
export default Dashboard;
