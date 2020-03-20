import React, { useEffect, useReducer, createContext } from "react";

//REDUCER
import * as Data from "./reducers/dataReducer";

//FUNCTIONS
import * as dataFunctions from "./functions/dataFunctions";

//CONTEXT
const Context = createContext();

function ContextState({ children }) {
  const [data, dispatchData] = useReducer(Data.reducer, Data.initialState);

  useEffect(() => {
    dataFunctions.fetchData();
  }, []);

  return (
    <Context.Provider
      value={{
        data,
        dispatchData,
        dataFunctions
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextState };
