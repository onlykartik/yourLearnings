import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import {configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {thunk} from 'redux-thunk';
import iceCreamReducer from "./iceCream/iceCreamReducer"

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

console.log("store js has read")
const serviceApi = "https://localhost";
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(),logger,thunk ],
  });
  

export default store
