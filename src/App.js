import React from "react";
import Main from "./components/Dashboard/Main";

import { ContextState } from "./ContextConfig";
const App = () => {
  return (
    <ContextState>
      <Main />
    </ContextState>
  );
};

export default App;
