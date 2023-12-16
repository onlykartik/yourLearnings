import { BUY_ICECREAM } from "./iceCreamTypes";

const initalState = {
    numberOfIceCreams : 10
}

const iceCreamReducer = (state = initalState, action)=>{
    switch(action.type){
        case BUY_ICECREAM :return {
            ...state,
            numberOfIceCreams : state.numberOfIceCreams - action.payload
        }
        default : return{
            ...state
        }
    }
};

export default iceCreamReducer;