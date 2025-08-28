import { useLocation } from "react-router-dom";

const Contact=()=>{
   const location= useLocation();
    return (
        <div>Welcome to Contact us {location.state.result}</div>
    )
}
export default Contact;
