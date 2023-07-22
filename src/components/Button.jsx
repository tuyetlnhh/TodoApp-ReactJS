// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types'; // ES6

// styles
import styles from './button.module.css'

// stateless component (compose component)
function Button({ buttonText, type = "button", onClick}) {
  return (
    <button className={styles.button_add} type={type} onClick={onClick}>      
      {buttonText}
    </button>
  );
}

export default Button;

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
}
