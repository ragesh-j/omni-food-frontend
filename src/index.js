import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FoodProvider } from "./components/FoodProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FoodProvider>
      <App />
    </FoodProvider>
  </React.StrictMode>
);

reportWebVitals();
