import * as React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import {Provider as ReduxProvider} from "react-redux"
import store from "./Store/store"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </ChakraProvider>
);

reportWebVitals();
