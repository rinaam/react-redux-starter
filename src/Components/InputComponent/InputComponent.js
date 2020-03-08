import React from 'react';
import PropTypes from 'prop-types';
import './InputComponent.scss';

const InputComponent = (props) => {
  const { label, id } = props;
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <input className="input" {...props} id={id} />
      </label>
    </div>
  );
};

InputComponent.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
};

InputComponent.defaultProps = {
  label: '',
};

export default InputComponent;
