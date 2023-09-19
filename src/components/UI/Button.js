import { useContext } from 'react'
import { Context } from '../../store/Context'
function Button({ type, children, className}) {
  const { changeVisibleCart } = useContext(Context)
  return (
    <button type={type}
      className={className}
      onClick={changeVisibleCart}
    >
      {children}
    </button>
  )
}
export default Button