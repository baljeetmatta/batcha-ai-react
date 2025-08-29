import { useEffect, useState } from "react";

const Users=()=>{

    //let products=[];//Array from json using fetch
    const [users,setUsers]=useState([]);
    const [isLoading,setLoading]=useState(false);

const [page,setPage]=useState(1);
    useEffect(()=>{
        setLoading(true);

        fetch(`https://reqres.in/api/users?page=${page}`,{
            headers:{
                 'x-api-key': 'reqres-free-v1'
            }
        })
        .then((response)=>{
            return response.json();
        }).then((response)=>{
           // products=response;
           setUsers(response.data);//async
           setLoading(false);
           // console.log(products);//[]


        })


    },[page])//only once

    if(isLoading)
    {
        return (
            <>Loading... </>
        )
    }

    return (
        <>
        <button onClick={()=>setPage(page+1)}>Next</button>
            <table>
                <thead>
                    <tr><th>Email</th><th>Fist Name</th><th>Last Name</th></tr>
                </thead>
                <tbody>
                {
                        users.map((item)=>{
                            return (
                                <tr>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                </tr>
                            )
                        })

                }

                </tbody>
            </table>
        </>
    )

}
export default Users;
