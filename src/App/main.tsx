import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "../modules/store.ts";
import CounterRepositoryInMemory from "../modules/counter/adapters/in-memory/counter-repository.in-memory.ts";

const store = createStore({
  counterRepository: new CounterRepositoryInMemory([
    { id: crypto.randomUUID(), name: "counter1", state: 0 },
    { id: crypto.randomUUID(), name: "counter2", state: 0 },
  ]),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
