// Presents a drop-down list of items by passed properties
// There's probably an HTML item specifically for this, use that

import React from 'react'
import PropTypes from 'prop-types'

function Options(props) {
  const handleChange = e => {
    props.setIndex(e.target.selectedIndex);
  }

  return (
    <select className={props.className} selectedIndex={props.index} onChange={handleChange}>
      {
        props.items.map((item, id) => {
          return (
            <option key={id} value={item.value}>
              {item.name}
            </option>
          )
        })
      }
    </select>
  )
}

Options.propTypes = {
  className: PropTypes.string,
  
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func({newIndex: PropTypes.number}).isRequired,

  items: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired
}

export default Options

