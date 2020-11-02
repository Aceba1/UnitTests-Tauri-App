import React, { useState } from 'react'
import RequestStrip from './RequestStrip'
import TextArea from './TextArea'

export default function RequestBox() {
  /**
   * @type {[res: import('axios').AxiosResponse, setRes: () => {}]} 
   */
  const [res, setRes] = useState("")
  const [body, setBody] = useState("")
  const getMsg = val => {
    console.log(val);
    setRes(val);
  }
  return (
    <div>
      <div>
        <RequestStrip data={body} getRes={getMsg} getErr={getMsg}/>
        <label>Body:</label>
        <br/>
        <TextArea 
          placeholder="Message Content"
          value={body}
          setValue={setBody} />
      </div>
      <div>
        <code>{res}</code>
      </div>
    </div>
  )
}
