import { Component } from "react"

export default class ClassTimer extends Component
{
    state={
        count:1
    }
    constructor(props){
        super(props);
      


    }
    componentDidMount(){
  setInterval(this.changeHandler,800);
    }
    changeHandler=()=>{
        this.setState({count:this.state.count+1});


    }
    render=()=>{
        return(
            <>
            Count:{this.state.count}
            <button onClick={this.changeHandler}>Change</button>
            </>
        )
    }
}