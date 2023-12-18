import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { useState } from "react";

function HooksCakeContainer(){
    const numberOfCake = useSelector(state => state.cake.numberOfCakes);
    const dispatch = useDispatch();
    const [quanity, setQuanity] = useState(numberOfCake)
    const [show , setShow] = useState(false);
    const onBuyCakeHandler =()=> dispatch(buyCake(quanity));

    return (
        <div>
            <h2>Num of cakes / hooks  :- {numberOfCake}</h2>
            <h4>{ !show ? 'Enter quantity of cakes' : 'selected '+ quanity  }</h4>
            { !show ?  <input type="number" onChange={(e)=>{ setQuanity(e.target.value)  }} onBlur={()=> setShow(true)} /> 
            : 
            <div><button onClick={onBuyCakeHandler}> Click to buy {quanity} Cake </button>    </div> }
        </div>
    )
}

export default HooksCakeContainer