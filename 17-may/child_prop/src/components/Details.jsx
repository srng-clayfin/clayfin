import React from "react"

export const Details = (p) =>
{
    // console.log(p.value)
    return(
        <>
        {p.value.title !== undefined ? 
            <div className="details">
                <div>
                    <img src={p.value.image} />
                </div>
                <div>
                    <h3>{"Name : "+p.value.title}</h3>
                    <h3>{"Price : "+p.value.price}</h3>
                    <h3>{"Category : "+p.value.category}</h3>
                </div>                
            </div>        
            : ""}
        </>
    )
}