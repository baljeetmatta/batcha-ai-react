const Button=(props)=>{

    const clickHandler=()=>{
        alert("clicked on button");

    }

    return (
        <div>
            <button onClick={props.click}>{props.value}</button>
        </div>
    )

}
export default Button;