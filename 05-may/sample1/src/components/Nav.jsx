import '../Styles/Home.css';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

export const Nav = () =>
{
    
    const [live_time,setLive_time] = useState("")

    let now = moment().format("MMM Do YY");
    let ltime = moment().format('LTS'); 

        useEffect(()=>{
            let livetimeInterval = setInterval(() => {
                    setLive_time(`Current Date and Time : ${now}, ${ltime}`)
                }, 1000)
                return ()=> {
                    clearInterval(livetimeInterval);
                  };
            });

        return(
        <>            
            <div className="Nav">            
                <h3>{live_time}</h3>
            </div>               

        </>)
}