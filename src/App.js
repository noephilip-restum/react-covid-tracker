import React from "react";
import Dashboard from "./components/Main";

import { ContextState } from "./ContextConfig";

function App() {
  return (
    <ContextState>
      <Dashboard />
    </ContextState>
  );
}

export default App;
