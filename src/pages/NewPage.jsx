import React, { useState } from 'react'

const data=[
    {name:"varun"},
    {name:"arun"},
    {name:"anu"},
    {name:"aju"},
    {name:"kiran"},
]

function NewPage() {
    const [select,setSelect]=useState([])
    const [selectAll,setSelectAll]=useState(false)
 console.log("select...Test",select)
    const handleSelect=(e)=>{
        if(select.includes(e)){
            setSelect(select.filter((item)=>item!==e))      
        }
        else{
            setSelect([...select,e])
        }
        setSelectAll(select.length===data.length-1)
        
    }
    
    const handleSelectAll=()=>{
        if(selectAll){
            setSelect([])
        }
        else{
            setSelect([...data])
        }
        setSelectAll(!selectAll)
    }


  return (
    <div style={{width:"50%",border:"2px solid red"}}>

    <div style={{display:"flex"}}>
        <text>Select all</text>
        <input type='checkbox' checked={selectAll} onChange={handleSelectAll}/>
    </div>

    {data.map((item)=>(
        <div>
            <text>{item.name}</text>
            <input type='checkbox' checked={select.includes(item)} onChange={()=>handleSelect(item)} />
        </div>
    ))}

    </div>
  )
}

export default NewPage