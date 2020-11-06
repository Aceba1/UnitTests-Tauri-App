import HistoryList from "./components/HistoryList";

import RequestForm from "./components/RequestForm";
import Response from "./components/Response";
import HistoryContextProvider from "./contexts/HistoryContext";
import RequestContextProvider from "./contexts/RequestContext";

function App() {
  return (
    <div className="App">
      <HistoryContextProvider>
        <RequestContextProvider>
          <div className="AppHolder">
            <div className="Requester">
              <RequestForm />
              <Response />
            </div>
            <HistoryList />
          </div>
        </RequestContextProvider>
      </HistoryContextProvider>
    </div>
  );
}

export default App;
