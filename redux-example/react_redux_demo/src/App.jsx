
import './App.css'
import CakeContainer from './components/CakeContainer'
import {Provider} from 'react-redux'

import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import HooksIcecreamContainer from './components/HooksIcecreamContainer'
import ShopItems from './components/ShopItems';

function App() {

  return (
    <Provider store={store}>
      <div className='App'>
      <CakeContainer/>  
      <HooksCakeContainer/>
      </div>
      <div>
        <IcecreamContainer/>
        <HooksIcecreamContainer/>
      </div>
      <div>
        <ShopItems/>
      </div>
    </Provider>
  )
}

export default App
