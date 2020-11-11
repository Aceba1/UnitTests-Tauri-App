import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const TextContext = createContext();

function TextContextProvider(props) {
  return (
    <TextContext.Provider value={{text: props.text, setText: props.setText}}>
      {props.children}
    </TextContext.Provider>
  )
}

TextContextProvider.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  setText: PropTypes.func.isRequired
}

export default TextContextProvider

