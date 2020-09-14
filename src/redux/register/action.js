import { REGISTER, REGISTER_FAILED, REGISTER_SUCCESS } from "./const";

export function register(payload){
    return{
        type:REGISTER,
        payload
    }
}
export function registerSuccess(data){
    return{
        type:REGISTER_SUCCESS,
        data
    }
}
export function registerFailed(error){
    return{
        type:REGISTER_FAILED,
        error
    }
}