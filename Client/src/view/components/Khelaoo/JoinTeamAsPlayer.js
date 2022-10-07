import React from "react"
import { useState } from "react";
import { Navigate } from "react-router-dom";
// import axios from "axios"

export default function JoinTeamAsPlayer(){
    const FormDetails = [
        
        {label:"City", type:"text",placeholder:"Name", name:"City"},
        {label:"Contact", type:"text", placeholder:"Contact",name:"Contact"},
        {label:"Comment", type:"text",placeholder:"Comment", name:"Comment"},
        {label:"Role", type:"text",placeholder:"Role", name:"Role"},
    ]
    // const data1 = {City:"karachi"}
    const [data,setData] = useState({Contact:"",City:"",Comment:"",Role:""})
    const addFeedback = async (newFeedback) => {
        console.log(newFeedback)
        {console.log(":wdiuu")}

        const response = await fetch("http://localhost:5000/api/JoinTeamasPlayer/postJointeamAsPlayer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newFeedback),
        });
        const data = await response.json();
        console.log(data)
        
      };
      const onChangeHandler=(event)=>{
        console.log(event)
        const {name, value} = event.target
        setData({...data,[name]:value})

      }

    //   function handleClick() {
    //     history.push("/home");
    //   }
    
    
    
    return(
        <>
            {
                    FormDetails.map((item,indx)=>(
                        <div key={indx}>
                            <label>{item.label}</label>
                            <input  onChange={onChangeHandler} type={item.type} placeholder={item.placeholder} name={item.name} value={item.value} />
                       
                        </div>

      
                    ))
                }
                {/* <input onChange={onChangeHandler} type={FormDetails[0].type} placeholder={FormDetails[0].placeholder} name={FormDetails[0].name} value={FormDetails[0].value} /> */}
                {/* <input onChange={onChangeHandler}/> */}

                <button onClick={()=>(addFeedback(data))}>submit</button>
        </>
    )
}