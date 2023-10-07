import styles from './Cart.module.css'
import { v4 } from 'uuid'
import Button from '../UI/Button'
import Input from '../UI/Input'
import { Context } from '../../store/Context'
import { useContext, useState } from 'react'
import Substrate from './Substrate'
function Cart() {
  const { changeVisibleCart, allDish, resetAll } = useContext(Context)
  const dataDish = allDish.length > 0 ? [...allDish] : (JSON.parse(localStorage.getItem('allDish')) || [])
  const [reset, setReset] = useState(false)
  const [reFresh, setreFresh] = useState({})
  let totalPrice = 0
  let allNumDish = localStorage.getItem('numDish')
  function changeLocalStorageValues(e) {
    const prevValue = localStorage.getItem(e.target.name)
    localStorage.setItem(e.target.name, e.target.value)
    const nextValue = localStorage.getItem(e.target.name)
    if (+prevValue < +nextValue) {
      allNumDish = +allNumDish + 1
    } else if (+prevValue >= +nextValue) {
      allNumDish = allNumDish - (prevValue - nextValue)
    }
    let finalyPrice = e.target.price * `${e.target.name} value`
    localStorage.setItem(`${e.target.name} finalyPrice`, finalyPrice)
    localStorage.setItem('numDish', allNumDish)
    setreFresh({})
  }
  if (dataDish.length > 0) localStorage.setItem('allDish', JSON.stringify(dataDish))
  function resetCart(e) {
    e.preventDefault()
    localStorage.clear()
    setReset(true)
    resetAll(reFresh, 'RESET', 0)
  }
  function dataSubmit(e) {
    e.preventDefault()
    let textarea = document.querySelector('textarea').value
    const finData = dataDish.map((dish) => {
      dish.dishNumber = localStorage.getItem(`${dish.name} value`)
      dish.finalyPrice = localStorage.getItem(`${dish.name} finalyPrice`)
      delete dish.description
      delete dish.id
      return  dish
    })
    finData.push({ totalPrice: totalPrice, textarea: textarea })
    console.log(finData)
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(finData)
    }).then(response => response.json()).then(response => {
      // resetCart(e)
      console.log(response)
    })

  }
  return (
    <Substrate>
      <div className={styles.cart}>
        <h2>Your products in CART</h2>
        <Button type='button' className={styles.close} foo={changeVisibleCart}>close cart</Button>
        <ul>
          {
            !reset && JSON.parse(localStorage.getItem('allDish')) ?
            JSON.parse(localStorage.getItem('allDish')).map(dish => {
              if (!localStorage.getItem(`${dish.id} value`))localStorage.setItem(`${dish.id} value`, dish.dishNumber)
              let num = localStorage.getItem(`${dish.id} value`) || dish.dishNumber
              totalPrice = +totalPrice + dish.price * localStorage.getItem(`${dish.id} value`)
              let finalyPrice = (dish.price * num).toFixed(2)
              localStorage.setItem(`${dish.name} finalyPrice`, finalyPrice)
              return (
                <li key={dish.name}>
                  <div>{dish.name}</div>
                  <div>{dish.description}</div>
                  <div>{dish.price}</div>
                  <Input className={styles.input}
                    type='number'
                    name={`${dish.id} value`}
                    min='1'
                    step='1'
                    max='20'
                    placeholder={num}
                    foo={(e) => changeLocalStorageValues(e)}
                  />
                  <div className={styles.finalyPrice}>{ finalyPrice }</div>
              </li>
              )
            }) : null
          }
          <li key={v4()}>
            <div>Total</div>
            <div></div>
            <div></div>
            <div>{!reset ? totalPrice.toFixed(2) : '0.00'}</div>
          </li>
        </ul>
        {
          !reset && totalPrice > 0 ?
          <form action='https://jsonplaceholder.typicode.com/posts' target= '_blank' method='post' >
          <label htmlFor="textarea">write your wishes</label>
          <textarea name="textarea" id="textarea"></textarea>
              <Button type="submit"
                foo={(e) => dataSubmit(e)}
              >order</Button>
          </form> : null
        }
        <Button
          type='button' className={styles.reset} foo={(e) => resetCart(e)}>reset cart</Button>
      </div> 
    </Substrate>
  )
}
export default Cart