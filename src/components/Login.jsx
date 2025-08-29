// import { useState } from "react";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// const Login=()=>{
//     const [username,setUsername]=useState("");
// const nameHandler=(e)=>{
//     setUsername(e.target.value);

// }
// const loginHandler=()=>{
//     console.log(username);

// }
//     return (
//         <>
//         <div>
//             <div><label>Username</label><div><input value={username} onChange={nameHandler} type="text"/>
//            </div></div>
//            <div><label>Password</label><div><input type="password"/>
//            </div></div>

//            <div><button onClick={loginHandler}>Login</button></div>

//         </div>
//         </>
//     )
// }
// export default Login;

const Login=()=>{
    const [errors,setErrors]=useState("")
    const [disable,setDisable]=useState(false);
    const navigate=useNavigate();
    const userRef=useRef();
    const passwordRef=useRef();


const loginHandler=()=>{
    setDisable(true);

   // console.log(username);
   //console.log(userRef.current.value);
   //console.log(passwordRef.current.value);
   fetch("./users.json")
   .then((response)=>{
    return response.json();
   }).then((response)=>{
    setDisable(false);
    
      const results=  response.filter((item)=>{
            if(item.username==userRef.current.value && item.password==passwordRef.current.value)
                return true;
        })
        if(results.length>0)
            navigate("/dashboard");
        else
        {
                setErrors("Invalid user/password");

        }
            
   }).catch(()=>{
setDisable(false);
    
   });
    
}
    return (
        <>
        <div>
            {errors}
            <div><label>Username</label><div><input ref={userRef}  type="text"/>
           </div></div>
           <div><label>Password</label><div><input ref={passwordRef} type="password"/>
           </div></div>

           <div><button disabled={disable} onClick={loginHandler}>Login</button></div>

        </div>
        </>
    )
}
export default Login;
