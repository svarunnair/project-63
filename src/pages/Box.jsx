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

    const handleSelect=(index)=>{
        const newData= [...data]
        newData[index].isSelected=!newData[index].isSelected
        setData(newData)
        setSelectAll(data.every((item)=>item.isSelected))
    }

    const handleSelectAll=()=>{
       setSelectAll(!selectAll)
       setData(data.map((item)=>{return {...item, isSelected:!selectAll}}))
    }


   console.log(square(4)); // TypeError: square is not a function

// Function expression
function square(x) {
  return x * x;
}

const multi=(x)=>{
    return x+x
}
console.log("mul../",multi(5))



    const name="vvaafvvvvvv"
    let res=[...new Set(name)]
    console.log("res",res)
   
    
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