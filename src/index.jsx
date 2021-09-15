import React from "react";
import { render } from "react-dom";
import { inspect } from "@xstate/inspect";
import { AppProvider } from "providers/app";
import App from "./App";

inspect({
  iframe: false,
});

import Global from "components/global/Global";

const Root = () => {
  return (
    <AppProvider>
      <Global />
      <App />
    </AppProvider>
  );
};

render(<Root />, document.getElementById("root"));
