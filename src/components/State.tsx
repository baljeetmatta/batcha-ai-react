// import { useState } from "react";

// const State=()=>{
// //   let data= useState(10);
   
//   // console.log(data[1](7));
// //DESTRUCTING
// let [count,setCount]=useState(0);
// // let obj={name:"Test",age:20};
// // let {age,name}=obj;


//     let counter=20;
//     const changeHandler=()=>{
//         counter++;
//         console.log(counter);

//     }
//     return (
//         <div>
//             Counter:{counter}
//             <button onClick={changeHandler}>Change</button>
//         </div>
//     )

// }
// export default State;
import { useState } from "react";
const State=()=>{
    const [count,setCount]=useState(0);
    const [loading,setLoading]=useState(false);

    const changeHandler=()=>{
        setLoading(true);
        //count++;
        //setCount(count+1);//async

        //console.log(count);
        setTimeout(()=>{
            setCount(count+1);
            setLoading(false);
            


        },3000)

    }
    return (
        <div>
             Counter:{count}
             <button disabled={loading} onClick={changeHandler}>Change {count}</button>
             {count}
         </div>
    )
}
export default State;