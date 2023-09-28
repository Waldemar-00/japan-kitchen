import styles from './Cart.module.css'
import { v4 } from 'uuid'
import Button from '../UI/Button'
import Input from '../UI/Input'
import { Context } from '../../store/Context'
import { useContext } from 'react'
import Substrate from './Substrate'
function Cart() {
  const { changeVisibleCart, allDish, total } = useContext(Context)
  return (
    <Substrate>
      <div className={styles.cart}>
        <h2>Your products in CART</h2>
        <Button type='button' className={styles.close} foo={changeVisibleCart}>close cart</Button>
        <ul>
          {
            allDish.map(dish => {
              return (
              <li key={v4()}>
                  <div>{dish.name}</div>
                  <div>{dish.description}</div>
                  <div>{dish.price}</div>
                  <div>{dish.dishNumber} dose</div>
                  <div>{dish.finalyPrice}</div>
                  <Input type='number'
                    min='0'
                    step='1'
                    placeholder='change'
                    className={styles.input}
                  />
              </li>
              )
            })
          }
          <li key={v4()}>
            <div>Total</div>
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