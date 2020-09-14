import { REGISTER, REGISTER_FAILED, REGISTER_SUCCESS } from "./const"

const initialState = {
    loading: false,
    data:[],
    error:''
}


export default function registerReducer(state = initialState , action){
    switch(action.type){
        case REGISTER:
            return{
                ...state,
                loading:true,
                data:action.payload
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.data,
                error:[]
            }
        case REGISTER_FAILED:
            return{
                ...state,
                loading:false,
                data:[],
                error:action.error
            }
        default:
                return state
    }

}