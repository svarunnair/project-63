
import React, { useState } from 'react'

const data=[
    {name:"varun",isSlected:false},
    {name:"arun"},
    {name:"anu"},
    {name:"aju"},
    {name:"kiran"},
]

function Test() {

    const [select,setSelect]=useState([])
    const [selectAll,setSelectAll]=useState(false)

    const handleChange=(e)=>{
        if(select.includes(e)){
            setSelect(select.filter((item)=>item!==e))
        }else{
            setSelect([...select,e])
        }
        console.log("value",e)
        setSelectAll(select.length===data.length-1)
    }

    const handleSelect=()=>{
        if(selectAll){
            setSelect([])
        }
        else{
            setSelect([...data])
        }
        setSelectAll(!selectAll)
    }
  return (
    <div>
    <div style={{display:"flex"}}>
   <text>Select all</text>
   <input type='checkbox' checked={selectAll} onChange={handleSelect}/>
   </div> 
        {data.map((item)=>(
            <div style={{border:"2px solid red",width:"40%"}}>
            <div style={{padding:10,}}>
                <text>{item.name}</text>
 
                <input type='checkbox' checked={select.includes(item)} onChange={()=>handleChange(item)} />
                
                </div>
            </div>
        ))}
    </div>
  )
}

export default Test