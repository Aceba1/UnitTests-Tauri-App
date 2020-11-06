// Holds: 
// - URL line
// - paging for header and body
//   - inner paging for different types, classNamed differently

import React from 'react'
import BarURL from './BarURL'
import Pager from './Pager'

import Body from './PageBody'
import Header from './PageHeader'

export default function RequestForm() {
  return (
    <div className="RequestForm">
      {/* 
        //TODO: Could have a comment component here for the chosen request type
        //TODO: Could parameterize Pager.pages to match chosen request type
       */}
      <BarURL />
      <Pager pages={[ Header, Body ]} />
    </div>
  )
}
