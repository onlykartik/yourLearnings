import { BUY_CAKE } from "./cakeTypes"

export const buyCake=(quntity = 1)=>{
    return {
        type : BUY_CAKE,
        payload : quntity
    }
};