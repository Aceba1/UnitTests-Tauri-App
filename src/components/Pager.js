// Displays Tabber to set stored index
// Displays passed types (pages) by stored index
// Calls store and load events to pages, by RequestContext and tabber index changes
// - Must use some kind of hook; A new context?

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tabber from './Tabber'
  
  function Pager(props) {
    const [page, setPage] = useState(0)
    const Page = props.pages[page];
    return (
      <div className={"Pager " + props.className} >
        <Tabber 
          index={page} 
          setIndex={setPage} 
          items={props.pages} 
          className={props.className} />
        <div className={"Page " + props.className} >
          <Page
            //TODO: Figure out what exactly to pass to Page
          />
        </div>
      </div>
    )
  }
  
  Pager.propTypes = {
    className: PropTypes.string,
    pages: PropTypes.array,

  }
  
  export default Pager
  
  