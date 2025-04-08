import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import UserContext from "./context/userContext.jsx";
import CaptainContext from "./context/CaptainContext.jsx";
import SocketContext from "./context/SocketContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CaptainContext>
      <UserContext>
        <SocketContext>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SocketContext>
      </UserContext>
    </CaptainContext>
  </StrictMode>
);
