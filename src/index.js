import React from "react";
import ReactDom from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

ReactDom.render(
  <SpeechProvider appId="83df4356-1d6e-4bfc-8d46-5fb088c249d7" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
