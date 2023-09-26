import styles from './FormDish.module.css'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../../store/Context'
import Button from '../UI/Button'
import Input from '../UI/Input'

const FormDish = ({ className, dish }) => {
  const [value, setValue] = useState(localStorage.getItem(dish.id))
  const { addOrRemoveDish } = useContext(Context)
  useEffect(() => {
    console.log(dish.id)
    localStorage.setItem(dish.id, value)
    const item = localStorage.getItem(dish.id)
    if (item) {
      setValue(item)
    }
  }, [value, dish.id])
  function changeValue(e) {
    setValue(e.target.value)
  }
  return (
    <div className={className}>
      <Input className={styles.inputDish}
        type='number'
        placeholder='dose'
        min='0'
        step='1'
        foo={(e) => changeValue(e)}
        value={value}
      />
      <Button className={styles.buttonDish}
        type='button'
        foo={() => {
          addOrRemoveDish(dish, 'ADD', value)
          const item = localStorage.getItem(dish.id)
          if (item) {
            setValue('')
          }
        }}
      >
        to cart
      </Button>
    </div>
  )
}
export default FormDish