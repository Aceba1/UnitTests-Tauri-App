// Holds all the requests that have been made
// Item:
// - Time
// - URL
// - Type
// - Header
// - Body
//   - Status
//   - Header
//   - Body
// Provides methods for getting and adding items

import React, { createContext, useState } from "react";

export const HistoryContext = createContext();

export let totalRequestHistory = [];

/**
 * 
 * @param {*} time 
 * @param {*} type 
 * @param {*} url 
 * @param {*} head 
 * @param {*} body 
 * @returns Index of request
 */

const template = {items:[]}

export default function HistoryContextProvider(props) {
  const [history, setHistory] = useState(template)

  const addRequest = (time, type, url, head, body) => {
    let items = history.items;
    const index = items.push({time, type, url, head, body}) - 1;
    setHistory({items});
    return index;
  }

  /**
   * 
   * @param {number} index 
   * @param {{}} resp 
   * @param {string} status 
   */
  const addResponse = (index, resp, status) => {
    let items = history.items;
    const item = items[index];

    item.resp = resp;
    item.status = status;
    //items[index] = {...(items[index]), resp:resp, status:status};
    setHistory({items});
  }

  return (
    <HistoryContext.Provider value={{history:history, addRequest:addRequest, addResponse:addResponse}}>
      {props.children}
    </HistoryContext.Provider>
  )
}
