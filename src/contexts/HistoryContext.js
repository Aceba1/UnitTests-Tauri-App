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

export default function HistoryContextProvider(props) {
  //const [state, setState] = useState()

  //TODO: Populate!

  return (
    <HistoryContext.Provider value={{}}>
      {props.children}
    </HistoryContext.Provider>
  )
}
