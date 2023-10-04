function Button({ type, children, className, foo, disabled }) {
  return (
    <button type={type}
      className={className}
      onClick={(e) => foo(e)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
export default Button