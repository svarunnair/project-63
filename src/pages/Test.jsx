
import React, { useState } from 'react'

const data=[
    {name:"varun",isSlected:false},
    {name:"arun",isSlected:false},
    {name:"anu",isSlected:false},
    {name:"aju",isSlected:false},
    {name:"kiran",isSlected:false},
]

function Test() {

    const [isSlected,setIsSelect]=useState(false)
    const [selectAll,setSelectAll]=useState(false)

    const handleChange=(e)=>{
        if(isSlected){
            
        }
    }


    const handleSelect=()=>{
       
    }
  return (
    <div>
    <div style={{display:"flex"}}>
   <text>Select all</text>
   <input type='checkbox' checked={selectAll} onChange={handleSelect}/>
   </div> 
        {data.map((item,index)=>(
            <div key={index} style={{border:"2px solid red",width:"40%"}}>
            <div style={{padding:10,}}>
                <text>{item.name}</text>
 
                <input type='checkbox' checked={item.isSlected} onChange={()=>handleChange(index)} />
                
                </div>
            </div>
        ))}
    </div>
  )
}

export default Test