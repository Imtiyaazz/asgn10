import React,{ useState } from "react";

export const Radius =()=>{
    const [inc,setInc]=useState(0)
    

    return(
        <div>
            <button onClick={()=>setInc(inc+50)}>Radius +</button>
            <button onClick={()=>setInc(inc-50)}>Radius -</button>
           
            <div style={{borderRadius:inc}} className="res"></div>
            <div style={{height:inc}} className="res"></div>
        </div>
    )
}