import React from 'react'
import PropTypes from 'prop-types'

function Input(props) {
  return (
    <input 
      className={props.className}
      placeholder={props.placeholder} 
      value={props.value} 
      onChange={e => props.setValue(e.target.value)} />
  )
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input

