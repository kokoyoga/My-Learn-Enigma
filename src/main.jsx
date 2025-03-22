import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {HeroUIProvider} from "@heroui/react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {reducers} from "./store";
import {createStore} from "redux";

const store = createStore(reducers);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <HeroUIProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HeroUIProvider>
    </Provider>
  </StrictMode>,
);
