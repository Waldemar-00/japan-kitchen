import './App.css' 
import Header from './components/Layout/Header'
import Promo from './components/List/Promo'
import { useState } from 'react'
import { Context } from './Context'
function App() {
  const [isVisibleCart, setisVisibleCart] = useState(false)
  function getCart() {
    setisVisibleCart(isVisibleCart => !isVisibleCart)
    console.log(isVisibleCart)
  }
  return (
    <Context.Provider value={{isVisibleCart}}>
      <div className="App">
        <Header getCart={getCart}/>
        <Promo />
      </div>
    </Context.Provider>
  ) 
}

export default App 
