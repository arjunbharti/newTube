import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./context/auth-context";
import { WatchLaterProvider } from "./context/watchLater-context";
import { LikedVideoProvider } from "./context/likedVideos-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <WatchLaterProvider>
        <LikedVideoProvider>
          <App />
        </LikedVideoProvider>
      </WatchLaterProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
