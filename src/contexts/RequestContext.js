// Stores the current state of a request
// - URL
// - Type
// - Header
// - Body
// - Response
//   - Time
//   - Status
//   - Header
//   - Body
// Provides method to request from server
// ? Provides hookable methods for before and after polling server

import React, { createContext, useState } from "react";

export const RequestContext = createContext();

export default function RequestContextProvider(props) {
  const [url, setUrl] = useState("http://localhost:5280/")
  const [type, setType] = useState("GET")
  const [body, setBody] = useState({})
  const [head, setHead] = useState({})
  const [resp, setResp] = useState(null)

  const doRequest = () => {
    //TODO: Populate!
    // Verify URL?
    // Use ensureBody.js on Body and Header
    // Store response
    // Push to HistoryContext
  }

  return (
    <RequestContext.Provider value={{url, setUrl, type, setType, body, setBody, head, setHead, resp, setResp, doRequest}}>
      {props.children}
    </RequestContext.Provider>
  )
}
