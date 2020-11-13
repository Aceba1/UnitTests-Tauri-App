import React, { useContext } from 'react'
import { RequestContext } from '../contexts/RequestContext'
import Button from './Button';
import Input from './Input';
import Options from './Options';

/*
  GET     - Default
  POST    - No length restrictions
  PUT     - PUT but responses shouldn't change
  HEAD    - GET but no response body
  DELETE  - 
  PATCH   - 
  OPTIONS - 
*/

export default function BarURL() {
  const { url, setUrl, type, setType, doRequest } = useContext(RequestContext);
  return (
    <div className="BarURL">
      <Options className="RequestType" items={["GET", "POST", "PUT", "HEAD", "DELETE", "PATCH", "OPTIONS"]} value={type} setValue={setType} />
      <Input className="URL" placeholder="Target URL" value={url} setValue={setUrl} />
      <Button className={"Send " + type} text="SEND" onClick={doRequest} />
    </div>
  )
}
