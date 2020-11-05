import HistoryList from "./components/HistoryList";

import RequestForm from "./components/RequestForm";
import HistoryContextProvider from "./contexts/HistoryContext";
import RequestContextProvider from "./contexts/RequestContext";

function App() {
  return (
    <div className="App">
      <HistoryContextProvider>
        <RequestContextProvider>
          <RequestForm />
          <HistoryList />
        </RequestContextProvider>
      </HistoryContextProvider>
    </div>
  );
}

export default App;
