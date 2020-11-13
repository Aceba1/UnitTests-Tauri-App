// Holds: 
// - URL line
// - paging for header and body
//   - inner paging for different types, classNamed differently

import React, { useContext } from 'react'
import BarURL from './BarURL'
import Pager from './Pager'

import Body from './PageBody'
import Header from './PageHeader'
import ContentContextProvider from '../contexts/ContentContext'
import { RequestContext } from '../contexts/RequestContext'

export default function RequestForm() {
  const {body, setBody, head, setHead} = useContext(RequestContext)

  return (
    <div className="RequestForm">
      {/* 
        //TODO: Could have a comment component here for the chosen request type
        //TODO: Could parameterize Pager.pages to match chosen request type
       */}
      <BarURL />
      <ContentContextProvider 
        header={head}
        body={body}
        setHeader={setHead}
        setBody={setBody}
      >
        <Pager 
          className="RequestPager"
          pages={[ Body, Header ]} 
        />
      </ContentContextProvider>
    </div>
  )
}
