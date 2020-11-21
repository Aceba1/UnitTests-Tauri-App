import React, { useContext } from 'react'

import { ContentContext } from '../contexts/ContentContext'
import TextContextProvider from '../contexts/TextContext'
import Pager from './Pager'
import TextRaw from './TextPageRaw'
import TextPropsJSON from './TextPagePropsJSON'

function Header() {
  const {header, setHeader} = useContext(ContentContext)
  return (
    <TextContextProvider 
      text={header}
      setText={setHeader}
    >
      <Pager 
        className="Pager2 HeadPager"
        pages={[TextRaw, TextPropsJSON]}
      />
    </TextContextProvider>
  )
}

Header.displayName = "Header";

export default Header

