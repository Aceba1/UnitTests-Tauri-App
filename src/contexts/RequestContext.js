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
import performRequest from "../utils/performRequest";

export const RequestContext = createContext();

export default function RequestContextProvider(props) {
  const [url, setUrl] = useState("http://localhost:5280/")
  const [type, setType] = useState("GET")
  const [body, setBody] = useState({})
  const [head, setHead] = useState({})
  const [resp, setResp] = useState(null)

  const r = v => {
    setResp((typeof v) + ":\n" + v);
    console.log(typeof v);
    if (v instanceof Object) {
      for (let i in v) {
        let o = v[i];
        console.log(i + ": (" + typeof o + ") " + o);
      }
    }
    console.log(v);
  }

  const doRequest = () => {
    console.log("Do Request!");
    performRequest(type, url, head, body, r, r, r);
    //TODO:
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
