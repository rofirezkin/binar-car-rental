const Select = ({ labelName, items, onChange, value}) => {
    const handleOnChange = (e) => {
        const val = e.target.value
        console.log({val})
        onChange(val)
    }

  return (
    <div class="form-group" style={{marginBottom: '14px'}}>
      <label for="">{labelName}</label>
      <select value={value} class="form-control" name="" id="" onChange={handleOnChange}>
        {
            items.map(({id, text})=> {
                return <option key={id} value={text}>{text}</option>
            })
        }
      </select>
    </div>
  );
};

export default Select;
