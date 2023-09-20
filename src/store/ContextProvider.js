import { Context } from './Context'
import { useState, useReducer } from 'react'

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
    return {
      dishes: state.dishes.concat(action.dish),
      totalPrice: state.totalPrice + action.dish.price * action.number,
      numberOfDish: action.number
    }
  }

  return (
    <Context.Provider value={{
      isVisibleCart,
      changeVisibleCart,
      addOrRemoveDish,
      allDish: lastState.dishes,
      total: lastState.totalPrice,
      numberOfDish: lastState.numberOfDish
    }}>
      {children}
    </Context.Provider>
  )
}
export default ContextProvider