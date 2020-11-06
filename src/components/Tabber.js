// holds Tabs

import React from 'react'
import PropTypes from 'prop-types'
import Tab from './Tab'

function Tabber(props) {
  return (
    <div className={"Tabber " + props.className}>
      { props.items.map((item, index) => {
        return (
          <Tab 
            text={item.name} 
            index={index} 
            key={index} 
            active={index===props.index} 
            setActive={props.setIndex} 
            className={props.className} />
        )
      })}
    </div>
  )
}

Tabber.propTypes = {
  items: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,

  className: PropTypes.string,
}

export default Tabber

