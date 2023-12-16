import { connect } from "react-redux";
import { buy_icecream } from "../redux/iceCream/iceCreamActions";

function icecreamContainer(props){
    return(
        <div> 
             <h2>Number of iceCreams / connect :- {props.numberOfIceCreams}</h2>
             <button onClick={props.buyIcecream}>Buy icecream</button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        numberOfIceCreams: state.iceCream.numberOfIceCreams
    };
} 

const mapDispatchToProps = (dispatch)=>{
   return{
    buyIcecream : ()=> dispatch(buy_icecream())
   } 
}

export default connect(mapStateToProps, mapDispatchToProps)(icecreamContainer)