import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import { configureStore } from '@reduxjs/toolkit'
const rootReducer = combineReducers({
    cake : cakeReducer
})

console.log("store js has read")
const serviceApi = "https://localhost";
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { serviceApi }
        }
      })
  });

  store.subscribe(()=>{
    console.log(' updated state ', store.getState())
  });

  

  export default store
