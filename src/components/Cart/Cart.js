import styles from './Cart.module.css'
import { v4 } from 'uuid'
import Button from '../UI/Button'
import { Context } from '../../store/Context'
import { useContext } from 'react'
import Substrate from './Substrate'
function Cart() {
  const { changeVisibleCart, allDish, total } = useContext(Context)
  function changeLocalStorageValues(e) {
    localStorage.setItem(e.target.name, e.target.value)
  }
  return (
    <Substrate>
      <div className={styles.cart}>
        <h2>Your products in CART</h2>
        <Button type='button' className={styles.close} foo={changeVisibleCart}>close cart</Button>
        <ul>
          {
            allDish.map(dish => {
              if (!localStorage.getItem(`${dish.id} value`))localStorage.setItem(`${dish.id} value`, dish.dishNumber)
              let num = localStorage.getItem(`${dish.id} value`) || dish.dishNumber
              return (
              <li key={v4()}>
                  <div>{dish.name}</div>
                  <div>{dish.description}</div>
                  <div>{dish.price}</div>
                  <input className={styles.input}
                    type='number'
                    name={`${dish.id} value`}
                    min='1'
                    step='1'
                    placeholder={num}
                    onChange={(e) => changeLocalStorageValues(e)}
                  />
                  <div className={styles.finalyPrice}>{dish.finalyPrice}</div>
              </li>
              )
            })
          }
          <li key={v4()}>
            <div>Total</div>
            <div></div>
            <div></div>
            <div>{total}</div>
          </li>
        </ul>
        {
          total > 0 ?
          <form action="#">
          <label htmlFor="textarea">write your wishes</label>
          <textarea name="textarea" id="textarea"></textarea>
          <Button type="submit">order</Button>
          </form> : null
        }
      </div> 
    </Substrate>
  )
}
export default Cart