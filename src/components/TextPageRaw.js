// Just a simple text holder
// On-load property: 
// - Set text element to hold passed text 
// On-Store property:
// - Return current text in element

import React, { useContext } from 'react'
import { TextContext } from '../contexts/TextContext';

import TextArea from './TextArea';

function TextRaw() {
  
  const {text, setText} = useContext(TextContext);
  
  return (
    <TextArea 
      value={text}
      setValue={setText}
      placeholder="{ }"
    />
  )
}

export default TextRaw

