import React from 'react';
import PropTypes from 'prop-types';
import './WrapperComponent.scss';

const WrapperComponent = ({ children }) => (
  <div className="WrapperComponent">{children}</div>
);

WrapperComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WrapperComponent;
