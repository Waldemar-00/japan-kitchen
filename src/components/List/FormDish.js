import styles from './FormDish.module.css'
import { useContext, useState } from 'react'
import { Context } from '../../store/Context'
import Button from '../UI/Button'
import Input from '../UI/Input'

const FormDish = ({ className, dish }) => {
  const [value, setValue] = useState('')
  const { addOrRemoveDish } = useContext(Context)
  function changeValue(e) {
    setValue( e.target.value )
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
        }}
      >
        to cart
      </Button>
    </div>
  )
}
export default FormDish