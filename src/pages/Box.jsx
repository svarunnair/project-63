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
    const newData=[...data]
    newData[index].isSelected=!newData[index].isSelected
    setData(newData)
    setSelectAll(data.every((item)=>item.isSelected))
   }

   const handleSelectAll=()=>{
    setSelectAll(!selectAll)
    setData(data.map((item)=>{return {...item, isSelected:!selectAll}}))
   }


//   const multiply=(n,cb)=>{
//     return setTimeout(()=>{
//        cb(n*2)
//     },1000)
   
// }

//   const first=(n)=>{
//     return multiply(n,(res)=>{console.log("newRES",res)})
//   }

//  console.log("result//.....",first(5))

const multi=(num)=>{
    const promise= new Promise((resolve,rej)=>{
        return setTimeout(()=>{
            resolve(num+2)
        },1000)
    })
    return promise
}

const keep=(num)=>{

multi(num)
.then((res1)=>multi(res1))
.then((res2)=>multi(res2))
.then((res3)=>multi(res3))
.then((res4)=>console.log("eeeeeeeeee//",res4))

}

keep(2)


   
    
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