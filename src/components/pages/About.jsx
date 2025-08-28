import { useLoaderData } from "react-router-dom";
//for,forEach,filter,map
const About=()=>{
  const data=  useLoaderData();
    return (
        <div>Welcome to About us content 
            <ul>
            {
                    data.map((item)=>{
                        return <li key={item.id}>{item.name}</li>
                    })

            }
        </ul>


        </div>
    )
}
export default About;
