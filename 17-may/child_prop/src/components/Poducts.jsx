import React, { useEffect, useState } from "react"
import '../App.css';
import { Details } from "./Details";


// http://srngjson.herokuapp.com/products

export const Products = () =>
{

    const [data , setData ] = useState([])
    const [pdetails , setPdetails ] = useState({})

    const fetchData = () =>
    {
        fetch('http://srngjson.herokuapp.com/products')
        .then((d) => d.json())
        .then((d) => setData(d))
        .catch((e) => console.log(e))
    }


    // console.log(data)


    useEffect(()=> {
        fetchData();
       
    },[]);

    return(
        <>
            <Details value={pdetails} />
            <div className="main">
                {data.map((p) =>
                
                    <div className='card'>
                        <img src={p.image} alt='' />
                        <h3>{p.title}</h3>
                        <p><strong>{"Rs  " + p.price}</strong></p>
                        <button onClick={() => setPdetails(p)}>
                            Show Details
                        </button>
                    </div>                    
                )}
            </div>
        </>
    )
}