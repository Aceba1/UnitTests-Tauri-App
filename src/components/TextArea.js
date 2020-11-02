import React from 'react'
import PropTypes from 'prop-types'

function TextArea(props) {
  return (
    <textarea 
      className={props.className}
      placeholder={props.placeholder}
      value={props.value}
      onChange={e => props.setValue(e.target.value)}
       />
  )
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
}

export default TextArea