import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import store from "./store/store";
import { productsSlice } from "./store/features/productsSlice";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={productsSlice}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
