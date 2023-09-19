import { Context } from './Context'
import { useState, useReducer } from 'react'

const defaultCart = {
  dishes: [{ amount: 12}],
  totalAmount: 0,
}
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return () => {
        const dishes = state.dishes.concat(action.dish)
        const amount = state.totalAmount + action.dish.price * action.dish.amount
        return {
          dishes: dishes,
          totalAmount: amount
        }
      }
    case 'REMOVE':
      return
    default: return defaultCart
  }
   
}
function ContextProvider({ children }) {
  const [isVisibleCart, setisVisibleCart] = useState(false)
  const [lastState, cartDispatch] = useReducer(cartReducer, defaultCart)
  function changeVisibleCart() {
    setisVisibleCart(isVisibleCart => !isVisibleCart)
  }
  function addOrRemoveDish(dish, addOrRemove) {
    cartDispatch({
      type: addOrRemove,
      dish: dish,
    })
  }
  return (
    <Context.Provider value={{
      isVisibleCart,
      changeVisibleCart,
      allDish: lastState.dishes,
      total: lastState.totalAmount,
    }}>
      {children}
    </Context.Provider>
  )
}
export default ContextProvider