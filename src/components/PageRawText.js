// Just a simple text holder
// On-load property: 
// - Set text element to hold passed text 
// On-Store property:
// - Return current text in element

import React from 'react'
import PropTypes from 'prop-types'

function PageRawText(props) {
  
  //TODO: Populate!
  
  return (
    <div>
      
    </div>
  )
}

PageRawText.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func({"newValue": PropTypes.any}),
}

export default PageRawText

