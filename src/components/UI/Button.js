export default function Button({ type, children, className, getCart }) {
  return (
    <button type={type}
      className={className}
      onClick={getCart}
    >
      {children}
    </button>
  )
}