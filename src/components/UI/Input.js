
export default function Input(
  {
    type,
    name,
    disabled,
    id,
    className,
    inputMode,
    pattern
  }
) {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input type={type}
        name={name}
        disabled={disabled}
        id={id}
        className={className}
        inputMode={inputMode}
        pattern={pattern}
        />
    </>
  )
}