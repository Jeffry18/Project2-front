import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { AuthProvider } from "./context/AuthContext";

import { Toaster } from "sonner";

import queryClient from "./lib/queryClient";

import { QueryClientProvider } from "@tanstack/react-query";

ReactDOM.createRoot(document.getElementById("root")).render(

  <QueryClientProvider client={queryClient}>

    <AuthProvider>


      <App />

      <Toaster richColors position="top-right" />

    </AuthProvider>

  </QueryClientProvider>


);
