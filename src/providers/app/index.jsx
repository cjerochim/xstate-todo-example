import { useInterpret } from "@xstate/react";
import React, { createContext, useContext } from "react";
import appMachine from "machines/app";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const appService = useInterpret(appMachine, { devTools: true });
  const value = {
    appService,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within the AppProvider");
  }
  return context;
};

export { AppProvider, useApp };
