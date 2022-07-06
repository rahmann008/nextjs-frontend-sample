import React from 'react';
import PropTypes from 'prop-types';

const InputForm = ({ id, name, label, type, placeholder }) => (
  <div className="flex flex-col lg:w-3/4 mb-6 sm:mb-12 text-gray-400 focus-within:text-secondary">
    <label htmlFor={id} className="text-sm sm:text-base font-mulish">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      required
      placeholder={placeholder}
      autoComplete="off"
      className="peer border-transparent focus:border-transparent focus:ring-0 text-black font-mulish-bold text-sm placeholder:text-sm placeholder:sm:text-base placeholder:font-mulish placeholder:text-gray-400"
    />
    <div className="border-b-2 border-black peer-focus:border-secondary" />
  </div>
);

InputForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputForm;
