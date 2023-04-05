const TextField = ({ labelValue, value, onChange, placeholder, disabled }) => {
  const handleOnChange = (e) => {
    const val = e.target.value;
    onChange(val);
  };

  return (
    <>
      <label htmlFor="">{labelValue}</label>
      <input
        disabled={disabled}
        value={value}
        onChange={handleOnChange}
        type="text"
        className="form-control"
        name=""
        id=""
        aria-describedby="helpId"
        placeholder={placeholder}
      />
    </>
  );
};

export default TextField;
