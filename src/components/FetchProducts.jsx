import { useEffect, useState } from "react";

const FetchProducts=()=>{

    //let products=[];//Array from json using fetch
    const [products,setProducts]=useState([]);

    useEffect(()=>{

        fetch("./products.json")
        .then((response)=>{
            return response.json();
        }).then((response)=>{
           // products=response;
           setProducts(response);//async
            console.log(products);//[]


        })


    },[])//only once


    return (
        <>
            <table>
                <thead>
                    <tr><th>Id</th><th>Name</th><th>Price</th></tr>
                </thead>
                <tbody>
                {
                        products.map((item)=>{
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                </tr>
                            )
                        })

                }

                </tbody>
            </table>
        </>
    )

}
export default FetchProducts;
