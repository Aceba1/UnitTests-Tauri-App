import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const ContentContext = createContext();

function ContentContextProvider(props) {
  return (
    <ContentContext.Provider value={props}>
      {props.children}
    </ContentContext.Provider>
  )
}

ContentContextProvider.propTypes = {
  header: PropTypes.any,
  setHeader: PropTypes.func,
  body: PropTypes.any,
  setBody: PropTypes.any
}

export default ContentContextProvider

