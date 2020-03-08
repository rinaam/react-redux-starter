import React from 'react';
import PropTypes from 'prop-types';
import './ButtonComponent.scss';

const ButtonComponent = ({ label, onClick }) => (
  <button onClick={onClick} className="ButtonComponent" type="button">
    {label}
  </button>
);

ButtonComponent.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonComponent;
