export default function Input(
  {
    type,
    name,
    disabled,
    id,
    className,
    inputMode,
    pattern,
    placeholder,
    label,
    min,
    step, 
    foo, 
    value,
  }
) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type}
        name={name}
        disabled={disabled}
        id={id}
        className={className}
        inputMode={inputMode}
        pattern={pattern}
        placeholder={placeholder}
        min={min}
        step={step}
        onInput={foo}
        value={value}
        />
    </>
  )
}