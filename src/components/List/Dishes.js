import styles from './Dishes.module.css'
import DataDishes from './DataDishes'
import FormDish from './FormDish'
import Cart from '../Cart/Cart'
import { useContext } from 'react'
import { Context } from '../../Context'
function Dishes() {
  const data = DataDishes()
  const { isVisibleCart } = useContext(Context)
  console.log(isVisibleCart)
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
                <FormDish className={styles.form} />
              </li>
            )
          })
        }
      </ul>
      {isVisibleCart ? <Cart data={data} /> : null}
    </>
  )
}
export default Dishes