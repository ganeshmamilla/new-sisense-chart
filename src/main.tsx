import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { SisenseContextProvider, ThemeProvider } from "@sisense/sdk-ui";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../src/Style.css";
import "./index.css";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

import HomeLayout from "./Layout/HomeLayout.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <SisenseContextProvider
    url="https://bi.cestrategy.us/"
    token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjMyOWFmYzg3MjNhOTQwMDJlZmYxZTdjIiwiYXBpU2VjcmV0IjoiOWIwYmQ5NzYtNzQ2NC1kMjNlLTVmNjMtOTdhZGIyNDJlZDI0IiwiYWxsb3dlZFRlbmFudHMiOlsiNWZlZGVkNWFmYjFjZTIwMDFhMWQ5YmY4Il0sInRlbmFudElkIjoiNWZlZGVkNWFmYjFjZTIwMDFhMWQ5YmY4IiwiaWF0IjoxNzA2ODY4NzU4fQ.ItEtcHn8ey8iHBHRcZyFD3I2Runmo_c4oFmB7QVCzXM" // replace with the API token of your user account
  >
    <ThemeProvider
      theme={{
        typography: {
          fontFamily: "Optimistic",
        },
      }}
    >
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="*" element={<HomeLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </SisenseContextProvider>
);
