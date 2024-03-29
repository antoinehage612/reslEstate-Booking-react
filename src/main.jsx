import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-86jkedxadrskp0a7.us.auth0.com"
      clientId="sXmy03RjREZTlKa7J0mosllpg3cxgQf3"
      authorizationParams={{
        redirect_uri: "https://homys-antoine.netlify.app",
      }}
      audience="https://homys-backend.onrender.com"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
