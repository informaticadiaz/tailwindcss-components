import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ContextoProvider } from "./context/context.tsx";

// import Router from './router/Router'

// const router = createHashRouter(Router)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextoProvider>
      <App />
    </ContextoProvider>
  </React.StrictMode>
);
