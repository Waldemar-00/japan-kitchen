import styles from './FormDish.module.css'
import { useContext, useState } from 'react'
import { Context } from '../../store/Context'

function FormDish({ className, dish }) {
  const [value, setValue] = useState('')
  const { addOrRemoveDish } = useContext(Context)
  function changeValue(e) {
    setValue(e.target.value)
  }
  return (
    <div className={className}>
      <input className={styles.inputDish}
        type='number'
        placeholder='dose'
        min='0'
        step='1'
        onChange={(e) => changeValue(e)}
        value={value}
      />
      <button className={styles.buttonDish}
        
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation()
          addOrRemoveDish(dish, 'ADD', value)
        }}
      >
        to cart
      </button>
    </div>
  )
}
export default FormDish