import { Component } from "react";

class ButtonClass extends Component
{
    i=1;
    clickHandler=()=>{
        alert("Button Clicked");


    }
    render(){
        return (
            <button onClick={this.props.click} >{this.props.value} {this.i}</button>
        )
    }
}
export default ButtonClass;
