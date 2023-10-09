import styles from './FormDish.module.css'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../../store/Context'
import Button from '../UI/Button'
import Input from '../UI/Input'

const FormDish = ({ className, dish }) => {
  const [value, setValue] = useState(localStorage.getItem(dish.id))
  const [disabled, setDisabled] = useState(false)
  const [placeholder, setPlaceholder] = useState('dose')
  const [classNameInput, setClassNameInput] = useState(`${styles.inputDish}`)
  const { addOrRemoveDish } = useContext(Context)
  useEffect(() => {
    localStorage.setItem(dish.id, value)
    const item = localStorage.getItem(dish.id)
    function setTime() {
      setTimeout(() => {
        setPlaceholder('dose')
      }, 4000)
    }
    function inputTimer() {
      setTimeout(() => setClassNameInput(`${styles.inputDish}`), 500)
    }
    if (item) {
      setValue(item)
    }
    if (placeholder === 'okey' || placeholder === 'dose') {
      setDisabled(true)
      inputTimer()
    }
    if (placeholder === 'okey') {
      setTime()
    }
    return () => {
      clearTimeout(setTime)
      clearTimeout(inputTimer)
    }
  }, [value, dish.id, placeholder])
  function changeValue(e) {
    setValue(e.target.value)
    setPlaceholder('')
    setDisabled(false)
  }
  return (
    <div className={className}>
      <Input className={classNameInput}
        type='number'
        placeholder={placeholder}
        min='0'
        step='1'
        foo={(e) => changeValue(e)}
        value={value}
      />
      <Button className={styles.buttonDish}
        type='button'
        disabled={disabled}
        foo={() => {
          setClassNameInput(`${styles.inputDish} ${styles.bump}`)
          addOrRemoveDish(dish, 'ADD', value)
          const item = localStorage.getItem(dish.id)
          if (item) {
            setValue('')
            setPlaceholder('okey')
            localStorage.removeItem(`${dish.id} value`)
          }
        }}
      >
        to cart
      </Button>
    </div>
  )
}
export default FormDish