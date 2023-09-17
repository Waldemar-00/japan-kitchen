import styles from './Cart.module.css'
import { v4 } from 'uuid'
import Button from '../UI/Button'
import Input from '../UI/Input'
import { Context } from '../../Context'
import { useContext } from 'react'
import Substrate from './Substrate'
function Cart({ data }) {
  const { changeVisibleCart } = useContext(Context)
  return (
    <Substrate>
      <div className={styles.cart}>
        <h2>Your products in CART</h2>
        <Button type='button' className={styles.close} changeVisibleCart={changeVisibleCart}>close cart</Button>
        <ul>
          
          {
            data.map(dish => {
              return (
              <li key={v4()}>
                  <div>{dish.name}</div>
                  <div>{dish.description}</div>
                  <div>{dish.price}</div>
                  <Input type='number'
                    min='1'
                    step='1'
                    label='change in'
                    className={styles.input}
                  />
              </li>
              )
            })
          }
          <li key={v4()}>
            <div>Total</div>
            <div></div>
            <div>1000</div>
          </li>
        </ul>
        <form action="#">
          <label htmlFor="textarea">write your wishes</label>
          <textarea name="textarea" id="textarea"></textarea>
          <Button type="submit">order</Button>
        </form>
      </div>
    </Substrate>
  )
}
export default Cart