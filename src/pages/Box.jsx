import React, { useState } from 'react'

const initialData = [
    { name: "varun", isSelected: false },
    { name: "arun", isSelected: false },
    { name: "anu", isSelected: false },
    { name: "aju", isSelected: false },
    { name: "kiran", isSelected: false },
];

function Box() {
    const [data,setData]=useState(initialData)
    const [selectAll,setSelectAll]=useState(false)

    console.log("data",data)

    const handleSelect=(i)=>{
        const newData=[...data]
        newData[i].isSelected=!newData[i].isSelected
        setData(newData)
        setSelectAll(data.every((item)=>item.isSelected))
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
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

    <div style={{display:"flex"}}>
        <text>Select All</text>
        <input type='checkbox' checked={selectAll} onChange={handleSelectAll} />
    </div>

{data.map((item,index)=>(
    <div key={index} style={{display:"flex"}}>
    <text>{item.name}</text>
    <input type='checkbox' checked={item.isSelected} onChange={()=>handleSelect(index)}/>
    </div>
))}


    </div>
  )
}

export default Box