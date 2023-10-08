import { Context } from './Context'
import { useState, useReducer } from 'react'

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return caseAdd(state, action)
    case 'REMOVE':
      return deleteDish(state, action)
    case 'RESET':
      return cartReset()
    default: return
  }
}
function caseAdd(state, action) {
  let newState = []
  let titulNumber = 0
  let allPriceOfDish = 0
  let allDishes = []
  if (state.dishes.length > 0) {
    newState = state.dishes.filter(dish => {
      return dish.id !== action.dish.id
    })
  }
  action.dish.finalyPrice = (action.dish.price * action.number).toFixed(2)
  action.dish.dishNumber = action.number
  allDishes = newState.concat(action.dish)
  allDishes.forEach(dish => {
    allPriceOfDish += dish.price * dish.dishNumber
    let getDish = localStorage.getItem(`${dish.id}`)
    let getDishValue = localStorage.getItem(`${dish.id} value`)
    titulNumber =
      getDish ? +getDish + titulNumber :
      getDishValue ? +getDishValue + titulNumber :
      titulNumber + +dish.dishNumber
    localStorage.setItem('numDish', titulNumber)
  })
  return { 
    dishes: allDishes,
    totalPrice: allPriceOfDish,
    numberOfDish: titulNumber
  }
}
function cartReset() {
  return {
    dishes: [],
    totalPrice: 0,
    numberOfDish: 0
  }
}
function deleteDish(state, action) {
  const array = state.dishes.filter(obj => obj.name !== action.dish.name)
  return {
    dishes: array,
    totalPrice: +localStorage.getItem('totalPrice'),
    numberOfDish: +localStorage.getItem('numDish')
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
  function resetAll(dish, addOrRemove, numberOfDish) {
    cartDispatch(
      {
        type: addOrRemove,
        dish: dish,
        number: numberOfDish
      }
    )
  }
  function deleteDishThere(dish, addOrRemove, numberOfDish) {
    cartDispatch(
      {
        type: addOrRemove,
        dish: dish,
        number: numberOfDish
      }
    )
  }
  return (
    <Context.Provider value={{
      isVisibleCart,
      changeVisibleCart,
      addOrRemoveDish,
      allDish: lastState.dishes,
      total: lastState.totalPrice.toFixed(2),
      numberOfDish: lastState.numberOfDish,
      resetAll,
      deleteDishThere
    }}>
      {children}
    </Context.Provider>
  )
}
export default ContextProvider