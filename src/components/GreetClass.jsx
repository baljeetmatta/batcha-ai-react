//1. class extends Component

import { Component } from "react";

//2. render-> override return jsx

//class variable -props
class GreetClass extends Component
{
    render=()=>{
        return (
            <div>Greeting {this.props.name}</div>
        )
    }
}
export default GreetClass;
