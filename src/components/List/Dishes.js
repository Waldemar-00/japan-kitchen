import styles from './Dishes.module.css'
import DataDishes from '../../store/DataDishes'
import FormDish from './FormDish'
import Cart from '../Cart/Cart'
import { useContext } from 'react'
import { Context } from '../../store/Context'
function Dishes() {
  const data = DataDishes()
  const { isVisibleCart } = useContext(Context)
  return (
    <>
      <ul className={styles.listDishes}>
        {
          !data.isLoading ?
          data.data.map(dish => {
            return (
              <li key={dish.id}>
                <div><h3>{dish.name}</h3></div>
                <div>{dish.description}</div>
                <div className={styles.price}>{dish.price}</div>
                <FormDish className={styles.form} dish={dish} />
              </li>
            )
          }) :
              <li>
                <div><h2>Please wait</h2></div>
                <div><h2>for a response</h2></div>
                <div><h2>from the server!</h2></div>
              </li>
        }
      </ul>
      {isVisibleCart ? <Cart /> : null}
    </>
  )
}
export default Dishes