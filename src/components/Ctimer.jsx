import { useEffect, useState } from "react";

const Ctimer=()=>{
    const [count,setCount]=useState(0);


    const changeHandler=()=>{
        setCount(count+1);
        console.log("called");


    }
    //console.log("called");
    //setTimeout(changeHandler,800);
    useEffect(()=>{
        

    //  let id=   setInterval(changeHandler,800);

    //     return ()=>clearInterval(id)

        //for each render
    },[count])//only once


    return (
        <>
        Count :{count}
        <button onClick={changeHandler}>Change</button>
        </>
    )

}
export default Ctimer;