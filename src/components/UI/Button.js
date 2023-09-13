export default function Button({ type, children, className }) {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  )
}