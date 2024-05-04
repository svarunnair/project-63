import axios from "axios"


export const POST_DATA_REQUEST="POST_DATA_REQUEST"
export const POST_DATA_SUCCESS="POST_DATA_SUCCESS"
export const POST_DATA_FAILURE="POST_DATA_FAILURE"

export const GET_DATA_REQUEST="GET_DATA_REQUEST"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_FAILURE="GET_DATA_FAILURE"


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


const getDataRequest=()=>{
    return({
        type:GET_DATA_REQUEST
    })
}
const getDataSuccess=(data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}
const getDataFailure=()=>{
    return({
        type:GET_DATA_FAILURE
    })
}


export const postData=(data)=>(dispatch)=>{
    dispatch(postDataRequest())
    return axios({
        url:"http://localhost:2020/data",
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

export const getData=()=>(dispatch)=>{
    dispatch(getDataRequest())
    return axios({
        url:"http://localhost:2020/data",
        method:"GET",
    })
    .then((res)=>{
        dispatch(getDataSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(getDataFailure())
    })
}