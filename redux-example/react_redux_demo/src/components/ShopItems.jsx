import { useSelector } from "react-redux"

function ShopItems(){
   const numOfItemsInShop = useSelector(state=>{
        return state.cake.numberOfCakes + state.iceCream.numberOfIceCreams
    });
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes);
    const numberOfIcecreams = useSelector(state => state.iceCream.numberOfIceCreams);
    return(
        <div>
            <h2>No of icecreams and cakes in the store {numOfItemsInShop} </h2>
            <h3>of which icerams are {numberOfIcecreams}</h3>
            <h3>&  cakes are {numberOfCakes}</h3>
        </div>
    )
};

export default ShopItems;