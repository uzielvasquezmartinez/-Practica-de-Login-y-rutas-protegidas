export default function Input({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
}) {
  return (
    <div className="field">
      {label && (
        <label htmlFor={id} className="field__label">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`field__input ${error ? "field__input--error" : ""}`}
      />
      {error && <p className="field__error">{error}</p>}
    </div>
  );
}
