const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED ="ICECREAM_RESTOCKED";

function orderIcecream(){
    return {
        type: ICECREAM_ORDERED,
        payload : 1,
    }
}

function restockIcecrem(qty =2){
    return {
        type : ICECREAM_RESTOCKED,
        payload : 2,
    }
}

// action 
function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 4,
    }
}

function restockCake(gty = 2) {
    return {
        type: CAKE_RESTOCKED,
        payload: gty
    }
}
/*
const initialState = {
    numberOfCake: 10,
    numberOfIcecream :10
}  
*/


const initialIcecreamState={
    numberOfIcecream : 10
}

// reducer 
const icecreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numberOfIcecream: state.numberOfIcecream - action.payload,
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numberOfIcecream:  state.numberOfIcecream + action.payload ,
            }
        default:
            return state
    }
}

const initalCakeState ={
    numberOfCake : 10,
}

const cakeReducer = (state = initalCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCake: state.numberOfCake - action.payload,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCake: state.numberOfCake % 2 == 0 ? state.numberOfCake + action.payload : state.numberOfCake,
            }
        default:
            return state
    }
}

const rootReducer = combineReducers(
    {
       icecream: icecreamReducer,
        cake : cakeReducer,
    }
)

const store = createStore(rootReducer, applyMiddleware(logger));

console.log('inital state ', store.getState());

const unsubscribe = store.subscribe(() => {
   // console.log('upadted state', store.getState());
})

store.dispatch(orderCake())
store.dispatch(restockCake())

store.dispatch(orderIcecream())
store.dispatch(restockIcecrem())
unsubscribe();