function Button({ type, children, className, foo }) {
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