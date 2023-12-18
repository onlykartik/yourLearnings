import {FETCH_USER_REQUEST} from "./userTypes"
import {FETCH_USER_SUCCESS} from "./userTypes"
import {FETCH_USER_FAILURE} from "./userTypes"
import axios from "axios"

export const fetchUsersRequest =()=>{
    return {
        type : FETCH_USER_REQUEST
    }
};

export const fetchUsersSuccess =(users)=>{
    return {
        type : FETCH_USER_SUCCESS,
        payload : users
    }
};

export const fetchUsersFailure = (error)=>{
    return{
        type : FETCH_USER_FAILURE,
        error : error
    }
};


export const fetchUsers = ()=>{
    return async (dispatch)  =>{
        dispatch(fetchUsersRequest());
        try{
        const response = await axios.get('http://jsonplaceholder.typicode.com/users');
        const users = response.data.map(user => user.username);
        console.log("users", users)
        dispatch(fetchUsersSuccess(users))
        }catch(e){
            dispatch(fetchUsersFailure(e))
        }
    }
}
