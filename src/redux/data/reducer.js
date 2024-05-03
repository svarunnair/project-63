import { POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS } from "./action"

const initState={
    isLoading:false,
    isError:false,
    dataPost:[]
}

export const dataReducer=(state=initState,action)=>{
    switch(action.type){
        case POST_DATA_REQUEST:
            return({
                ...state,
                isLoading:true,
                isError:false
            })
            case POST_DATA_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    dataPost:action.payload
                })
                case POST_DATA_FAILURE:
                    return({
                        ...state,
                        isLoading:false,
                        isError:true
                    })



                    default :
                    return({
                        ...state
                    })
    }
}