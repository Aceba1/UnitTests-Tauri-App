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

import React, { createContext, useContext, useState } from "react";
import ensureBody from "../utils/ensureBody";
import performRequest from "../utils/requests";
import { HistoryContext } from "./HistoryContext";

export const RequestContext = createContext();

export default function RequestContextProvider(props) {
  const [url, setUrl] = useState("http://localhost:5280/")
  const [type, setType] = useState("GET")
  const [body, setBody] = useState({})
  const [head, setHead] = useState({})
  const [resp, setResp] = useState(null)
  const [status, setStatus] = useState("Send a request!")

  const {addRequest, addResponse} = useContext(HistoryContext);

  const requestPass = (v, index) => {
    setResp(v);
    const st = "Success!";
    setStatus(st);
    addResponse(index, v, st);
  }

  const requestFail = (v, index) => {
    setResp(null);
    
    let err = "Request Failed!\n<code>" + v + "</code>";

    setStatus(err);
    addResponse(index, null, err);
  }

  const doRequest = () => {
    console.log("Do Request!");
    setResp(null);
    setStatus("Awaiting <code>" + type + "</code> response from\n<code>" + url + "</code> ...");

    const index = addRequest(new Date().toTimeString(), type, url, head, body);

    performRequest(type, url, ensureBody(head), ensureBody(body), requestPass, requestFail, requestFail, index);
    //TODO:
    // Verify URL?
    // Use ensureBody.js on Body and Header
    // Store response
    // Push to HistoryContext
  }

  return (
    <RequestContext.Provider value={{
      url, setUrl, 
      type, setType, 
      body, setBody, 
      head, setHead, 
      resp, setResp, 
      doRequest, 
      status, setStatus}}>
      {props.children}
    </RequestContext.Provider>
  )
}
