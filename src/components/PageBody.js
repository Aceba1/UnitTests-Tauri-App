import React, { useContext } from 'react'

import { ContentContext } from '../contexts/ContentContext'
import TextContextProvider from '../contexts/TextContext'
import Pager from './Pager'
import TextRaw from './TextPageRaw'
import TextPropsJSON from './TextPagePropsJSON'

function Body() {
  const {body, setBody} = useContext(ContentContext)
  return (
    <TextContextProvider 
      text={body}
      setText={setBody}
    >
      <Pager 
        className="Pager2 BodyPager"
        pages={[TextRaw, TextPropsJSON]}
      />
    </TextContextProvider>
  )
}

Body.displayName = "Body";

export default Body

