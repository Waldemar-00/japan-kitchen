import Input from '../UI/Input'
import Button from '../UI/Button'
import styles from './FormDish.module.css'
function FormDish({className}) {
  return (
    <div className={className}>
      <Input className={styles.inputDish}
        type='text'
        inputMode='numeric'
        pattern='\d*'
        placeholder='dose'
      />
      <Button className={styles.buttonDish}>to cart</Button>
    </div>
  )
}
export default FormDish