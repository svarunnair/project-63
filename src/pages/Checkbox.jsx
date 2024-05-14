import React, { useState } from 'react'

const initialData = [
    { name: "varun", isSelected: false },
    { name: "arun", isSelected: false },
    { name: "anu", isSelected: false },
    { name: "aju", isSelected: false },
    { name: "kiran", isSelected: false },
];

function Checkbox() {
const [data,setData]=useState(initialData)
const [selectAll,setSelectAll]=useState(false)

const handleChange=(index)=>{
    const newData=[...data]
    newData[index].isSelected=!newData[index].isSelected
    setData(newData)
    setSelectAll(newData.every((item)=>item.isSelected))
}

const handleSelectAll=()=>{
    const value=!selectAll
    const newValue=data.map((item)=>{
        return {...item,isSelected:value}
    })
    setData(newValue)
    setSelectAll(value)
}


  return (
    <div style={{border:"2px solid grey",width:"40%"}}>
<div style={{display:"flex"}}>
    <text>SelectAll</text>
    <input type='checkbox' checked={selectAll} onChange={handleSelectAll} />
</div>

<div>

{data.map((item,index)=>(
    <div key={index}>
    <text>{item.name}</text>
    <input type='checkbox' checked={item.isSelected} onChange={()=>handleChange(index)}/>
    </div>
))}
    
</div>

    
    </div>
  )
}

export default Checkbox