// import Dashboard from "./Dashboard";
// import Sidebar from "./Sidebar";

// const UserDashboard=()=>{
// const obj={
//     name:"Code",
//     years:10
// }
// return (
//     <>
//         <div>{obj.name}</div>
//         <Dashboard user={obj}/>
//         <Sidebar user={obj}/>

//     </>
// )

// }
// export default UserDashboard;

import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import { UserContext } from "./UserContext";

const UserDashboard=()=>{
const obj={
    name:"Code",
    years:10
}
return (
    <>
        <div>{obj.name}</div>
        <UserContext.Provider value={obj}>
        <Dashboard />
        <Sidebar/>
        </UserContext.Provider>
        
    </>
)

}
export default UserDashboard;
