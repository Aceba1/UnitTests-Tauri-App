import React, { useContext } from 'react'
import { RequestContext } from '../contexts/RequestContext'

export default function Response() {
  const { resp } = useContext(RequestContext);
  //TODO: Populate!
  return (
    <div>
      <code>{resp}</code>
    </div>
  )
}
