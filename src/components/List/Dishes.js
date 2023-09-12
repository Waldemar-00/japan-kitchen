import styles from './Dishes.module.css'
import DataDishes from './DataDishes'
function Dishes() {
  return (
    <ul className={styles.listDishes}>
      {
        DataDishes().map(dish => {
          return <li key={dish.id}>
            <div>{dish.name}</div>
            <div>{dish.description}</div>
            <div>{dish.price}</div>
            </li>
        })
      }
    </ul>
  )
}
export default Dishes