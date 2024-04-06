import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import PostcodeProvider from "./context/PostcodeProvider.jsx";
import StepProvider from "./context/StepProvider.jsx";
import TimeDetailsProvider from "./context/TimeDetailsProvider.jsx";
import "./index.css";
import { router } from "./routes/routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <StepProvider>
          <PostcodeProvider>
            <TimeDetailsProvider>
              <RouterProvider router={router} />
            </TimeDetailsProvider>
          </PostcodeProvider>
        </StepProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
