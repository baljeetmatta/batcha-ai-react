import { Outlet } from "react-router-dom";

const Parent=()=>{
    return (
        <div>Parent Componet - Child 
                <div>
                <Outlet/>
</div>

        </div>
    )
}
export default Parent;
