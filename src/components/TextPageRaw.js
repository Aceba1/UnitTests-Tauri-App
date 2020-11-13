// Just a simple text holder
// On-load property: 
// - Set text element to hold passed text 
// On-Store property:
// - Return current text in element

import React, { useContext } from 'react'
import { TextContext } from '../contexts/TextContext';

import TextArea from './TextArea';

function TextRaw() {
  
  let {text, setText} = useContext(TextContext);
  if (text instanceof Object) {
    text = JSON.stringify(text, undefined, 2);
    setText(text);
  }
  
  return (
    <div className="TextPageRaw">
      <TextArea 
        value={text}
        setValue={setText}
        placeholder="{ }"
      />
    </div>
  )
}

export default TextRaw

