import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./routing/Routing";
import { WishlistProvider } from "./components/context/WishlistContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WishlistProvider>
      <Routing />
    </WishlistProvider>
  </React.StrictMode>
);
