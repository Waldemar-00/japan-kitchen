import './App.css' 
import Header from './components/Layout/Header'
import Promo from './components/List/Promo'
import { useState } from 'react'
import { Context } from './Context'
function App() {
  const [isVisibleCart, setisVisibleCart] = useState(false)
  function changeVisibleCart() {
    setisVisibleCart(isVisibleCart => !isVisibleCart)
    console.log(isVisibleCart)
  }
  return (
    <Context.Provider value={{ isVisibleCart, changeVisibleCart }}>
      <div className="App">
        <Header changeVisibleCart={changeVisibleCart}/>
        <Promo />
      </div>
    </Context.Provider>
  ) 
}

export default App 
