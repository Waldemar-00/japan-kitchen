import styles from './FormDish.module.css'
import { useContext, useState } from 'react'
import { Context } from '../../store/Context'

function FormDish({ className, dish }) {
  const [value, setValue] = useState('')
  const { addOrRemoveDish } = useContext(Context)
  function changeValue(e) {
    console.log(e.target.value)
    setValue(e.target.value)
  }
  return (
    <div className={className}>
      <input className={styles.inputDish}
        type='number'
        placeholder='dose'
        onInput={(e) => changeValue(e)}
        value={value}
      />
      <button className={styles.buttonDish}
        onClick={(e) => {
          addOrRemoveDish(dish, 'ADD', value)
        }}
      >
        to cart
      </button>
    </div>
  )
}
export default FormDish