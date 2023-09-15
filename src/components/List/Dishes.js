import styles from './Dishes.module.css'
import DataDishes from './DataDishes'
import FormDish from './FormDish'
import Cart from '../Cart/Cart'
function Dishes() {
  const data = DataDishes()
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
      <Cart data={data}/>
    </>
  )
}
export default Dishes