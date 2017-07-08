import React, { PropTypes } from 'react';

const Button = (props) => {
  return (
    <button onClick={props.clicked}>{props.name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  clicked: PropTypes.func,
};

export default Button;
