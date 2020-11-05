// Presents a drop-down list of items by passed properties
// There's probably an HTML item specifically for this, use that

import React from 'react'
import PropTypes from 'prop-types'

/**
 * 
 * @param {{items: {}[]}} props 
 */
function Options(props) {
  const handleChange = e => {
    if (props.setIndex !== undefined)
      props.setIndex(e.target.selectedIndex);
    if (props.setValue !== undefined) 
      props.setValue(props.items[e.target.selectedIndex]);
  }

  const index = props.index ?? props.items.findIndex(item => item === props.value);

  return (
    <select className={props.className} selectedIndex={index} onChange={handleChange}>
      {
        props.items.map((item, id) => {
          return (
            <option key={id} value={item}>
              {item}
            </option>
          )
        })
      }
    </select>
  )
}

Options.propTypes = {
  className: PropTypes.string,
  
  value: PropTypes.string,
  setValue: PropTypes.func({newValue: PropTypes.string}),

  index: PropTypes.number,
  setIndex: PropTypes.func({newIndex: PropTypes.number}),

  items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Options

