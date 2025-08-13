import { Component } from "react";
//state->object,setState
// class StateClass extends Component
// {
//     counter=1;
//     changeHandler=()=>{
//         this.counter++;
//         console.log(this.counter);

//     }
//     render=()=>{
//         return (
//             <div>
//                 Counter:{this.counter}
//                 <button onClick={this.changeHandler}>Change</button>

//             </div>
//         )
//     }
// }
// export default StateClass;


class StateClass extends Component
{
   state={
    counter:1,data:20
   }
    changeHandler=()=>{
       // this.state.counter++;
       this.setState({counter:this.state.counter+1})
        console.log(this.state.counter);

    }
    render=()=>{
        return (
            <div>
                Counter:{this.state.counter}
                <button onClick={this.changeHandler}>Change</button>

            </div>
        )
    }
}
export default StateClass;

