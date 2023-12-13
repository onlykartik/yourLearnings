const redux = require('redux')
const createStore = redux.createStore;

const STREET_UPDATED = 'STREET_UPDATED';

const updateStreet = (street = "N/A")=>{
    return {
        type: STREET_UPDATED,
        payload : street,
    }
}

const initialState ={
    name :"Vishwas",
    address:{
        street: '123 Main st',
        city : 'Boston',
        State : 'MA'
    }
}

const reducer =  (state = initialState, action)=>{
    switch(action.type){
        case STREET_UPDATED : return {
            ...state,
            address:{
                ...state.address,
                street : action.payload
            }
        }
        default : 
            return state
        
    }
};

const store = createStore(reducer);

console.log(store.getState())

store.subscribe(()=>{
    console.log('updated ',store.getState())
})

store.dispatch(updateStreet("bakers steet london, UK"))