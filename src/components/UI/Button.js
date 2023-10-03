function Button({ type, children, className, foo }) {
  return (
    <button type={type}
      className={className}
      onClick={(e) => foo(e)}
    >
      {children}
    </button>
  )
}
export default Button