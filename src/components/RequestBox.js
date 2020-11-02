import React, { useState } from 'react'
import RequestStrip from './RequestStrip'
import TextArea from './TextArea'

export default function RequestBox() {
  /**
   * @type {[res: import('axios').AxiosResponse, setRes: () => {}]} 
   */
  const [res, setRes] = useState({})
  const [body, setBody] = useState("")
  return (
    <div>
      <div>
        <RequestStrip data={body} getRes={setRes} getErr={setRes}/>
        <label>Body:</label>
        <br/>
        <TextArea 
          placeholder="Message Content"
          value={body}
          setValue={setBody} />
      </div>
      <div>
        <code>{JSON.stringify(res)}</code>
      </div>
    </div>
  )
}
