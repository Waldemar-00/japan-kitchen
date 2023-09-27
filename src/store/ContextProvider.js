import { Context } from './Context'
import { useState, useReducer } from 'react'

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return caseAdd(state, action)
    case 'REMOVE':
      return
    default: return
  }
}
function caseAdd(state, action) {
  action.dish.finalyPrice = (action.dish.price * action.number).toFixed(2)
  action.dish.dishNumber = action.number
  return {
    dishes: state.dishes.concat(action.dish),
    totalPrice: state.totalPrice + action.dish.price * action.number,
    numberOfDish: +state.numberOfDish + +action.number
  }
}

function ContextProvider({ children }) {
  const [isVisibleCart, setisVisibleCart] = useState(false)
  const [lastState, cartDispatch] = useReducer(cartReducer, { dishes: [], totalPrice: 0, numberOfDish: 0 })
  function changeVisibleCart() {
    setisVisibleCart(isVisibleCart => !isVisibleCart)
  }
  function addOrRemoveDish(dish, addOrRemove, numberOfDish) {
    cartDispatch({
      type: addOrRemove,
      dish: dish,
      number: numberOfDish
    })
  }

  return (
    <Context.Provider value={{
      isVisibleCart,
      changeVisibleCart,
      addOrRemoveDish,
      allDish: lastState.dishes,
      total: lastState.totalPrice.toFixed(2),
      numberOfDish: lastState.numberOfDish
    }}>
      {children}
    </Context.Provider>
  )
}
export default ContextProvider