import styles from './Dishes.module.css'
import DataDishes from './DataDishes'
import FormDish from './FormDish'
function Dishes() {
  return (
    <ul className={styles.listDishes}>
      {
        DataDishes().map(dish => {
          return(
            <li key={dish.id}>
              <div><h3>{dish.name}</h3></div>
              <div>{dish.description}</div>
              <div className={styles.price}>{dish.price}</div>
              <FormDish className={styles.form}/>
            </li>
          )
        })
      }
    </ul>
  )
}
export default Dishes