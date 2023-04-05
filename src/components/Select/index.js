const Select = ({
  labelValue,
  items,
  onChange,
  value,
  placeholder,
  disabled,
}) => {
  const handleOnChange = (e) => {
    const val = e.target.value;
    onChange(val);
  };

  return (
    <>
      <label htmlFor="">{labelValue}</label>
      <select
        disabled={disabled}
        value={value}
        className="form-control"
        name=""
        id=""
        onChange={handleOnChange}
      >
        <option value="">{placeholder}</option>
        {items.map(({ id, text, value }) => {
          return (
            <option key={id} value={value}>
              {text}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
