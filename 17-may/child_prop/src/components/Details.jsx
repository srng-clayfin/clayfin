import React from "react"

export const Details = (p) =>
{

    console.log(p.value)

    return(
        <>
            <h1>{p.value.title}</h1>
            {/* <div className="details">
                <div>
                    <img src={p.image} />
                </div>
                <h1>{p.title}</h1>
            </div>         */}
        </>
    )
}