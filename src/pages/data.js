const data=[
    {
        name:"varun",
        age:'25'
    },
    {
        name:'arun',
        age:"24"
    },
     {
        name:'Kannen',
        age:"20"
    },
 {
        name:'kamal',
        age:"30"
    },
]


const result=data.filter((item)=>{
    return item.age>23
})

console.log("res",result)


// function EmployeName(){}

// EmployeName.prototype={
//     name:[],
//     showName: function(){
//         return this.name
//     }
// }

// var e1= new EmployeName()
// e1.name.push("foo")
// console.log("e1",e1.showName())

// var e2= new EmployeName()
// e1.name.push("bar")
// console.log("e2",e2.showName())

const testPromise= new Promise((resolve,reject)=>{
    let value=12
    if(value<4){
        resolve('value i less than 4')
    }
    else{
        reject('value is greater than 4')
    }
})

testPromise.then((res)=>{
    console.log("result",res)
})
.catch((err)=>{
    console.log("err",err)
})

// const testAsyncAwait = async () => {
//     try {
//         let value = 1;
//         if (value < 4) {
//             return 'value is less than 4';
//         } else {
//             throw 'value is greater than 4';
//         }
//     } catch (error) {
//         throw error;
//     }
// }

// console.log(">>?",testAsyncAwait())