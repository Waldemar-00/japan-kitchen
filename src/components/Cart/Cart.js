import styles from './Cart.module.css'
import { v4 } from 'uuid'
import Button from '../UI/Button'
import Input from '../UI/Input'
function Cart({data}) {
  return (
    <div className={styles.cart}>
      <h2>Your products in CART</h2>
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
  )
}
export default Cart