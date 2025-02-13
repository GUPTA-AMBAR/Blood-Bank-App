import React from 'react'

const InputForm = ({ labelText, inputType, value, onChange, name }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="form-outline">
        <input type={inputType}  className="form-control form-control-lg" name={name} value={value} onChange={onChange} />
        <label className="form-label" htmlFor="firstName">{labelText}</label>
      </div>
    </div >
  )
}

export default InputForm;