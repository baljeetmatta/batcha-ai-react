import { Link, NavLink } from "react-router-dom"

const Navbar=()=>{
    return (
        <div className="flex-class">
            {/* <div><a href="/">Home</a></div>
             <div><a href="/about">About</a></div>
              <div><a href="/contact">Contact</a></div> */}
              <div><NavLink to="/">Home</NavLink> </div>
                <div><NavLink to="/about">About</NavLink> </div>
                  <div><NavLink to="/contact">Contact</NavLink> </div>
        </div>
    )
}
export default Navbar