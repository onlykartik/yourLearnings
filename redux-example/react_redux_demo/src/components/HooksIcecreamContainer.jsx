import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buy_icecream } from "../redux/iceCream/iceCreamActions";
function HooksIcecreamContainer (){
    const numOfIceCreams = useSelector((state)=> state.iceCream.numberOfIceCreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of ice creams / hooks :-{numOfIceCreams} </h2>
            <button onClick={ ()=> dispatch(buy_icecream())} >Buy icecream</button>
        </div>
    )
}

export default HooksIcecreamContainer;