function Button({ type, children, className, foo, dish }) {
  return (
    <button type={type}
      className={className}
      onClick={foo}
    >
      {children}
    </button>
  )
}
export default Button