import { useEffect, useState } from "react";

const Posts=()=>{

    //let products=[];//Array from json using fetch
    const [posts,setPosts]=useState([]);

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            return response.json();
        }).then((response)=>{
           // products=response;
           setPosts(response);//async
            console.log(products);//[]


        })


    },[])//only once


    return (
        <>
            <table>
                <thead>
                    <tr><th>Id</th><th>Title</th><th>Body</th></tr>
                </thead>
                <tbody>
                {
                        posts.map((item)=>{
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            )
                        })

                }

                </tbody>
            </table>
        </>
    )

}
export default Posts;
