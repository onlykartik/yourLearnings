import { connect } from "react-redux"
import { buyCake } from "../redux/cake/cakeActions"

function CakeContainer(props){
    return (
        <div>
            <h2>Number of cakes:{props.numberOfCakes}</h2>
            <button onClick={props.buyCake} >Buy cakes</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        numberOfCakes : state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake : ()=> dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);