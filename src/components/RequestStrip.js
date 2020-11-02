import http, { BodyType, ResponseType } from 'tauri/api/http'

import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'
import PropTypes from 'prop-types'

function RequestStrip(props) {
  const [url, setURL] = useState("");

  const handleSend = () => {
    http.request({
      url:url,
      responseType: ResponseType.Text,
      method: "GET"
    })
    .then(v => props.getRes(v), v => props.getErr(v))
    .catch(v => props.getErr(v));
  }

  return (
    <div className="RequestStrip">
      <Input className="RequestStripInput" placeholder="Target URL" value={url} setValue={setURL} />
      <Button className="RequestStripSend" text="GET" onClick={handleSend}/>
    </div>
  )
}

RequestStrip.propTypes = {
  data: PropTypes.any,
  headers: PropTypes.objectOf(PropTypes.string),
  getRes: PropTypes.func,
  getErr: PropTypes.func,
}

export default RequestStrip