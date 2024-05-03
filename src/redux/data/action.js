import axios from "axios"


export const POST_DATA_REQUEST="POST_DATA_REQUEST"
export const POST_DATA_SUCCESS="POST_DATA_SUCCESS"
export const POST_DATA_FAILURE="POST_DATA_FAILURE"


const postDataRequest=()=>{
    return({
        type:POST_DATA_REQUEST
    })
}
const postDataSuccess=(data)=>{
    return({
        type:POST_DATA_SUCCESS,
        payload:data
    })
}
const postDataFailure=()=>{
    return({
        type:POST_DATA_FAILURE
    })
}


export const postData=(data)=>(dispatch)=>{
    dispatch(postDataRequest())
    return axios({
        url:"",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postDataSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(postDataFailure())
    })
}