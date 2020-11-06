// holds tab name
// passed boolean if active, render if so
// on click:
// - calls back to tabber current index

  import React from 'react'
  import PropTypes from 'prop-types'
import Button from './Button'
  
  function Tab(props) {
    return (
      <Button 
        key={props.index} 
        className={props.className + " Tab " + props.active} 
        text={props.text} 
        onClick={() => props.setActive(props.index)} />
    )
  }
  
  Tab.propTypes = {
    index: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,

    className: PropTypes.string,

  }
  
  export default Tab
  
  