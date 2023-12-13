const redux = require('redux');
const thunk = require('redux-thunk');
const configureStore =  require('@reduxjs/toolkit')
//import { configureStore } from '@reduxjs/toolkit'
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware
const axios = require('axios');


const initialState = {
    loading : false,
    users :[],
    error: '',
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCESSED ='FETCH_USERS_SUCCESSED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUsersRequest =()=>{
    return {
        type : FETCH_USERS_REQUESTED,
        payload : true,
    }
}

const fetchUsersSuccess =(users)=>{
    return {
        type : FETCH_USERS_SUCCESSED,
        payload : users,
    }
}

const fetchUsersfailure =(error)=>{
    return {
        type : FETCH_USERS_FAILED,
        payload : error,
    }
}



const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUESTED : return {
            ...initialState,
            loading : action.payload,
        };
        case FETCH_USERS_SUCCESSED : return {
            ...initialState,
            loading : false,
            users : action.payload,
            error : '',
        };
        case FETCH_USERS_FAILED : return {
            ...state,
            laoding : false,
            users :[],
            error : action.payload
        };
        default : return{
            ...state
        } ;
    }
}



const fetchUsers = ()=>{
    return async (dispatch)  =>{
        dispatch(fetchUsersRequest());
        try{
        const response = await axios.get('http://jsonplaceholder.typicode.com/users');
        const users = response.map(users => users.id);
        dispatch(fetchUsersSuccess(users))
        }catch(e){
            dispatch(fetchUsersfailure(e))
        }
    }
}


const rootReducer = combineReducers({
        usersList : reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchUsers());
console.log('Initial state ',store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log('Updated state ',store.getState());
});

