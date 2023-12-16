import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function HooksCakeContainer(){
    const numberOfCake = useSelector(state => state.cake.numberOfCakes);
    const dispatch = useDispatch();
    const onBuyCakeHandler =()=> dispatch(buyCake());
    return (
        <div>
            <h2>Num of cakes / hooks  :- {numberOfCake}</h2>
            <button onClick={onBuyCakeHandler} >Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer