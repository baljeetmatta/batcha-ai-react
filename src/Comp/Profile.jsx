// const Profile=(props)=>{
//     return (
//         <>
//         <div>Profile:{props.user.name}</div>
//         </>
//     )

import { useContext } from "react";
import { UserContext } from "./UserContext";


// }
// export default Profile;

const Profile=()=>{
    const data=useContext(UserContext);

    return (
        <>
        <div>Profile:{data.name}</div>
        </>
    )


}
export default Profile;
