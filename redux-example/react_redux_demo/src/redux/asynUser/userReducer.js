import { useReducer } from "react";
import {FETCH_USER_REQUEST} from "./userTypes"
import {FETCH_USER_SUCCESS} from "./userTypes"
import {FETCH_USER_FAILURE} from "./userTypes"

const initalState = {
    loading : false,
    users :[],
    error : ''
};

function userReducer(state = initalState, action){
    switch(action.type){
        case FETCH_USER_REQUEST : return{
            ...state,
            loading : true
        };
        case FETCH_USER_SUCCESS : return{
            ...state,
            loading : false,
            users : action.payload
        };
        case FETCH_USER_FAILURE : return{
            ...state,
            loading : false,
            error : action.payload
        };
        default : return {
            ...state
        }
    }
}

export default userReducer;