import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./context/auth-context";
import { WatchLaterProvider } from "./context/watchLater-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <WatchLaterProvider>
        <App />
      </WatchLaterProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
