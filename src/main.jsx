import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";           // ← import Provider dari react-redux
import store from "./store/redux/store.js";        // ← import store yang sudah dibuat
import "./style/index.css";
import router from "./utils/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Provider membungkus seluruh app — semua komponen bisa akses Redux store */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);