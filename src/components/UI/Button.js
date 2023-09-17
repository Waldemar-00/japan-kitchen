export default function Button({ type, children, className, changeVisibleCart }) {
  return (
    <button type={type}
      className={className}
      onClick={changeVisibleCart}
    >
      {children}
    </button>
  )
}