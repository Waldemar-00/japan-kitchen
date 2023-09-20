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
          data.map(dish => {
            return (
              <li key={dish.id}>
                <div><h3>{dish.name}</h3></div>
                <div>{dish.description}</div>
                <div className={styles.price}>{dish.price}</div>
                <FormDish className={styles.form} dish={dish}/>
              </li>
            )
          })
        }
      </ul>
      {isVisibleCart ? <Cart /> : null}
    </>
  )
}
export default Dishes