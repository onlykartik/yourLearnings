import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";

import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IcecreamContainer from "./components/IcecreamContainer";
import HooksIcecreamContainer from "./components/HooksIcecreamContainer";
import ShopItems from "./components/ShopItems";
import UserContainer from "./components/userContainer";

import { useState } from "react";

function App() {
  const [switcher, setSwitch] = useState(true);
  let shop, user;
  if (switcher) {
    shop = (
      <>
        <div>
          <CakeContainer />
          <HooksCakeContainer />
        </div>
        <div>
          <IcecreamContainer />
          <HooksIcecreamContainer />
        </div>
        <div>
          <ShopItems />
        </div>
      </>
    );
  } else {
    user = (
      <>
        <UserContainer />
      </>
    );
  }

  return (
    <Provider store={store}>
      <button onClick={()=>{
         setSwitch(!switcher)
      } }>Switch to user screen</button>
      <div className="App">{switcher ? shop : user}</div>
    </Provider>
  );
}

export default App;
