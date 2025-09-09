
// // // import './App.css'
// // // import Button from './components/Button'
// // // import ButtonClass from './components/ButtonClass';
// // // import {Greet} from './components/Greet'
// // // import GreetClass from './components/GreetClass';
// // // import State from './components/State';
// // // import StateClass from './components/StateClass';
// // // function App() {

import { Route, Routes } from "react-router-dom";
import ClassTimer from "./components/ClassTimer";
import Ctimer from "./components/Ctimer";
import FetchProducts from "./components/FetchProducts";
import Login from "./components/Login";
import Posts from "./components/Posts";
import Users from "./components/Requests";
import UserDashboard from "./Comp/UserDashboard";
import { UserContext } from "./Comp/UserContext";
import { useState } from "react";
import HomePage from "./HomePage";
import Parent from "./Parent";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// // import { Routes, Route } from "react-router-dom";
// // import Home from "./components/pages/Home";


// // //   const clientHandler=()=>{
// // //     alert("Button 1 called");
// // //   }
// // //   const clientHandler1=()=>{
// // //     alert("button 2 called");

// // //   }
// // //   return (
// // //     <>
// // //       Hello to Vite
// // //       {/* <Greet name="Code" age={10}/>
// // //         <Greet name="Chitkara"/> */}

// // //         {/* <Button value="Send" click={clientHandler}/>
// // //          <Button value="Login" click={clientHandler1}/> */}

// // //           {/* <GreetClass name="Code"/>
// // // <ButtonClass value="Send" click={clientHandler}/> */}

// // // {/* <State/> */}
// // // {/* <StateClass/> */}


// // //     </>
// // //   )
// // // }

// // // export default App
// // import "./index.css";
// // import About from "./components/pages/About";
// // import Contact from "./components/pages/Contact";
// // import Navbar from "./components/pages/Navbar";
// // import Parent from "./components/Parent";
// // import { useNavigate } from "react-router-dom";
// // import Details from "./components/Details";
// // const App = () => {
// //    const navigate= useNavigate();


// //   const clickHandler=()=>{
// //     let result="Code";
// //    // navigate("/details/"+result);
// //     //navigate(`/details/${result}`)
// //     navigate("/contact",{state:{result:result}})


// //   }
// //   return (
// //     <>
// //     <button onClick={clickHandler}>Contact </button>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/demo" element={<div>Demo path</div>} />
// //         <Route path="/details/:data" element={<Details/>}/>
// //         {/* <Route path="/products/electronics" element={<div>Electronics page</div>}/>
// //           <Route path="/products/mobiles" element={<div>Mobiles page</div>}/>
// //           <Route path="/products/fashion" element={<div>Fashion page</div>}/>
// //            */}
// //         <Route path="/products/" element={<Parent/>}>
// //           <Route path="electronics" element={<div>Electronics page</div>} />
// //           <Route path="mobiles" element={<div>Mobiles page</div>} />
// //           <Route path="fashion" element={<div>Fashion page</div>} />
// //         </Route>



// //       </Routes>


// //     </>
// //   )


// // }
// // export default App;
// import Home from "./components/pages/Home";
// import About from "./components/pages/About"
// import products from "./components/products.json"

// const routes=createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>
//   },
//   {
//     path:"/about",
//     element:<About/>,
//     loader:testFunction
//   }
// ])
// function testFunction(){
//   //return "Hi";
//   return products;


// }

// const App=()=>{



//   return (
//     <>

//     Application Page
//     <RouterProvider router={routes}/>

    
//     </>
//   )
// }
// export default App;
const App=()=>{
      
  const [name,setName]=useState("");


  return (
    <>
     <UserContext.Provider value={{name,setName}}>
    <Routes>
      {/* <Route path="/" element={<UserDashboard/>}/> */}
     
      <Route path="/login" element={<Login/>}/>

      <Route path="/" element={<Parent/>}>

      <Route path="dashboard" element={<HomePage/>}/>
      </Route>

    </Routes>
   
   </UserContext.Provider>
    </>
  )

}
export default App;