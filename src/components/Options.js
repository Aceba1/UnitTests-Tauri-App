// Presents a drop-down list of items by passed properties

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

  //const index = props.index ?? props.items.findIndex(item => item === props.value);

  return (
    <select className={props.className + " value-" + props.value} value={props.value} onChange={handleChange}>
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
  setValue: PropTypes.func,

  index: PropTypes.number,
  setIndex: PropTypes.func,

  items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Options

