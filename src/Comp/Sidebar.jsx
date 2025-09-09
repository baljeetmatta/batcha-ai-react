// const Sidebar=(props)=>{

import { useContext } from "react";
import { UserContext } from "./UserContext";

// return (
//     <>
//     <div>Sidebar page</div>
//     <div>
//         {props.user.name} 

//     </div>
//     </>
// )
// }
// export default Sidebar;

const Sidebar=()=>{

       const data= useContext(UserContext);

return (
    <>
    <div>Sidebar page</div>
    <div>
        {data.name} 

    </div>
    </>
)
}
export default Sidebar;